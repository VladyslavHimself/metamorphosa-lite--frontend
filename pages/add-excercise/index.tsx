import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react'
import { Button } from '../../src/components/Ui/Button/Button';
import { Input } from '../../src/components/Ui/Input/Input';
import { Wrapper } from '../../src/containers/Wrapper/Wrapper';
import classes from '../../styles/AddExcercisePage.module.scss';

interface IQuery {
  id: number,
  name: string,
}

const AddExcercisePage: NextPage = (): JSX.Element => {

  const [excerciseId, setExcerciseId] = useState<number>();
  const [excerciseName, setExcerciseName] = useState<string>('');
  const [initialId, setInitialId] = useState<number>();

  const [sets, setSets] = useState<string>('');
  const [reps, setReps] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    if(router.isReady) {
      const {id, name, trainingId} = router.query;
      id && setExcerciseId(+id);
      name && setExcerciseName('' + name);
      trainingId && setInitialId(+trainingId);
    }
  }, [router.isReady, sets])

  const onAddExcerciseHandler = () => {
    console.log('add excercise to list');
  }

  return (
    <Wrapper mode={'development'}>
      <div className={classes['excercise-info']}>
        <div className={classes['excercise-info__header']}>{excerciseName}</div>
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