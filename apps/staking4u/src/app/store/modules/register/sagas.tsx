import {takeLatest} from 'redux-saga/effects';
import createRequestSaga from '../../../lib/createRequestSaga';
import * as REGISTER from './actions';
import * as mnemonicAPI from '../../../lib/api/mnemonic';

const postMnemonic = createRequestSaga(
  REGISTER.POST_MNEMONIC,
  mnemonicAPI.postMnemonic,
);

const getMnemonicVersion = createRequestSaga(
  REGISTER.GET_MNEMONIC_VERIFICATION,
  mnemonicAPI.getMnemonicVerification,
);

export default function* rootSaga() {
  yield [
    yield takeLatest(REGISTER.POST_MNEMONIC, postMnemonic),
    yield takeLatest(REGISTER.GET_MNEMONIC_VERIFICATION, getMnemonicVersion),
  ];
}
