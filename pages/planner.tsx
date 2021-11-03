import { NextPage } from 'next';
import React, { useEffect, useState } from 'react'

const Planner: NextPage = (): JSX.Element | any => {

  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  useEffect(() => {
    if(localStorage.getItem('token')) {
      setIsAuthorized(true);
    } 
  }, []);

  if (isAuthorized) {
    return (
      <h1> Hello</h1>
    );
  } else {
    return (
      <h1> Bad gateway </h1>
    )
  }
};


export default Planner;