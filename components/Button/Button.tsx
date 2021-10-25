import React from 'react'
import { IProps } from './Button.interface';
import classes from './Button.module.scss';

export const Button = ({ value }: IProps ) => {
  return (
    <button className={classes.button}>
      {value}
    </button>
  );
};
