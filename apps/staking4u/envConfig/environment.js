import config from './config.json';

const common = { WALLET_API: 'https://wallet-api.atemtech.xyz/v1' };

const ENV_MAP = {
  local: {
    ...common,
    API_URL: 'http://192.168.0.108:3000/v1',
  },
  development: {
    ...common,
    API_URL: 'http://192.168.0.108:3001/v1',
  },
  production: {
    ...common,
    API_URL: 'https://basecode-api.daios.net/v1',
  },
};

export default ENV_MAP[config.REACT_NATIVE_ENV] || ENV_MAP.development;
