import Head from 'next/head';
import Navbar from '../components/navbar';

export default function Home() {
  return <>
  <Head>
    <title>Home Page | Damo Softwares</title>
  </Head>
  <body className='antialiased'>
    <Navbar />
  </body>
  </>;
}
