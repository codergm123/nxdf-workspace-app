
const BASE_URL = "https://api.coingecko.com/api/v3/simple";
 



export const getCoin = {
  info: ({ queryKey }) => {
    const [_,coin] = queryKey
    return fetch(`https://api.coingecko.com/api/v3/coins/${coin.toLowerCase()}`).then(
    (response) => response.json()
  );
  },
  ticker: ({ queryKey }) => {
    const [_,coin] = queryKey
    return fetch(`https://api.coingecko.com/api/v3/coins/${coin.toLowerCase()}/tickers`).then(
    (response) => response.json()
  );
  },
}