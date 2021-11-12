import React, { useEffect, useState } from 'react'
import { DateAPI } from '../../services/DateAPI/DateAPI.service';
import { TrainingListAPI } from '../../services/TrainingListAPI/TrainingListAPI.service';
import { Button } from '../Ui/Button/Button';
import { TrainingCard } from '../TrainingCard/TrainingCard';
import { ITraining } from './TrainingList.interface';
import classes from './TrainingList.module.scss';
export const TrainingList = () => {

  const [trainingList, setTrainingList] = useState<{date: string, id: number}[]>();

  useEffect(() => {
    const tList = new TrainingListAPI();
    const callback = async () => {
      const response = await tList.getTrainingList();
      setTrainingList(response);
    };
    callback();
  }, [trainingList]);

  const onAddTrainingHandler = () => {
    const trainingList = new TrainingListAPI();
    trainingList.createNewTraining();
  }

  return (
    <div className={classes.trainingList}>
      <Button type='flat' onClickHandler={onAddTrainingHandler}>Add new training</Button>
      <hr />

      {
        trainingList && trainingList.map((training: ITraining) => {
          return <TrainingCard
           key={training.id}
           displayDate={new DateAPI().formatDate(training.date)}
           id={training.id}
           setTrainingList={setTrainingList}
          />
        })
      }
      
    </div>
  )
};
