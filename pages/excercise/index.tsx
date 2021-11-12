import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';

const PatternList: NextPage = () => {

  const router = useRouter();

  const grabDataFromRoute = () => {
    return router.asPath.split('id=')[1];
  }

  useEffect(() => {
    grabDataFromRoute();
  }, []);

  return (
    <h1>Hello, {grabDataFromRoute()}</h1>
  )
};

export default PatternList;
