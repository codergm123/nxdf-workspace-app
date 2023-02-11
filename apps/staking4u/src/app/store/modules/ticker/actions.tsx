import {createAction} from 'redux-actions';
import {createRequestActionTypes} from '../../../lib/createRequestSaga';

export const CHANGE_TICKERS = 'ticker/CHANGE_TICKERS';
export const change_tickers = createAction(CHANGE_TICKERS);

export const CHANGE_USD_EXCHANGE_RATE = 'ticker/CHANGE_USD_EXCHANGE_RATE';
export const change_usd_exchange_rate = createAction(CHANGE_USD_EXCHANGE_RATE);
