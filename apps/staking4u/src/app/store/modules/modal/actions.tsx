import {createAction} from 'redux-actions';

// 모달 보여짐 변경
export const CHANGE_MODAL_VISIBLE = 'customModal/CHANGE_MODAL_VISIBLE';
export const change_modal_visible = createAction(CHANGE_MODAL_VISIBLE);

// 원버튼 투버튼 변경
export const CHANGE_MODAL_ONE_BUTTON = 'customModal/CHANGE_MODAL_ONE_BUTTON';
export const change_modal_one_button = createAction(CHANGE_MODAL_ONE_BUTTON);

// 모달 속성 변경
export const CHANGE_MODAL_ATTR = 'customModal/CHANGE_MODAL_ATTR';
export const change_modal_attr = createAction(CHANGE_MODAL_ATTR);

// 모달 메세지 변경
export const CHANGE_MODAL_MESSAGE = 'customModal/CHANGE_MODAL_MESSAGE';
export const change_modal_message = createAction(CHANGE_MODAL_MESSAGE);

// 확인 리턴 함수 변경
export const CHANGE_MODAL_ON_PRESS_OK =
  'customModal/CHANGE_MODAL_RETURN_FUNCTION';
export const change_modal_on_press_ok = createAction(CHANGE_MODAL_ON_PRESS_OK);

// 모달 내용 초기화
export const RESET_MODAL_STATE = 'customModal/RESET_MODAL_STATE';
export const reset_modal_state = createAction(RESET_MODAL_STATE);
