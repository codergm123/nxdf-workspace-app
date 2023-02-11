import { handleActions } from 'redux-actions';
import * as TICKER from './actions';
import produce, { createDraft, finishDraft } from 'immer';

const initialState = {
  tickers: null,
  usdExchangeRate: 0,
};

const ticker = handleActions(
  {
    [TICKER.CHANGE_TICKERS]: (state, action) => {
      // console.log('CHANGE_TICKERS => ', action.payload);
      return produce(state, (draft) => {
        draft.tickers = action.payload;
      });
    },

    [TICKER.CHANGE_USD_EXCHANGE_RATE]: (state, action) => {
      // console.log('CHANGE_USD_EXCHANGE_RATE => ', action.payload);
      return produce(state, (draft) => {
        draft.usdExchangeRate = action.payload;
      });
    },
  },
  initialState
);

export default ticker;
