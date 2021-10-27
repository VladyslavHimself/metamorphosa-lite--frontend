import React, { useState } from 'react'
import { IProps } from './Input.interface';
import classes from './Input.module.scss';


export const Input = ({type, placeholder, setData}: IProps): JSX.Element => {
  
  const onChangeInputHandler = (data: string) => {
    setData(data);
  }

  return (
    <input 
      type={type}
      className={classes.input}
      placeholder={placeholder}
      onChange={e => onChangeInputHandler(e.target.value)}
    />
  );
};
