import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import classes from './Auth.module.scss';
export const Auth = () => {
  return (
    <div className={classes.auth}>
      <div className={classes['auth__heading']}>
        <h1>Metamorphosa Lite</h1>
      </div>
      <hr />
      <div className={classes['auth__inputField']}>
        <Input type='text' />
        <Input type='password' />
      </div>

      <Button value='LogIn' />
    </div>
  );
};