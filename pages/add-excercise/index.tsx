import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import { Button } from '../../src/components/Ui/Button/Button';
import { Input } from '../../src/components/Ui/Input/Input';
import { Wrapper } from '../../src/containers/Wrapper/Wrapper';
import { IExcercise } from '../../src/services/ExcerciseListAPI/ExcerciseList.interface';
import { ExcerciseListAPI } from '../../src/services/ExcerciseListAPI/ExcerciseListAPI.service';
import { IPattern } from '../../src/services/PatternsAPI/IPattern';
import { PatternsAPI } from '../../src/services/PatternsAPI/PatternsAPI.service';
import classes from '../../styles/AddExcercisePage.module.scss';

const AddExcercisePage: NextPage = (): JSX.Element => { 
  const router = useRouter();
  const { name, id, trainingId } = router.query;

  const [sets, setSets] = useState<string>('');
  const [reps, setReps] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [muscleTypes, setMuscleTypes] = useState<string[]>();

  useEffect(() => {
    if (router.isReady) {
      const patterns = new PatternsAPI();
      const callback = async () => {
        // #TODO: fix any type
        const _data: any = await patterns.getPatternById(+id!)
        .catch((e) => { throw new Error(e)});
        setMuscleTypes((await _data).body.muscleTypes);
      }
      callback();
    };
  }, [router.isReady]);

  const onAddExcerciseHandler = (): void => {
    const excerciseApi: ExcerciseListAPI = new ExcerciseListAPI();
    const excercise: IExcercise = {
      "name": '' + name,
      "sets": +sets,
      "reps": +reps,
      "weight": +weight,
      "muscleTypes": muscleTypes!
    };
    if (name && reps && sets && muscleTypes) {
      excerciseApi.addExcerciseToTraining(+trainingId!, excercise);
      router.push(`/trainings/${trainingId}`);
    } else {
      console.warn('You missed one of params');
    }
  };

  return (
    <>
      <Head>
        <title>M | Add excercise...</title>
      </Head>
      <Wrapper mode={'development'}>
        <div className={classes['excercise-info']}>
          <div className={classes['excercise-info__header']}>{name}</div>
          <div className={classes['excercise-info__container']}>
            <Input type='text' changeInputState={setSets} placeholder='Sets:' />
            <Input type='text' changeInputState={setReps} placeholder='Reps:' />
            <Input type='text' changeInputState={setWeight} placeholder='Weight:' />
          </div>
          <Button type='text-based' onClickHandler={onAddExcerciseHandler}>Add excercise</Button>
        </div>
      </Wrapper>
    </>
  )
};

export default AddExcercisePage;