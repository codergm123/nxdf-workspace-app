import {takeLatest} from 'redux-saga/effects';
import createRequestSaga from '../../../lib/createRequestSaga';
import * as GLOBAL from './actions';
import * as globalAPI from '../../../lib/api/globals';

const getETHKeys = createRequestSaga(GLOBAL.GET_ETH_KEYS, globalAPI.getETHKeys);
const getSOLKeys = createRequestSaga(GLOBAL.GET_SOL_KEYS, globalAPI.getSOLKeys);

export default function* rootSaga() {
  yield [yield takeLatest(GLOBAL.GET_ETH_KEYS, getETHKeys)];
  yield [yield takeLatest(GLOBAL.GET_SOL_KEYS, getSOLKeys)];
}
