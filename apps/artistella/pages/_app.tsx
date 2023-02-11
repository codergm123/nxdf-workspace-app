import { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from './globalstyle';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Welcome to artistella!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
