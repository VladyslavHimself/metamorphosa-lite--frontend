import React from 'react';
import { TrainingListAPI } from '../../services/TrainingListAPI/TrainingListAPI.service';
import classes from './AddTraining.module.scss';

export const AddTraining = () => {

  const onAddTrainingHandler = () => {
    const trainingList = new TrainingListAPI();
    trainingList.createNewTraining();
  }

  return (
    <div className={classes.trainingList__addTraining} onClick={onAddTrainingHandler}>
      <span>Add new training</span>
    </div>
  )
};
