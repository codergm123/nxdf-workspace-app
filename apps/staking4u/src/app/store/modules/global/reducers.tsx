import { handleActions } from 'redux-actions';
import * as GLOBAL from './actions';
import produce, { createDraft, finishDraft } from 'immer';

const initialState = {
  toastMessage: null, // 토스트 메세지
  copyText: '', // 클립보드 복사 텍스트
  xlmPublic: '', // XLM Public Key
  xlmSecret: '', // XLM Secret Key
  ethPublic: '', // ETH Public Key
  ethSecret: '', // ETH Secret Key
  solPublic: '', // SOL Public Key
  solSecret: '', // SOL Secret Key
  xlmNetworkMode: 'PUBLIC', // xlm 네트워크 - TESTNET : PUBLIC
  // ETH 네트워크 - (mainnet, ropsten), AAVE 네트워크 - (mainnet, kovan), ORBS 네트워크 - (,)
  ethNetworkMode: 'mainnet',
  solNetworkMode: 'mainnet-beta', // devnet OR testnet OR mainnet-beta
};

const global = handleActions(
  {
    [GLOBAL.CHANGE_CLIPBOARD_TEXT]: (state, action) => {
      console.log('CHANGE_CLIPBOARD_TEXT => ', action.payload);
      return produce(state, (draft) => {
        draft.copyText = action.payload;
      });
    },
    [GLOBAL.CHANGE_TOAST_MESSAGE]: (state, action) => {
      console.log('CHANGE_TOAST_MESSAGE => ', action.payload);
      return produce(state, (draft) => {
        draft.toastMessage = action.payload;
      });
    },
    [GLOBAL.GET_ETH_KEYS_SUCCESS]: (state, action) => {
      console.log('GET_ETH_KEYS_SUCCESS => ', action.payload);
      return produce(state, (draft) => {
        draft.ethPublic = action.payload.data.address; // eth는 address가 public key로 사용된다
        draft.ethSecret = action.payload.data.privateKey;
      });
    },
    [GLOBAL.GET_ETH_KEYS_FAILED]: (state, action) => {
      console.log('GET_ETH_KEYS_FAILED => ', action.payload);
      return produce(state, (draft) => {
        ('');
      });
    },
    [GLOBAL.GET_SOL_KEYS_SUCCESS]: (state, action) => {
      console.log('GET_SOL_KEYS_SUCCESS => ', action.payload);
      return produce(state, (draft) => {
        draft.solPublic = action.payload.data.bip44Change.publicKey;
        draft.solSecret = action.payload.data.bip44Change.keypairSecretKey;
      });
    },
    [GLOBAL.GET_SOL_KEYS_FAILED]: (state, action) => {
      console.log('GET_SOL_KEYS_FAILED => ', action.payload);
      return produce(state, (draft) => {
        ('');
      });
    },
    [GLOBAL.CHANGE_ETH_NETWORK_MODE]: (state, action) => {
      console.log('CHANGE_ETH_NETWORK_MODE => ', action.payload);
      return produce(state, (draft) => {
        draft.ethNetworkMode = action.payload;
      });
    },
  },
  initialState
);

export default global;
