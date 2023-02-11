import {createAction} from 'redux-actions';
import {createRequestActionTypes} from '../../../lib/createRequestSaga';

// 클립보드 복사 텍스트
export const CHANGE_CLIPBOARD_TEXT = 'global/CHANGE_CLIPBOARD_TEXT';
export const change_clipboard_text = createAction(CHANGE_CLIPBOARD_TEXT);

// 토스트 메세지 변경
export const CHANGE_TOAST_MESSAGE = 'global/CHANGE_TOAST_MESSAGE';
export const change_toast_message = createAction(CHANGE_TOAST_MESSAGE);

// ETH 키(PUBLIC/SECRET) 가져오기
export const [GET_ETH_KEYS, GET_ETH_KEYS_SUCCESS, GET_ETH_KEYS_FAILED] =
  createRequestActionTypes('global/GET_ETH_KEYS');
export const get_eth_keys = createAction(GET_ETH_KEYS);

// SOL 키(PUBLIC/SECRET) 가져오기
export const [GET_SOL_KEYS, GET_SOL_KEYS_SUCCESS, GET_SOL_KEYS_FAILED] =
  createRequestActionTypes('global/GET_SOL_KEYS');
export const get_sol_keys = createAction(GET_SOL_KEYS);

// ETH 네트워크 모드 변경
export const CHANGE_ETH_NETWORK_MODE = 'global/CHANGE_ETH_NETWORK_MODE';
export const change_eth_network_mode = createAction(CHANGE_ETH_NETWORK_MODE);
