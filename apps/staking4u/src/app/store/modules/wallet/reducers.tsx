import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as WALLET from './actions';

const initialState = {
  message: '',
  ethGasPrice: 0,
  address: '',
  solTokenList: [],
  erc20Tokens: null,
  solTokens: null,
  rayBalance: 0,
  blockConfirmation: 0,
};

const wallet = handleActions(
  {
    [WALLET.CHANGE_WALLET_ADDRESS]: (state, action) => {
      // console.log('CHANGE_WALLET_ADDRESS =>', action.payload);
      return produce(state, (draft) => {
        draft.address = action.payload;
      });
    },
    [WALLET.POST_SEND_ETH_TRANSACTION_SUCCESS]: (state, action) => {
      console.log('POST_SEND_ETH_TRANSACTION_SUCCESS', action.payload);
      return produce(state, (draft) => {
        if (action.payload.responseStatus === 200) {
          draft.message = 'transactionSuccess';
        } else {
          draft.message = 'transactionFailed';
        }
      });
    },
    [WALLET.POST_SEND_ETH_TRANSACTION_FAILED]: (state, action) => {
      console.log('POST_SEND_ETH_TRANSACTION_FAILED', action.payload);
      return produce(state, (draft) => {
        draft.message = 'transactionFailed';
      });
    },
    [WALLET.POST_SEND_ERC20_TRANSACTION_SUCCESS]: (state, action) => {
      console.log('POST_SEND_ERC20_TRANSACTION_SUCCESS', action.payload);
      return produce(state, (draft) => {
        if (action.payload.responseStatus === 200) {
          draft.message = 'transactionSuccess';
        } else {
          draft.message = 'transactionFailed';
        }
      });
    },
    [WALLET.POST_SEND_ERC20_TRANSACTION_FAILED]: (state, action) => {
      console.log('POST_SEND_ERC20_TRANSACTION_FAILED', action.payload);
      return produce(state, (draft) => {
        draft.message = 'transactionFailed';
      });
    },
    [WALLET.POST_SEND_SOL_TRANSACTION_SUCCESS]: (state, action) => {
      console.log('POST_SEND_SOL_TRANSACTION_SUCCESS', action.payload);
      return produce(state, (draft) => {
        if (action.payload.responseStatus === 200) {
          draft.message = 'transactionSuccess';
        } else {
          draft.message = 'transactionFailed';
        }
      });
    },
    [WALLET.POST_SEND_SOL_TRANSACTION_FAILED]: (state, action) => {
      console.log('POST_SEND_SOL_TRANSACTION_FAILED', action.payload);
      return produce(state, (draft) => {
        draft.message = 'transactionFailed';
      });
    },
    [WALLET.POST_SEND_SOL_TOKEN_TRANSACTION_SUCCESS]: (state, action) => {
      console.log('POST_SEND_SOL_TOKEN_TRANSACTION_SUCCESS', action.payload);
      return produce(state, (draft) => {
        if (action.payload.responseStatus === 200) {
          draft.message = 'transactionSuccess';
        } else {
          draft.message = 'transactionFailed';
        }
      });
    },
    [WALLET.POST_SEND_SOL_TOKEN_TRANSACTION_FAILED]: (state, action) => {
      console.log('POST_SEND_SOL_TOKEN_TRANSACTION_FAILED', action.payload);
      return produce(state, (draft) => {
        draft.message = 'transactionFailed';
      });
    },
    [WALLET.GET_SOL_TOKEN_LIST_SUCCESS]: (state, action) => {
      console.log('GET_SOL_TOKEN_LIST_SUCCESS', action.payload);
      return produce(state, (draft) => {
        draft.solTokenList = action.payload.data.tokens;
      });
    },
    [WALLET.GET_ETH_GAS_PRICE_SUCCESS]: (state, action) => {
      console.log('GET_ETH_GAS_PRICE_SUCCESS =>', action.payload);
      return produce(state, (draft) => {
        draft.ethGasPrice = action.payload.data.avg;
      });
    },
    [WALLET.RESET_MESSAGE]: (state, action) => {
      console.log('RESET_MESSAGE', action.payload);
      return produce(state, (draft) => {
        draft.message = '';
      });
    },
    [WALLET.RESET_WALLET]: (state, action) => {
      console.log('RESET_WALLET', action.payload);
      return produce(state, (draft) => {
        draft.address = '';
      });
    },

    [WALLET.GET_ERC20_BALANCES_SUCCESS]: (state, action) => {
      console.log('GET_ERC20_BALANCES_SUCCESS', action.payload.data);
      return produce(state, (draft) => {
        draft.erc20Tokens = action.payload.data.reduce(
          (acc, item) => ({
            ...acc,
            [item.data.tokenSymbol]: item.data,
          }),
          {},
        );
      });
    },
    [WALLET.GET_ERC20_BALANCES_FAILED]: (state, action) => {
      console.log('GET_ERC20_BALANCES_FAILED', action.payload);
      return produce(state, (draft) => {
        draft.erc20Tokens = {};
      });
    },

    [WALLET.GET_SOL_TOKEN_BALANCES_SUCCESS]: (state, action) => {
      console.log('GET_SOL_TOKENS_BALANCES_SUCCESS', action.payload.data);
      return produce(state, (draft) => {
        draft.solTokens = action.payload.data.tokens.reduce(
          (acc, item) => ({
            ...acc,
            [item.tokenSymbol]: item,
          }),
          {},
        );
      });
    },
    [WALLET.GET_SOL_TOKEN_BALANCES_FAILED]: (state, action) => {
      console.log('GET_SOL_TOKENS_BALANCES_FAILED', action.payload);
      return produce(state, (draft) => {
        draft.solTokens = {};
      });
    },
    [WALLET.GET_SOL_TX_CONFIRMATION_SUCCESS]: (state, action) => {
      console.log('GET_SOL_TX_CONFIRMATION_SUCCESS', action.payload);
      return produce(state, (draft) => {
        draft.blockConfirmation = action.payload.data.blockConfirmation;
      });
    },
    [WALLET.GET_SOL_TX_CONFIRMATION_FAILED]: (state, action) => {
      console.log('GET_SOL_TX_CONFIRMATION_FAILED', action.payload);
      return produce(state, (draft) => {
        draft.blockConfirmation = 0;
      });
    },
  },
  initialState,
);

export default wallet;
