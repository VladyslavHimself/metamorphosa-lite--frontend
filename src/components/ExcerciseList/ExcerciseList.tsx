import React from 'react';
import classes from './ExcerciseList.module.scss';
import { IExcercise } from '../../services/ExcerciseListAPI/ExcerciseList.interface';
import { ExcerciseCard } from '../ExcerciseCard/ExcerciseCard';

interface IProps {
  excercises: IExcercise[] | undefined,
}

export const ExcerciseList = ({ excercises}: IProps) => (
  <div className={classes['excercise-list']}>
    {
      excercises && excercises.length ? excercises.map((excercise: IExcercise) => {
        return (
          <ExcerciseCard
            key={excercise.id}
            name={excercise.name}
            reps={excercise.reps}
            sets={excercise.sets}
            weight={excercise.weight}
            isCreate={excercise.isCreate}
            muscleTypes={excercise.muscleTypes}
          />
        )
      }) : <p>You dont have any excercises here :)</p>
    }
  </div>
);
