import { NextPage } from 'next';
import { Router, useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react'
import { Button } from '../../src/components/Ui/Button/Button';
import { Input } from '../../src/components/Ui/Input/Input';
import { Wrapper } from '../../src/containers/Wrapper/Wrapper';
import { PatternsAPI } from '../../src/services/PatternsAPI/PatternsAPI.service';
import classes from '../../styles/AddExcercisePage.module.scss';

interface IQuery {
  id: number,
  name: string,
}

const AddExcercisePage: NextPage = (): JSX.Element => { 
  const router = useRouter();
  const  { name, id, trainingId } = router.query;

  const [sets, setSets] = useState<string>('');
  const [reps, setReps] = useState<string>('');
  const [weight, setWeight] = useState<string>('');

  const onAddExcerciseHandler = () => {
    const data = {
      "name": name,
      "sets": +sets,
      "reps": +reps,
      "weight": +weight,
      "muscleTypes": ["Legs", "Biceps", "Back"]
    }
  };

  return (
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
    
  )
};

export default AddExcercisePage;