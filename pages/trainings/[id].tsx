import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react'

const Training: NextPage = () => {
  const [excercises, setExcercises] = useState([]);
  const router = useRouter();

  return (
    <h1>{router.query.id}</h1>
  )
};

export default Training;
