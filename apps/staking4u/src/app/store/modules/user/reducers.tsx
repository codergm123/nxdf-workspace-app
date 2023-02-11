import { handleActions } from 'redux-actions';
import produce, { createDraft, finishDraft } from 'immer';
import * as USER from './actions';

const initialState = {
  mnemonic: '',
  userInfo: '',
};

const user = handleActions(
  {
    // 사용자 상태값 초기화(전체)
    [USER.RESET_USER_STATE]: () => {
      console.log('RESET_USER_STATE');
      const draft = createDraft(initialState);
      return finishDraft(draft);
    },
    [USER.GET_USER_BY_PUBLIC_MNEMONIC_SUCCESS]: (state, action) => {
      console.log('GET_ETH_GAS_PRICE_SUCCESS =>', action.payload);
      return produce(state, (draft) => {
        draft.userInfo = action.payload.data;
      });
    },
    [USER.GET_USER_BY_PUBLIC_MNEMONIC_FAILED]: (state, action) => {
      console.log('GET_USER_BY_PUBLIC_MNEMONIC_FAILED =>', action.payload);
      return produce(state, (draft) => {
        ('');
      });
    },
  },
  initialState
);

export default user;
