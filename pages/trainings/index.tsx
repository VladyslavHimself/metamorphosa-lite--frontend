import { NextPage } from 'next';
import React, { useEffect, useState } from 'react'
import { TrainingDayGroup, TrainingList } from '../../src/components/TrainingList/TrainingList';
import { Wrapper } from '../../src/containers/Wrapper/Wrapper';

const Trainings: NextPage = (): JSX.Element => {

  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  const PlannerTmpl = (
    <Wrapper mode='development'>
      <div className="planner">
        <TrainingList />
      </div>
    </Wrapper>
  )


  useEffect(() => {
    if(localStorage.getItem('token')) {
      setIsAuthorized(true);
    } 
  }, []);

  if (isAuthorized) {
    return PlannerTmpl
  } else {
    return (
      <h1> Bad gateway </h1>
    )
  }
};


export default Trainings;