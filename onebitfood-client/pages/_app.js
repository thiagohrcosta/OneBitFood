import Head from 'next/head';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>One BitFood V2</title>
      <link ref="icon" href="/favicon.icon" />
    </Head>
    <main>
       <Component {...pageProps} />
    </main>
    </>
   )
}

export default MyApp
