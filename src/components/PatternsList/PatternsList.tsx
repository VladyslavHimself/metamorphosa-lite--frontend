import React, { useEffect, useState } from 'react';
import { IPattern } from '../../services/PatternsAPI/IPattern';
import { PatternsAPI } from '../../services/PatternsAPI/PatternsAPI.service';
import { Button } from '../Ui/Button/Button';
import classes from './PatternsList.module.scss';

interface IProps {
  trainingId: string
}

export const PatternsList = ({ trainingId }: IProps): JSX.Element => {
  const [patternsList, setPatternsList] = useState<IPattern[]>();

  const onAddNewPatternHandler = () => {
    console.log('add new pattern...');
  }

  const onOpenPatternHandler = () => {
    console.log('open excercise params by current pattern...');
  }

  useEffect(() => {
    const callback = async () => {
      const patternsAPI = new PatternsAPI();
      const response = await patternsAPI.getPatternsList();
      await setPatternsList(response);
    };
    callback();
  },[])

  return (
    <div className={classes['patterns-list']}>
      <div className={classes['patterns-list__header']}>
        <p>Patterns List</p>
        <Button onClickHandler={onAddNewPatternHandler}  type='text-based'>Add new pattern</Button>
      </div>
      
      <p>Templates</p>
      <div className={classes['patterns-list__container']}>
      <Button onClickHandler={onOpenPatternHandler}  type='text-based'>pull up</Button>
      {
        patternsList && patternsList.map(pattern => {
          return (
            <Button
             key={pattern.id}
             onClickHandler={onOpenPatternHandler}
             type='text-based'
            >
              {pattern.body.name}
            </Button>
          )
        })
      }
      </div>
      
    </div>
  )
}
