import React from 'react';
import classes from './Button.module.scss';

interface IProps extends React.HTMLProps<HTMLButtonElement> {
  onClickHandler?: () => void,
  children: string,
  type: 'flat' | 'default' | 'text-based',
}

export const Button = ({onClickHandler, children, type}: IProps) => {
  const cls = [classes.button];
  
  if (type === 'flat') cls.push(classes.flat); 
  if (type === 'default') cls.push(classes.default);
  if (type === 'text-based') cls.push(classes['text-based']);

  return (
    <div className={cls.join(' ')} onClick={onClickHandler}>
      <span>{children}</span>
    </div>
  )
};
