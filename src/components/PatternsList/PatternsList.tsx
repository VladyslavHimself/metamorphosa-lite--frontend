import React, { Children } from 'react';
import { Wrapper } from '../../containers/Wrapper/Wrapper';

interface IProps {
  trainingId: string
}

export const PatternsList = ({ trainingId }: IProps): JSX.Element => {
  return (
    <Wrapper mode={'development'}>
      <div style={{textAlign: 'center'}} className="patterns-list">
        <p>Patterns List</p>
        <span>id: {trainingId}</span>
      </div>
    </Wrapper>
  )
}
