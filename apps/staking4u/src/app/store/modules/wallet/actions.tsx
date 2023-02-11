import {createAction} from 'redux-actions';
import {createRequestActionTypes} from '../../../lib/createRequestSaga';

// 지갑 주소 변경
export const CHANGE_WALLET_ADDRESS = 'wallet/CHANGE_WALLET_ADDRESS';
export const change_wallet_address = createAction(CHANGE_WALLET_ADDRESS);

// ETH 전송 트랜잭션
export const [
  POST_SEND_ETH_TRANSACTION,
  POST_SEND_ETH_TRANSACTION_SUCCESS,
  POST_SEND_ETH_TRANSACTION_FAILED,
] = createRequestActionTypes('wallet/POST_SEND_ETH_TRANSACTION');
export const post_send_eth_transaction = createAction(
  POST_SEND_ETH_TRANSACTION,
);

// ERC20 전송 트랜잭션
export const [
  POST_SEND_ERC20_TRANSACTION,
  POST_SEND_ERC20_TRANSACTION_SUCCESS,
  POST_SEND_ERC20_TRANSACTION_FAILED,
] = createRequestActionTypes('walletTx/POST_SEND_ERC20_TRANSACTION');
export const post_send_erc20_transaction = createAction(
  POST_SEND_ERC20_TRANSACTION,
);

// SOL 전송 트랜잭션
export const [
  POST_SEND_SOL_TRANSACTION,
  POST_SEND_SOL_TRANSACTION_SUCCESS,
  POST_SEND_SOL_TRANSACTION_FAILED,
] = createRequestActionTypes('walletTx/POST_SEND_SOL_TRANSACTION');
export const post_send_sol_transaction = createAction(
  POST_SEND_SOL_TRANSACTION,
);

// SOL 기반 토큰 전송 트랜잭션 ex) RAY
export const [
  POST_SEND_SOL_TOKEN_TRANSACTION,
  POST_SEND_SOL_TOKEN_TRANSACTION_SUCCESS,
  POST_SEND_SOL_TOKEN_TRANSACTION_FAILED,
] = createRequestActionTypes('walletTx/POST_SEND_SOL_TOKEN_TRANSACTION');
export const post_send_sol_token_transaction = createAction(
  POST_SEND_SOL_TOKEN_TRANSACTION,
);

// SOL 기반 토큰 리스트 가져오기
export const [
  GET_SOL_TOKEN_LIST,
  GET_SOL_TOKEN_LIST_SUCCESS,
  GET_SOL_TOKEN_LIST_FAILED,
] = createRequestActionTypes('walletTx/GET_SOL_TOKEN_LIST');
export const get_sol_token_list = createAction(GET_SOL_TOKEN_LIST);

// ETH 가스값 가져오기
export const [
  GET_ETH_GAS_PRICE,
  GET_ETH_GAS_PRICE_SUCCESS,
  GET_ETH_GAS_PRICE_FAILED,
] = createRequestActionTypes('wallet/GET_ETH_GAS_PRICE');
export const get_eth_gas_price = createAction(GET_ETH_GAS_PRICE);

// 메세지 초기화
export const RESET_MESSAGE = 'wallet/RESET_MESSAGE';
export const reset_message = createAction(RESET_MESSAGE);

// Wallet 리덕스 특정 값들 초기화
export const RESET_WALLET = 'wallet/RESET_WALLET';
export const reset_wallet = createAction(RESET_WALLET);

// 지갑 ERC20 잔액 가져오기
export const [
  GET_ERC20_BALANCES,
  GET_ERC20_BALANCES_SUCCESS,
  GET_ERC20_BALANCES_FAILED,
] = createRequestActionTypes('wallet/GET_ERC20_BALANCES');
export const get_erc20_balances = createAction(GET_ERC20_BALANCES);

// 지갑 Solana Token 잔액 가져오기
export const [
  GET_SOL_TOKEN_BALANCES,
  GET_SOL_TOKEN_BALANCES_SUCCESS,
  GET_SOL_TOKEN_BALANCES_FAILED,
] = createRequestActionTypes('wallet/GET_SOL_TOKEN_BALANCES');
export const get_sol_token_balances = createAction(GET_SOL_TOKEN_BALANCES);

// 트랜젝션 검증자 수 조회
export const [
  GET_SOL_TX_CONFIRMATION,
  GET_SOL_TX_CONFIRMATION_SUCCESS,
  GET_SOL_TX_CONFIRMATION_FAILED,
] = createRequestActionTypes('wallet/GET_SOL_TX_CONFIRMATION');
export const get_sol_tx_confirmation = createAction(GET_SOL_TX_CONFIRMATION);
