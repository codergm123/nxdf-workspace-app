import { createAction } from 'redux-actions';
import { createRequestActionTypes } from '../../../lib/createRequestSaga';

// 니모닉 생성
export const [POST_MNEMONIC, POST_MNEMONIC_SUCCESS, POST_MNEMONIC_FAILED] =
  createRequestActionTypes('register/POST_MNEMONIC');
export const post_mnemonic = createAction(POST_MNEMONIC);

// 니모닉 검증
export const [
  GET_MNEMONIC_VERIFICATION,
  GET_MNEMONIC_VERIFICATION_SUCCESS,
  GET_MNEMONIC_VERIFICATION_FAILED,
] = createRequestActionTypes('mnemonic/GET_MNEMONIC_VERIFICATION');
export const get_mnemonic_verification = createAction(
  GET_MNEMONIC_VERIFICATION
);

// 니모닉 검증 리셋
export const RESET_MNEMONIC_VERIFICATION =
  'mnemonic/RESET_MNEMONIC_VERIFICATION';
export const reset_mnemonic_verification = createAction(
  RESET_MNEMONIC_VERIFICATION
);
