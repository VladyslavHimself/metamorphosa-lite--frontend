import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react'
import { TrainingListAPI } from '../../src/services/TrainingListAPI/TrainingListAPI.service';
import { IExcercise } from '../../src/types/IExcercise.interface';

const Training: NextPage = () => {
  const [excercises, setExcercises] = useState<IExcercise[]>([]);
  const router = useRouter();
  const { query } = router;
  
  useEffect(() => {
    if (!router.isReady) return;
    
    const callback = async () => {
      const trainingList = new TrainingListAPI();
      const id: number = +query.id!
      const excercisesData = await trainingList.getExcercisesFromTraining(id);
      setExcercises(excercisesData);
    }
    callback();

    return () => {
      console.log('clean');
    }
  }, [router.isReady, query.id]);

  return (
    <div>

        {
          excercises.length > 0 ? 
            excercises.map(excercise => {
              return (
                <div key={excercise.id}>
                  <h1 >Name: {excercise.name}</h1>
                  <p>{excercise.reps} / {excercise.sets}</p>
                  <p>weight: {excercise.weight}</p>
                </div>
              )
          }) : <h1>You dont have this excercise</h1>
        }

    </div>
  )
};

export default Training;
