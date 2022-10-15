import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Netflix</title>
        <meta name='description' content='Netflix clone by Wai'/>
        <link rel='icon' href='/netflix-logo.png' />
      </Head> 
      <Component {...pageProps} />

    </>
  
  )
}

export default MyApp
