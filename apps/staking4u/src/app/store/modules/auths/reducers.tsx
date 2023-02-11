import { handleActions } from 'redux-actions';
import produce from 'immer';
import * as AUTHS from './actions';

const initialState = {
  postEmailAuth: null, // 인증코드 전송
  getEmailAuthCheck: null, // 인증코드 인증 여부 체크
  jwt: null, // jwt
};

const auths = handleActions(
  {
    // 인증코드 전송
    [AUTHS.POST_EMAIL_AUTH_SUCCESS]: (state, action) => {
      console.log('POST_EMAIL_AUTH_SUCCESS => ', action.payload);
      return produce(state, (draft) => {
        draft.postEmailAuth = action.payload;
      });
    },
    [AUTHS.POST_EMAIL_AUTH_FAILED]: (state, action) => {
      console.log('POST_EMAIL_AUTH_FAILED => ', action.payload);
      return produce(state, (draft) => {
        draft.postEmailAuth = null;
      });
    },
    [AUTHS.RESET_EMAIL_AUTH]: (state, action) => {
      console.log('RESET_EMAIL_AUTH => ', action.payload);
      return produce(state, (draft) => {
        draft.postEmailAuth = null;
      });
    },
    [AUTHS.POST_GENERATE_JWT_SUCCESS]: (state, action) => {
      console.log('POST_GENERATE_JWT_SUCCESS => ', action.payload);
      return produce(state, (draft) => {
        draft.jwt = action.payload.data.access_token;
      });
    },
    [AUTHS.POST_GENERATE_JWT_FAILED]: (state, action) => {
      console.log('POST_GENERATE_JWT_FAILED => ', action.payload);
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return produce(state, (draft) => {});
    },
    [AUTHS.POST_LOGIN_SUCCESS]: (state, action) => {
      console.log('POST_LOGIN_SUCCESS => ', action.payload);
      return produce(state, (draft) => {
        draft.jwt = action.payload.data.access_token;
      });
    },
    [AUTHS.POST_LOGIN_FAILED]: (state, action) => {
      console.log('POST_LOGIN_FAILED => ', action.payload);
      return produce(state, (draft) => {
        draft.jwt = action.payload.statusCode;
      });
    },
    [AUTHS.RESET_JWT]: (state, action) => {
      console.log('RESET_JWT => ', action.payload);
      return produce(state, (draft) => {
        draft.jwt = null;
      });
    },
    [AUTHS.CONFIGURE_INIT_JWT]: (state, action) => {
      console.log('CONFIGURE_INIT_JWT => ', action.payload);
      return produce(state, (draft) => {
        draft.jwt = action.payload;
      });
    },
  },
  initialState
);

export default auths;
