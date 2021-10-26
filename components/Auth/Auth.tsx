import React, { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import classes from './Auth.module.scss';

import axios from 'axios';


export const Auth = (): JSX.Element => {

  const [emailInput, setEmailInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  
  const onButtonClickHandler = async (): Promise<void> => {
    const LOGIN_API = 'https://www.mcteaparty.fun/api/metamorph/auth/login';
    console.log('logging...');

    const response = await axios.post(LOGIN_API, {
      "email": emailInput,
      "password": passwordInput
    }).then((data) => {
      console.log(data);
    }).catch((e) => {
      console.log('Cannot access data from server...');
    });
  };

  return (
    <div className={classes.auth}>
      <div className={classes['auth__heading']}>
        <h1>Metamorphosa Lite</h1>
      </div>
      <hr />
      <div className={classes['auth__inputField']}>
        <Input
         type='text'
         placeholder='E-mail'
         setData={setEmailInput}
        />

        <Input
         type='password'
         placeholder='Password'
         setData={setPasswordInput}
        />

      </div>

      <Button value='LogIn' onClickHandler={onButtonClickHandler} />
    </div>
  );
};