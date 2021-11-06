import React from 'react'
import { IExcerciseCard } from '../../types/ExcerciseCard.interface';

import classes from './ExcerciseCard.module.scss';

export const ExcerciseCard = ({name, reps, sets, weight}: IExcerciseCard) => {
  return (
    <div className={classes['excercise-card']}>
      <div className={classes['excercise-card__name']}>{name}</div>
      <div className={classes['excercise-card__count']}>{sets}/{reps}</div>
      { 
        weight && weight > 0 ? <div className={classes['excercise-card__weight']}>{weight}kg</div> : null 
      }
    </div>
  )
};
