import {takeLatest} from 'redux-saga/effects';
import createRequestSaga from '../../../lib/createRequestSaga';
import * as WALLET from './actions';
import * as walletAPI from '../../../lib/api/wallet';

export const postETHTransaction = createRequestSaga(
  WALLET.POST_SEND_ETH_TRANSACTION,
  walletAPI.postETHTransaction,
);

export const postERC20Transaction = createRequestSaga(
  WALLET.POST_SEND_ERC20_TRANSACTION,
  walletAPI.postERC20Transaction,
);

export const postSOLTransaction = createRequestSaga(
  WALLET.POST_SEND_SOL_TRANSACTION,
  walletAPI.postSOLTransaction,
);

export const postSOLTokenTransaction = createRequestSaga(
  WALLET.POST_SEND_SOL_TOKEN_TRANSACTION,
  walletAPI.postSOLTokenTransaction,
);

export const getSOLTokenList = createRequestSaga(
  WALLET.GET_SOL_TOKEN_LIST,
  walletAPI.getSOLTokenList,
);

export const getETHGasPrice = createRequestSaga(
  WALLET.GET_ETH_GAS_PRICE,
  walletAPI.getETHGasPrice,
);

export const getERC20Balances = createRequestSaga(
  WALLET.GET_ERC20_BALANCES,
  walletAPI.getERC20Balances,
);

export const getSolTokenBalances = createRequestSaga(
  WALLET.GET_SOL_TOKEN_BALANCES,
  walletAPI.getSolTokenBalances,
);

export const getSolTxConfirmation = createRequestSaga(
  WALLET.GET_SOL_TX_CONFIRMATION,
  walletAPI.getSolTxConfirmation,
);

export default function* rootSaga() {
  yield [
    yield takeLatest(WALLET.POST_SEND_ETH_TRANSACTION, postETHTransaction),
    yield takeLatest(WALLET.POST_SEND_ERC20_TRANSACTION, postERC20Transaction),
    yield takeLatest(WALLET.POST_SEND_SOL_TRANSACTION, postSOLTransaction),
    yield takeLatest(
      WALLET.POST_SEND_SOL_TOKEN_TRANSACTION,
      postSOLTokenTransaction,
    ),
    yield takeLatest(WALLET.GET_SOL_TOKEN_LIST, getSOLTokenList),
    yield takeLatest(WALLET.GET_ETH_GAS_PRICE, getETHGasPrice),
    yield takeLatest(WALLET.GET_ERC20_BALANCES, getERC20Balances),
    yield takeLatest(WALLET.GET_SOL_TOKEN_BALANCES, getSolTokenBalances),
    yield takeLatest(WALLET.GET_SOL_TX_CONFIRMATION, getSolTxConfirmation),
  ];
}
