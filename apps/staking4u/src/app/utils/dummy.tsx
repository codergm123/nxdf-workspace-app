import aaveLogo from '../assets/logos/aave.png';
import rayLogo from '../assets/logos/ray.png';
import solLogo from '../assets/logos/sol.png';
import orbsLogo from '../assets/logos/orbs.png';
import nxdfLogo from '../assets/logos/nxdf.png';
import usdcLogo from '../assets/logos/usdc.png';
import atlasLogo from '../assets/logos/atlas.png';
import etherLogo from '../assets/logos/ether.png';
import tehterLogo from '../assets/logos/tether.png';
import banner1 from '../assets/banner/banner_01.png';
import banner2 from '../assets/banner/banner_02.png';
import {localeString} from './functions';

export const products = [
  {
    id: 1,
    name: 'USD-Coin',
    symbol: 'AAVE',
    annualInteresetRate: 6.76,
    logo: usdcLogo,
    minimumLockedAmount: 0,
    officialURL: 'https://aave.com/',
  },
  {
    id: 2,
    name: 'next-defi-protocol',
    symbol: 'NXDF',
    annualInteresetRate: 5.95,
    logo: nxdfLogo,
    minimumLockedAmount: 0,
    officialURL: 'https://www.orbs.com/',
  },
  {
    id: 3,
    name: 'solana',
    symbol: 'SOL',
    annualInteresetRate: 7.27,
    logo: solLogo,
    minimumLockedAmount: 0,
    officialURL: 'https://solana.com/',
  },
  {
    id: 4,
    name: 'raydium',
    symbol: 'RAY',
    annualInteresetRate: 26.65,
    logo: rayLogo,
    minimumLockedAmount: 0,
    officialURL: 'https://raydium.io/',
  },
];

export const SwapData = [
   {
    id: 1,
    name: 'Dummy3',
    symbol: 'SOL',
    annualInteresetRate: 7.27,
    balance: '300',
    logo: solLogo,
    minimumLockedAmount: 0,
    officialURL: 'https://solana.com/',
  },
  {
    id: 2,
    name: 'Dummy4',
    symbol: 'RAY',
    balance: '400',
    annualInteresetRate: 26.65,
    logo: rayLogo,
    minimumLockedAmount: 0,
    officialURL: 'https://raydium.io/',
  },
];

export const LiquidityData = [
  
  {
    id: 1,
    name: 'SOL+USDC',
    symbol: 'SOL',
    annualInteresetRate: 7.27,
    balance: '300',
    logo: [solLogo,usdcLogo],
    minimumLockedAmount: 0,
    officialURL: 'https://solana.com/',
    poolPrice: 1234,
  },
  {
    id: 2,
    name: 'RAY+SOL',
    symbol: 'RAY',
    balance: '400',
    annualInteresetRate: 26.65,
    logo: [rayLogo,solLogo],
    minimumLockedAmount: 0,
    officialURL: 'https://raydium.io/',
    poolPrice: 999999,
  },
  {
    id: 3,
    name: 'SOL+ETH',
    symbol: 'SOL',
    annualInteresetRate: 7.27,
    balance: '300',
    logo: [solLogo,etherLogo],
    minimumLockedAmount: 0,
    officialURL: 'https://solana.com/',
    poolPrice: 1234,
  },
  {
    id: 4,
    name: 'RAY+USDC',
    symbol: 'RAY',
    balance: '400',
    annualInteresetRate: 26.65,
    logo: [rayLogo,usdcLogo],
    minimumLockedAmount: 0,
    officialURL: 'https://raydium.io/',
    poolPrice: 999999,
  },
  {
    id: 5,
    name: 'RAY+USDT',
    symbol: 'SOL',
    annualInteresetRate: 7.27,
    balance: '300',
    logo: [rayLogo,tehterLogo],
    minimumLockedAmount: 0,
    officialURL: 'https://solana.com/',
    poolPrice: 1234,
  },
  {
    id: 6,
    name: 'SOL+USDT',
    symbol: 'RAY',
    balance: '400',
    annualInteresetRate: 26.65,
    logo: [solLogo,tehterLogo],
    minimumLockedAmount: 0,
    officialURL: 'https://raydium.io/',
    poolPrice: 999999,
  },
  {
    id: 7,
    name: 'ATLAS+RAY',
    symbol: 'SOL',
    annualInteresetRate: 7.27,
    balance: '300',
    logo: [atlasLogo,rayLogo],
    minimumLockedAmount: 0,
    officialURL: 'https://solana.com/',
    poolPrice: 1234,
  },
];

export const tickers = {
    AAVE: { info: { priceChangePercent: -1.2 }, close: 1.2 },
    ORBS: { info: { signed_change_rate: 0.1 }, close: 12.45 },
    SOL: { info: { priceChangePercent: -3.14 }, close: 123.45 },
    RAY: { info: { priceChangePercent: 2.23 }, close: 67.8 },
    ATLAS: { info: { priceChangePercent: 10.01 }, close: 10.0 },
  };


