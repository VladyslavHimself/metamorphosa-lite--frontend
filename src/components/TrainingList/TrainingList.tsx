import React from 'react'
import { AddTraining } from '../AddTraining/AddTraining';
import { TrainingCard } from '../TrainingCard/TrainingCard';
import classes from './TrainingList.module.scss';
export const TrainingList = () => {
  return (
    <div className={classes.trainingList}>
      <span>Training list</span>
      <AddTraining />
      <hr />

      <TrainingCard displayDate='Mon. Oct 25'/>
      
    </div>
  )
};
