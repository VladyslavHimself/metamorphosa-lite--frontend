import { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import { TrainingList } from '../../src/components/TrainingList/TrainingList';
import { Wrapper } from '../../src/containers/Wrapper/Wrapper';

const Trainings: NextPage = (): JSX.Element => {

  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  const PlannerTmpl = (
    <>
      <Head>
        <title>Metamorpohosa Lite</title>
        <meta name="description" content="A lite version of metamorphosa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper mode='development'>
        <div className="planner">
          <TrainingList />
        </div>
      </Wrapper>
    </>
  )

  useEffect(() => {
    if(localStorage.getItem('token')) setIsAuthorized(true);
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