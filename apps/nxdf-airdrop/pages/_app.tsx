import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import React, {useMemo} from "react";

import dynamic from 'next/dynamic';
import {clusterApiUrl, ConnectionProvider, WalletAdapterNetwork } from '@nxdf/shared/services';

const SOLANA_NETWORK = WalletAdapterNetwork.Mainnet;
// const SOLANA_NETWORK = WalletAdapterNetwork.Devnet;
const network = SOLANA_NETWORK;

const WalletProvider = dynamic(
  async () => {
    const { WalletProvider } = await import('@nxdf/shared/services');
    return WalletProvider;
  },
  {
    ssr: false,
  }
);

function CustomApp({ Component, pageProps }: AppProps) {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  return (
    <>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider>
          <Head>
            <title>Welcome to airdrop!</title>
          </Head>
          <main className="app">
            <Component {...pageProps} />
          </main>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

export default CustomApp;
