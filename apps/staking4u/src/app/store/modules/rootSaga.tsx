import { all } from 'redux-saga/effects';
import authsSagas from './auths/sagas';
import userInSagas from './user/sagas';
import registerSagas from './register/sagas';
import globalSagas from './global/sagas';
import walletSagas from './wallet/sagas';
import stakeRaySagas from './stake/ray/sagas';

export default function* rootSaga() {
  yield all([
    authsSagas(),
    userInSagas(),
    registerSagas(),
    globalSagas(),
    walletSagas(),
    stakeRaySagas(),
  ]);
}
