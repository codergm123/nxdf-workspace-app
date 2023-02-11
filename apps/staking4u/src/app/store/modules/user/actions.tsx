import {createAction} from 'redux-actions';
import {createRequestActionTypes} from '../../../lib/createRequestSaga';

// 사용자 상태값 초기화(전체)
export const RESET_USER_STATE = 'user/RESET_USER_STATE';
export const reset_user_state = createAction(RESET_USER_STATE);

// public mnemonic 이용해 사용자 이메일 가져오기
export const [
  GET_USER_BY_PUBLIC_MNEMONIC,
  GET_USER_BY_PUBLIC_MNEMONIC_SUCCESS,
  GET_USER_BY_PUBLIC_MNEMONIC_FAILED,
] = createRequestActionTypes('user/GET_USER_BY_PUBLIC_MNEMONIC');
export const get_user_by_public_mnemonic = createAction(
  GET_USER_BY_PUBLIC_MNEMONIC,
);
