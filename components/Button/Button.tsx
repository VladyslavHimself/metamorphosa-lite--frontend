import React from 'react'
import { IProps } from './Button.interface';
import classes from './Button.module.scss';

export const Button = ({ value, onClickHandler }: IProps ) => {
  return (
    <button className={classes.button} onClick={onClickHandler}>
      {value}
    </button>
  );
};
