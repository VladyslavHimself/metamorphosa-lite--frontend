import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { PatternsList } from '../../src/components/PatternsList/PatternsList';
import { Wrapper } from '../../src/containers/Wrapper/Wrapper';

const PatternsListPage: NextPage = () => {

  const [trainingId, settrainingId] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      router.query.id && settrainingId('' + router.query.id);
    }
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title> M | Choose pattern... </title>
      </Head>
      
      <Wrapper mode={'development'}>
        <PatternsList trainingId={trainingId}/>
      </Wrapper>
    </>

  )
};

export default PatternsListPage;
