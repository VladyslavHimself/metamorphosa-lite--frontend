import React from 'react'
import { IProps } from './Input.interface';
import classes from './Input.module.scss';


export const Input = ({type, placeholder, changeInputState}: IProps): JSX.Element => {
  
  const onChangeInputHandler = (data: string) => changeInputState(data);

  return (
    <input 
      type={type}
      className={classes.input}
      placeholder={placeholder}
      onChange={e => onChangeInputHandler(e.target.value)}
    />
  );
};
