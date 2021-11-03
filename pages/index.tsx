import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Auth } from '../src/components/Auth/Auth';
import { Wrapper } from '../src/containers/Wrapper/Wrapper';
import { useRouter } from 'next/dist/client/router';

const Home: NextPage = (): JSX.Element | any => {

  const history = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuthorized(true);
    }
  }, []);

  if (isAuthorized) {
    history.push('/planner');
    return <h1>Redirect...</h1>

  } else {
    return (
      <div>
        <Head>
          <title>Metamorpohosa Lite</title>
          <meta name="description" content="A lite version of metamorphosa" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Wrapper mode='development'>
          <Auth />
        </Wrapper>
      </div>
    )
  }
}

export default Home;


// return (
//   <div>
//     <Head>
//       <title>Metamorpohosa Lite</title>
//       <meta name="description" content="A lite version of metamorphosa" />
//       <link rel="icon" href="/favicon.ico" />
//     </Head>

//     <Wrapper mode='development'>
//       <Auth />
//     </Wrapper>
//   </div>
// )