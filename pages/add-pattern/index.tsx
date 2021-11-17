import React, { ReactNode, useState } from 'react';
import { NextPage } from 'next';
import { Wrapper } from '../../src/containers/Wrapper/Wrapper';
import { Input } from '../../src/components/Ui/Input/Input';
import classes from '../../styles/AddPatternPage.module.scss';
import { Button } from '../../src/components/Ui/Button/Button';

const AddPatternPage: NextPage = () => {

  const [excerciseName, setExcerciseName] = useState<string>('');
  const [muscleTypes, setMuscleTypes] = useState<string[]>(['Legs', 'Back', 'Chest', 'Biceps', 'Triceps']);


  const columnRender = ([...muscles]) => {
    return (
      <div className="muscle-type-list__column">
        {
          muscles.map(muscle => (
            <div className={classes['muscle-type-list__checkbox']}>
            <input type="checkbox" name="Legs" id="" />
            <div className={classes['muscle-type-list__name']}>{muscle}</div>
          </div>
          ))
        }
      </div>
    )
  }

  const onCreatePatternHandler = () => {
    console.log('create pattern...');
  }

  return (
    <Wrapper mode='development'>
      <div className={classes['pattern-config']}>
        <div className={classes['excercise-name']}>
          <h3>Excercise name:</h3>
          <Input type='text' changeInputState={setExcerciseName} />
        </div>
        <hr />
        <div className={classes['muscle-type']}>
          <div className={classes['muscle-type__header']}>
            <h3>Muscle type:</h3>
          </div>
          
          <div className={classes['muscle-type-list']}>
            { columnRender(['Legs', 'Back', 'Chest']) }
            { columnRender(['Biceps', 'Triceps']) }
        </div>
        </div>

        <Button onClickHandler={onCreatePatternHandler} type='text-based'>Create pattern</Button>
      </div>
    </Wrapper>
  )
};

export default AddPatternPage;