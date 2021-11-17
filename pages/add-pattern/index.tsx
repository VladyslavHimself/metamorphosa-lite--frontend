import React, { ReactNode, useState } from 'react';
import { NextPage } from 'next';
import { Wrapper } from '../../src/containers/Wrapper/Wrapper';
import { Input } from '../../src/components/Ui/Input/Input';
import classes from '../../styles/AddPatternPage.module.scss';
import { Button } from '../../src/components/Ui/Button/Button';
import { PatternsAPI } from '../../src/services/PatternsAPI/PatternsAPI.service';
import { useRouter } from 'next/dist/client/router';

const AddPatternPage: NextPage = () => {

  const [excerciseName, setExcerciseName] = useState<string>('');
  const [muscleTypes, setMuscleTypes] = useState<string[]>([]);
  const router = useRouter();

  const onChangeActionHandler = (e: React.ChangeEvent<HTMLInputElement>, muscle: string) => {
    if (e.target.checked) {
      console.log('added ' + muscle);
      setMuscleTypes([
        ...muscleTypes,
        muscle
      ]);
    } else {
      const filteredArray = muscleTypes.filter(item => item !== muscle);
      setMuscleTypes(filteredArray);
    }
  }

  const columnRender = ([...muscles]) => {
    return (
      <div className="muscle-type-list__column">
        {
          muscles.map((muscle, i) => (
            <div key={`m-${i}`} className={classes['muscle-type-list__checkbox']}>
            <input type="checkbox" name={muscle} id={muscle} onChange={(e) => onChangeActionHandler(e, muscle)}/>
            <div className={classes['muscle-type-list__name']}>{muscle}</div>
          </div>
          ))
        }
      </div>
    )
  }

  const onCreatePatternHandler = () => {
    const patternApi = new PatternsAPI();

    patternApi.createNewPattern(excerciseName, muscleTypes);
    router.push('/patterns');
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