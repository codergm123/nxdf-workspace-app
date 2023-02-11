// 화면 전체 스크린 로딩이 필요없는 스크린
export const skipLoadingScreens = ['mainScreen'];

// 로딩이 필요 없는 redux action들
export const skipLoadingActionTypes = ['mnemonic/GET_MNEMONIC_VERIFICATION'];

// 안드로이드 기기 뒤로가기 두 번(앱 종료) 활성 스크린
export const androidAppClose = ['indexScreen', 'mainScreen'];

// coins&tokens all symbols : 시세(tickers)용
export const BINANCE_SYMBOLS = [
  'AAVE/USDT',
  'ETH/USDT',
  'RAY/USDT',
  'SOL/USDT',
];
export const FTX_SYMBOLS = ['ATLAS/USD'];
export const UPBIT_SYMBOLS = ['BTC/KRW', 'ORBS/KRW']; // 참고 BTC/KRW는 무조건 있어야함. API 특성상 배열의 개수가 2개 이상이야함

// erc20 symbols : 토큰 정보용
export const ERC20_TOKENS = ['AAVE', 'ORBS'];

//solans tokens symbols : 토큰 정보용
export const SOL_TOKENS = ['RAY', 'ATLAS'];
