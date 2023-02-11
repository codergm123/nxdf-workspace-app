import { handleActions } from 'redux-actions';
import produce, { createDraft, finishDraft } from 'immer';
import * as REGISTER from './actions';

const initialState = {
  mnemonic: '',
  getMnemonicVerification: false,
};

const register = handleActions(
  {
    // 니모닉 생성
    [REGISTER.POST_MNEMONIC_SUCCESS]: (state, action) => {
      console.log('POST_MNEMONIC_SUCCESS => ', action.payload.data);
      return produce(state, (draft) => {
        draft.mnemonic = action.payload.data.mnemonic;
      });
    },
    [REGISTER.POST_MNEMONIC_FAILED]: (state, action) => {
      console.log('POST_MNEMONIC_FAILED => ', action.payload);
      return produce(state, (draft) => {
        draft.mnemonic = '';
      });
    },
    [REGISTER.GET_MNEMONIC_VERIFICATION_SUCCESS]: (state, action) => {
      console.log('GET_MNEMONIC_VERIFICATION_SUCCESS => ', action.payload);
      return produce(state, (draft) => {
        draft.getMnemonicVerification = action.payload.data;
      });
    },
    [REGISTER.GET_MNEMONIC_VERIFICATION_FAILED]: (state, action) => {
      console.log('GET_MNEMONIC_VERIFICATION_FAILED => ', action.payload);
      return produce(state, (draft) => {
        ('');
      }); // '' added
    },
    [REGISTER.RESET_MNEMONIC_VERIFICATION]: (state, action) => {
      console.log('RESET_MNEMONIC_VERIFICATION => ', action.payload);
      return produce(state, (draft) => {
        draft.getMnemonicVerification = false;
      });
    },
  },
  initialState
);

export default register;
