import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { PatternsList } from '../../src/components/PatternsList/PatternsList';

const PatternsListPage: NextPage = () => {

  const [trainingId, settrainingId] = useState<string>('');
  const router = useRouter();

  const grabDataFromRoute = () => {
    const result = router.asPath.split('id=')[1];
    console.log(typeof result);
    return result;
  }

  useEffect(() => {
    settrainingId(grabDataFromRoute());
    grabDataFromRoute();
  }, []);

  return (
    <PatternsList trainingId={trainingId}/>

  )
};

export default PatternsListPage;
