import React from 'react'
import classes from './TrainingCard.module.scss';

export const TrainingCard = (props) => {
  return (
    <div className={classes.trainingCard}>
        <span> {props.displayDate}</span>
        <span className={classes.trainingCard__remove}> Remove </span>
    </div>
  )
};