import '../src/index.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TODO List</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
