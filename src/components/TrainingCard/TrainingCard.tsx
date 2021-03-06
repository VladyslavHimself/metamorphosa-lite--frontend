import { useRouter } from 'next/dist/client/router';
import React, { useRef } from 'react'
import { TrainingListAPI } from '../../services/TrainingListAPI/TrainingListAPI.service';
import classes from './TrainingCard.module.scss';

interface IProps {
  id: number, 
  displayDate: string,
  setTrainingList: React.Dispatch<React.SetStateAction<{date: string; id: number;}[] | undefined>>,
}

export const TrainingCard = ({id, displayDate, setTrainingList }: IProps) => {
  const removeRef = useRef(null);
  const router = useRouter();
  const onClickCardHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

    const trainingList = new TrainingListAPI();

    if(e.target === removeRef.current) {
      trainingList.removeTraining(id);
      setTrainingList([]);
    } else {
      console.log('opened previous training', id);
      router.push(`/trainings/${id}`)
    }
  }


  return (
    <div className={classes.trainingCard} onClick={e => onClickCardHandler(e)}>
        <span>{displayDate}</span>
        <span className={classes.trainingCard__remove} ref={removeRef}> Remove </span>
    </div>
  );
};