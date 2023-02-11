import {createAction} from 'redux-actions';
import {createRequestActionTypes} from '../../../lib/createRequestSaga';

// 이메일 인증코드 전송
export const [
  POST_EMAIL_AUTH,
  POST_EMAIL_AUTH_SUCCESS,
  POST_EMAIL_AUTH_FAILED,
] = createRequestActionTypes('auths/POST_EMAIL_AUTH');
export const post_email_auth = createAction(POST_EMAIL_AUTH);

// 이메일 인증코드 리셋
export const RESET_EMAIL_AUTH = 'auths/RESET_EMAIL_AUTH';
export const reset_email_auth = createAction(RESET_EMAIL_AUTH);

// 유저 JWT 발급 (시작하기 버튼 registerSuccessScreen)
export const [
  POST_GENERATE_JWT,
  POST_GENERATE_JWT_SUCCESS,
  POST_GENERATE_JWT_FAILED,
] = createRequestActionTypes('auths/POST_GENERATE_JWT');
export const post_generate_jwt = createAction(POST_GENERATE_JWT);

// 유저 로그인
export const [POST_LOGIN, POST_LOGIN_SUCCESS, POST_LOGIN_FAILED] =
  createRequestActionTypes('auths/POST_LOGIN');
export const post_login = createAction(POST_LOGIN);

// 유저 jwt 리셋
export const RESET_JWT = 'auths/RESET_JWT';
export const reset_jwt = createAction(RESET_JWT);

// jwt 초기 설정
export const CONFIGURE_INIT_JWT = 'auths/CONFIGURE_JWT';
export const configure_init_jwt = createAction(CONFIGURE_INIT_JWT);
