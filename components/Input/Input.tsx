import React, { useState } from 'react'
import { IProps } from './Input.interface';
import classes from './Input.module.scss';


export const Input = ({type, placeholder}: IProps): JSX.Element => {

  const [inputData, setInputData] = useState<string>('');
 
  return (
    <input 
      type={type}
      className={classes.input}
      placeholder={placeholder}
      value={inputData}
      onChange={e => setInputData(e.target.value)}
    />
  )
};
