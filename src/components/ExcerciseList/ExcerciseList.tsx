import React, { useEffect, useState } from 'react'
import { TrainingListAPI } from '../../services/TrainingListAPI/TrainingListAPI.service';
import { IExcerciseCard } from '../../types/ExcerciseCard.interface';
import { ExcerciseCard } from '../ExcerciseCard/ExcerciseCard';
import classes from './ExcerciseList.module.scss';

export const ExcerciseList = ({ excercises, query }: any) => {

  
  const [currentId, setCurrentId] = useState<any>();

  useEffect(() => {
    const callback = async () => {
      const tList = new TrainingListAPI();
      const response = await tList.getTrainingList();
      response.map((e: { id: number; date: string; }) => {
       if (e.id == query.id) {
        setCurrentId(e.date);
       }
      });
    };
    callback();
    
  }, [query.id]);

  return (
    <div className={classes['excercise-list']}>
      <h4 className={classes['excercise-list__date']}>{new Date(currentId).toDateString()}</h4>
        <div className={classes['excercises-container']}>
          {
            excercises.length ? excercises.map((excercise: IExcerciseCard) => {
              return (
                <ExcerciseCard
                  key={excercise.id}
                  name={excercise.name}
                  reps={excercise.reps}
                  sets={excercise.sets}
                  weight={excercise.weight}
                />
              )
            }) : <p>You dont have any excercises here :)</p>
          }
        </div>
      </div>
  )
};
