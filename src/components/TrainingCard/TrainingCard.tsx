import { useRouter } from 'next/dist/client/router';
import React, { useRef } from 'react'
import { TrainingListAPI } from '../../services/TrainingListAPI/TrainingListAPI.service';
import classes from './TrainingCard.module.scss';

export const TrainingCard = (props) => {
  const removeRef = useRef(null);
  const router = useRouter();
  const onClickCardHandler = (e) => {

    const trainingList = new TrainingListAPI();

    if(e.target === removeRef.current) {
      trainingList.removeTraining(props.id);
      props.setTrainingList([]);
    } else {
      console.log('opened previous training', props.id);
      router.push(`/trainings/${props.id}`)
    }
  }


  return (
    <div className={classes.trainingCard} onClick={e => onClickCardHandler(e)}>
        <span>{new Date(props.displayDate).toDateString()}</span>
        <span className={classes.trainingCard__remove} ref={removeRef}> Remove </span>
    </div>
  )
};