import React, { useRef } from 'react'
import { TrainingListAPI } from '../../services/TrainingListAPI/TrainingListAPI.service';
import classes from './TrainingCard.module.scss';

export const TrainingCard = (props) => {
  const removeRef = useRef(null);
  const onClickCardHandler = (e) => {

    const trainingList = new TrainingListAPI();

    if(e.target === removeRef.current) {
      trainingList.removeTraining(props.id);
      props.setTrainingList([]);
    } else {
      console.log('opened previous training', props.id);
    }

    
  }

  return (
    <div className={classes.trainingCard} onClick={e => onClickCardHandler(e)}>
        <span> {props.displayDate}</span>
        <span className={classes.trainingCard__remove} ref={removeRef}> Remove </span>
    </div>
  )
};