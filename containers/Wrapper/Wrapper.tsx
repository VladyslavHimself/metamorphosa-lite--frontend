import React from 'react';
import styles from './Wrapper.module.scss';
import { IProps } from './Props.interface';

export const Wrapper = ({children, mode}: IProps): JSX.Element => {
  if (mode === 'development') {
    return (
      <div className={styles.wrapper}>
        <p className={styles['mode-notification']}>{mode} edition</p>
        {children}
      </div>
    )  
  };

  return (
    <>
      {children}
    </>
  )
};