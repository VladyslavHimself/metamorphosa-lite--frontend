import type { NextPage } from 'next'
import Head from 'next/head'
import { Auth } from '../components/Auth/Auth';
import { Wrapper } from '../containers/Wrapper/Wrapper';

const Home: NextPage = () : JSX.Element => {
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

export default Home;
