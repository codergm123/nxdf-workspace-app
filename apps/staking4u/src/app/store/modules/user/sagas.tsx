import {takeLatest} from 'redux-saga/effects';
import * as USER from './actions';
import * as userAPI from '../../../lib/api/user';
import createRequestSaga from '../../../lib/createRequestSaga';

export const getUserByPublicMnemonic = createRequestSaga(
  USER.GET_USER_BY_PUBLIC_MNEMONIC,
  userAPI.getUserByPublicMnemonic,
);

export default function* rootSaga() {
  yield [
    yield takeLatest(USER.GET_USER_BY_PUBLIC_MNEMONIC, getUserByPublicMnemonic),
  ];
}
