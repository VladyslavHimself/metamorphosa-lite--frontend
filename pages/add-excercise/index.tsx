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
  const onAddExcerciseHandler = () => {};

  return (
    <Wrapper mode={'development'}>
      <div className={classes['excercise-info']}>
        <div className={classes['excercise-info__header']}>{'Pulll'}</div>
        <div className={classes['excercise-info__container']}>
          <Input type='text' changeInputState={} placeholder='Sets:' />
          <Input type='text' changeInputState={} placeholder='Reps:' />
          <Input type='text' changeInputState={} placeholder='Weight:' />
        </div>
        <Button type='text-based' onClickHandler={onAddExcerciseHandler}>Add excercise</Button>
      </div>
    </Wrapper>
    
  )
};

export default AddExcercisePage;