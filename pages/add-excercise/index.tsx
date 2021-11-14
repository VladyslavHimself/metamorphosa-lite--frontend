import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react'
import { Wrapper } from '../../src/containers/Wrapper/Wrapper';

interface IQuery {
  id: number,
  name: string,
}

const AddExcercisePage: NextPage = (): JSX.Element => {

  const [excerciseId, setExcerciseId] = useState<number>();
  const [excerciseName, setExcerciseName] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    if(router.isReady) {
      const {id, name} = router.query;
      id && setExcerciseId(+id);
      name && setExcerciseName('' + name);
    }
  }, [router.isReady])

  return (
    <Wrapper mode={'development'}>
      <h1>{excerciseId} & {excerciseName}</h1>
    </Wrapper>
    
  )
};

export default AddExcercisePage;