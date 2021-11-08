import React, { FC } from 'react'
import { IProps } from './Button.interface';
import classes from './Button.module.scss';

export const Button: FC<any> = ({ value, onClickHandler }: IProps ) => (
  <button className={classes.button} onClick={onClickHandler}>
    {value}
  </button>
);
