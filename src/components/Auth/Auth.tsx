import React, { FC, useState } from 'react';
import { Input } from '../Ui/Input/Input';
import classes from './Auth.module.scss';
import { AuthAPI } from '../../services/AuthAPI/AuthAPI.service';
import { useRouter } from 'next/dist/client/router';
import { Button } from '../Ui/Button/Button';

export const Auth: FC = (): JSX.Element => {

  const [emailInput, setEmailInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const router = useRouter();

  const onAuthClickHandler = async (): Promise<void> => {
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
          changeInputState={setEmailInput}
        />

        <Input
          type='password'
          placeholder='Password'
          changeInputState={setPasswordInput}
        />

      </div>

      <Button type='default' onClickHandler={onAuthClickHandler}>Login</Button>
    </div>
  );
};