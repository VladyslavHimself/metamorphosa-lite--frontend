import React, { FC } from 'react'
import { IProps } from './Button.interface';
import classes from './Button.module.scss';

export const Button: FC<any> = ({ children, onClickHandler }: IProps ) => (
  <button className={classes.button} onClick={onClickHandler}>
    {children}
  </button>
);
