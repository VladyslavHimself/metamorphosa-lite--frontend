import { useRouter } from 'next/dist/client/router';
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
  const router = useRouter();
  const onAddNewPatternHandler = () => {
    console.log('add new pattern...');
  }

  const onOpenPatternHandler = (id: number, name: string) => {
    console.log('open excercise params by current pattern...', id, name);
    router.push(`/add-excercise?id=${id}&name=${name}&trainingId=${trainingId}`);
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
        <p>What excercise do you want to</p>
        <Button onClickHandler={onAddNewPatternHandler}  type='text-based'>Add new pattern</Button>
      </div>
      
      <p className={classes['templates-text']}>Patterns</p>
      <div className={classes['patterns-list__container']}>
      {
        patternsList && patternsList.map(pattern => {
          return (
            <Button
             key={pattern.id}
             onClickHandler={() => onOpenPatternHandler(pattern.id, pattern.body.name)}
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
