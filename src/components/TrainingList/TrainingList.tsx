import React, { useEffect, useState } from 'react'
import { TrainingListAPI } from '../../services/TrainingListAPI/TrainingListAPI.service';
import { AddTraining } from '../AddTraining/AddTraining';
import { TrainingCard } from '../TrainingCard/TrainingCard';
import { ITraining } from './TrainingList.interface';
import classes from './TrainingList.module.scss';
export const TrainingList = () => {

  const [trainingList, setTrainingList] = useState([]);

  const tList = new TrainingListAPI();

  useEffect(() => {
    const callback = async () => {
      const response = await tList.getTrainingList();
      setTrainingList(response);
    };

    callback();
  }, []);

  return (
    <div className={classes.trainingList}>
      <AddTraining />
      <hr />

      {
        trainingList.map((training: ITraining) => {
          return <TrainingCard key={training.id} displayDate={training.date} />
        })
      }
      
    </div>
  )
};
