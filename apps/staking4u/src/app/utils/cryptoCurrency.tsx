const upbitAPI = 'https://api.upbit.com';
const bithumbAPI = 'https://api.bithumb.com';
const cctxAPI = 'https://ccxt.daios.net';

export const cryptoCurrency = {
  upbit: {
    ticker: {
      KRW_XLM: `${upbitAPI}/v1/ticker?markets=KRW-XLM`,
      KRW_ETH: `${upbitAPI}/v1/ticker?markets=KRW-ETH`,
    },
  },
  bithumb: {
    ticker: {
      KRW_ORBS: `${bithumbAPI}/public/ticker/ORBS`,
      KRW_AAVE: `${bithumbAPI}/public/ticker/AAVE`,
    },
  },
  ftx: {
    ticker: {
      USD_ATLAS: `${cctxAPI}/exchange/ftx/tickers?symbol=ATLAS/USD`,
    },
  },
  erc20: {
    ThemeToken: [
      {
        name: 'Orbs',
        symbol: 'ORBS',
        mainNetContractAddress: '0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa',
      },
      {
        name: 'Aave',
        symbol: 'AAVE',
        mainNetContractAddress: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
      },
    ],
  },
  stellar: {
    horizon: {
      testNet: 'https://horizon-testnet.stellar.org',
      public: 'https://horizon.stellar.org',
    },
  },
};

export default cryptoCurrency;