export const Walletcoins = [
    {
      name: 'Aave', // 코인명
      symbol: 'AAVE', // 단위
      logo: aaveLogo, // 로고 이미지
      ticker: tickers?.['AAVE']?.close, // 현재 시장 가격 (시세)
      amount: { data: { balance: 1 } }, //  보유 코인 개수
      price: tickers?.['AAVE']?.close * 1, // 현재 시장 가 * 보유 코인 갯수 ( $ )
    },
    {
      name: 'Orbs',
      symbol: 'ORBS',
      logo: orbsLogo,
      ticker: tickers?.['ORBS']?.close,
      amount: { data: { balance: 1 } },
      price:
        (tickers?.['ORBS']?.close * 1) / 1,
    },
    {
      name: 'Solana',
      symbol: 'SOL',
      logo: solLogo,
      ticker: tickers?.['SOL']?.close,
      amount: { data: { balance: 1 } },
      price: tickers?.['SOL']?.close * 1,
    },
    {
      name: 'Raydium',
      symbol: 'RAY',
      logo: rayLogo,
      ticker: tickers?.['RAY']?.close,
      amount: { data: { balance: 1 } },
      price: tickers?.['RAY']?.close * 1,
    },
    {
      name: 'Star Atlas',
      symbol: 'ATLAS',
      logo: atlasLogo,
      ticker: tickers?.['ATLAS']?.close,
      amount: { data: { balance: 1 } },
      price: tickers?.['ATLAS']?.close * 1,
    },
  ];

export const banners = [
  {
    image: banner1,
  },
  {
    image: banner2,
  },
];

export const coins = [
  {
    icon: orbsLogo,
    name: 'ORBS',
    detail: 'Ethereum',
    amount: 10000,
    price: localeString(1030),
  },
  {
    icon: rayLogo,
    name: 'RAY',
    detail: 'Raydium',
    amount: 100.2,
    price: localeString(960.9),
  },
  {
    icon: aaveLogo,
    name: 'AAVE',
    detail: 'Aave',
    amount: 10,
    price: localeString(2740),
  },
];

export const pieChartData = [
  {
    name: 'ORBS',
    amount: 1030,
    color: '#9c88ff',
    legendFontColor: '#7F7F7F',
    legendFontSize: 14,
  },
  {
    name: 'RAY',
    amount: 960,
    color: '#e1b12c',
    legendFontColor: '#7F7F7F',
    legendFontSize: 14,
  },
  {
    name: 'AAVE',
    amount: 2740,
    color: '#44bd32',
    legendFontColor: '#7F7F7F',
    legendFontSize: 14,
  },
];

export const investmentHistory = [
  {
    id: 1,
    type: 'Redeem',
    symbol: 'RAY',
    product: 'RAY Flexible Staking',
    date: '2021-10-19 19:45',
    amount: 100,
    fee: 0.0005,
    from: '25QRGrnqwGaNubc1ezCEfiAXnhuMY1a5MYeGb89xHcWM',
    to: 'Dx9fCpDqq7hz59fjEBFju2xLyPWDsFqyqEru93K9LRYp',
    txHash:
      '8fwES5bU6AtHcwohVRFYD8cEzgnDLMGhtMeYMkZ2xsbA2QnQJLNtuzG6iAv4NcpGuLWtav46J2FzmWhKHoVspmi',
  },
  {
    id: 2,
    type: 'Rewards',
    symbol: 'RAY',
    product: 'RAY Flexible Staking',
    date: '2021-10-09 10:10',
    amount: 100,
    fee: 0.0005,
    from: '25QRGrnqwGaNubc1ezCEfiAXnhuMY1a5MYeGb89xHcWM',
    to: 'Dx9fCpDqq7hz59fjEBFju2xLyPWDsFqyqEru93K9LRYp',
    txHash:
      '37To1XGELoJ1s6jmMm3P2SXh3y2itwTrnuNdyvPfCUVhhSDZiPUf8nnUbUQwahAX2pTtaEVb99RJ37GUZHcKENqi',
  },
  {
    id: 3,
    type: 'Stake',
    symbol: 'RAY',
    product: 'RAY Flexible Staking',
    date: '2021-10-14 13:15',
    amount: 100,
    fee: 0.0005,
    from: '9VnmLdhKU1224jaL9BcrX6DyGmVNd96teHYqAuJT7Yov',
    to: '25QRGrnqwGaNubc1ezCEfiAXnhuMY1a5MYeGb89xHcWM',
    txHash:
      'HNoR8MU2DZ4hUAescVphURqsQ6cbD4XdQuPhEJaS1tp5SLk1EvGeghYj6w8JDCW3nP9oEGuc45TZCmQhm7ELqDA',
  },
];
