import {takeLatest} from 'redux-saga/effects';
import * as AUTHS from './actions';
import * as authsAPI from '../../../lib/api/auths';
import createRequestSaga from '../../../lib/createRequestSaga';

// 이메일 인증코드 전송
const postEmailAuth = createRequestSaga(
  AUTHS.POST_EMAIL_AUTH,
  authsAPI.postEmailAuth,
);

// 유저 JWT 발급
const postGenerateJwt = createRequestSaga(
  AUTHS.POST_GENERATE_JWT,
  authsAPI.postGenerateJwt,
);

// 유저 로그인
const postLogin = createRequestSaga(AUTHS.POST_LOGIN, authsAPI.postLogin);

export default function* rootSaga() {
  yield [
    yield takeLatest(AUTHS.POST_EMAIL_AUTH, postEmailAuth),
    yield takeLatest(AUTHS.POST_GENERATE_JWT, postGenerateJwt),
    yield takeLatest(AUTHS.POST_LOGIN, postLogin),
  ];
}
