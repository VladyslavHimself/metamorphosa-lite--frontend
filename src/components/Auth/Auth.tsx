import React, { FC, useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import classes from './Auth.module.scss';
import { AuthAPI } from '../../services/AuthAPI/AuthAPI.service';
import { useRouter } from 'next/dist/client/router';

export const Auth: FC = (): JSX.Element => {

  const [emailInput, setEmailInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const router = useRouter();

  const onButtonClickHandler = async (): Promise<void> => {
    const auth = new AuthAPI();

    const isAuthSuccess = await auth.auth({
      email: emailInput,
      password: passwordInput
    });

    if (isAuthSuccess) {
      router.push('/trainings');
    }
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

      <Button onClickHandler={onButtonClickHandler} > LogIn </Button>
    </div>
  );
};