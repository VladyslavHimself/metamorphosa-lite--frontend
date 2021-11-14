import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
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
    <Wrapper mode={'development'}>
      <PatternsList trainingId={trainingId}/>
    </Wrapper>
  )
};

export default PatternsListPage;
