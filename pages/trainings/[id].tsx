import React, { useEffect, useState } from 'react';
import classes from '../../styles/training.module.scss';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { ExcerciseList } from '../../src/components/ExcerciseList/ExcerciseList';
import { ExcerciseListAPI } from '../../src/services/ExcerciseListAPI/ExcerciseListAPI.service';
import { IExcercise } from '../../src/services/ExcerciseListAPI/ExcerciseList.interface';
import { Button } from '../../src/components/Button/Button';


import { TrainingListAPI } from '../../src/services/TrainingListAPI/TrainingListAPI.service';
import { DateAPI } from '../../src/services/DateAPI/DateAPI.service';

const Training: NextPage = () => {
  const [excercises, setExcercises] = useState<IExcercise[]>();
  const [trainingDate, setTrainingDate] = useState<string>();
  const router = useRouter();
  const { query } = router;
  // #TODO: With useCallback
  async function loadExcercises() {
    const excerciseList = new ExcerciseListAPI();
    const id: number = +query.id!;
    const excercisesData = await excerciseList.getExcercisesFromTraining(id);
    setExcercises(excercisesData);
    console.log(excercisesData);
  }
  
  async function loadDate() {
    const tList = new TrainingListAPI();
      const response = await tList.getTrainingList();
      response.map((e: {id: number, date: string}) => {
       if ('' + e.id === query.id) {
        const date = new DateAPI();
        setTrainingDate(date.formatDate(e.date));
       }
      });
  }

  const onAddExcerciseHandler = () => {
    console.log('im done', router.query.id)
    router.push(`/excercise?id=${router.query.id}`)
  }

  useEffect(() => {
    if (!router.isReady) return;
         loadExcercises();
         loadDate();
    return () => {
      console.log('clean');
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady, query.id]);

  return (
      <div className={classes.training}>
        <span className={classes.training__date}>
          { new DateAPI().isPresentDay(trainingDate!) ? 'Today\'s training!' : trainingDate }
        </span>
        <Button onClickHandler={onAddExcerciseHandler}>Add new excercise</Button>
        <hr />
        <ExcerciseList excercises={excercises} />
      </div>
  )
};

export default Training;
