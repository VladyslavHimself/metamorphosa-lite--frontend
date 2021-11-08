import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { ExcerciseList } from '../../src/components/ExcerciseList/ExcerciseList';
import { ExcerciseListAPI } from '../../src/services/ExcerciseListAPI/ExcerciseListAPI.service';
import { IExcercise } from '../../src/services/ExcerciseListAPI/ExcerciseList.interface';

const Training: NextPage = () => {
  const [excercises, setExcercises] = useState<IExcercise[]>();
  const router = useRouter();
  const { query } = router;
  
  useEffect(() => {
    if (!router.isReady) return;
    
    const callback = async () => {
      const excerciseList = new ExcerciseListAPI();
      const id: number = +query.id!
      const excercisesData = await excerciseList.getExcercisesFromTraining(id);
      setExcercises(excercisesData);
    }
    callback();      

    return () => {
      console.log('clean');
    }
  }, [router.isReady, query.id]);

  return (
    <div>
      <ExcerciseList excercises={excercises} query={query}/>
    </div>
  )
};

export default Training;
