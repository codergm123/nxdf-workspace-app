import env from 'react-native-config';
import { findOneThemeToken } from './utils/functions';

const serverURL = env.SERVER_URL; // nest server url
const walletURL = env.WALLET_URL; // blockchain server url
const ccxtURL = env.CCXT_URL; // ccxt server url

const routes = {
  // users: `${host}/users`,
  // auths: `${host}/auths`,

  AUTHS: {
    SEND_EMAIL: `${serverURL}/users/auths/email`,
    GENERATE_JWT: `${serverURL}/users`,
    LOGIN: `${serverURL}/users/signin`,
  },
  MNEMONIC: {
    MNEMONIC_VERIFICATION: `${walletURL}/eth/validateMnemonic`,
    XLM_KEY: `${walletURL}/xlm/decodeMnemonic`,
    ETH_KEY: `${walletURL}/eth/decodeMnemonic`,
    SOL_KEY: `${walletURL}/sol/decodeMnemonic`,
  },
  REGISTER: {
    GENERATE_MNEMONIC: `${walletURL}/xlm/mnemonic`,
  },
  WALLET: {
    ETH_TX: `${walletURL}/eth/sendEther`,
    GET_ETH_GAS: `${walletURL}/eth/gasPrice`,
    ERC20_TX: `${walletURL}/eth/sendToken`,
    SEND_SOL_TX: `${walletURL}/sol/send`,
    SEND_SOL_TOKEN_TX: `${walletURL}/sol/tokenSend`,
    GET_SOL_TOKEN: `${walletURL}/sol/tokenBalance`,
    GET_SOL_TX_CONFIRMATION: (networkMode, txHash) =>
      `${env.WALLET_URL}/sol/blockConfirmation?network=${networkMode}&transactionHash=${txHash}`,
    BALANCE: {
      ERC20: (symbol, networkMode, publicKey) =>
        `${
          env.WALLET_URL
        }/eth/tokenBalance?endpoint=${networkMode}&walletAddress=${publicKey}&contractAddress=${
          findOneThemeToken(symbol).mainNetContractAddress
        }`,
      SOL_TOKEN: (networkMode, publicKey) =>
        `${env.WALLET_URL}/sol/tokenBalance?network=${networkMode}&address=${publicKey}`,
    },
    // TODO 사용여부 미정...
    TX: {
      SOL: (
        networkMode,
        publicKey // publicKey : Solana publicKey
      ) =>
        `${env.WALLET_URL}/sol/solTransfer?network=${networkMode}&account=${publicKey}&limit=100&offset=0`,
      SOL_TOKEN: (
        networkMode,
        publicKey // publicKey : 조회하려는 토큰의 public key
      ) =>
        `${env.WALLET_URL}/sol/splTransfer?network=${networkMode}&account=${publicKey}&limit=100&offset=0`,
    },
  },
  TICKER: {
    //exchange : 거래소 이름 & symbols : string[]
    GET_TICKERS: (exchange, symbols) =>
      `${ccxtURL}/exchange/${exchange}/tickers?${symbols
        .map((symbol, index) =>
          index === symbols.length - 1
            ? `symbol=${symbol}`
            : `symbol=${symbol}&`
        )
        .join('')}`,
  },
  STAKE: {
    RAY: {
      STAKING: `${env.WALLET_URL}/ray/stake`,
      UNSTAKING: `${env.WALLET_URL}/ray/unStake`,
      HARVEST: `${env.WALLET_URL}/ray/harvest`,
      STAKING_ACCOUNT_INFO: (network, address) =>
        `${env.WALLET_URL}/ray/stakeAccount?network=${network}&address=${address}`,
    },
  },
  USER: {
    GET_USER_BY_PUBLIC_MNEMONIC: (publicMnemonic) =>
      `${serverURL}/users/${publicMnemonic}`,
  },
};

export default routes;
