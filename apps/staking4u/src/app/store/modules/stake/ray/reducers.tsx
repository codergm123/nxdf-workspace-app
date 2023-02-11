import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as STAKE_RAY from './actions';

const initialState = {
  stakingRayInfo: [],
  message: '',
};

const stakeRay = handleActions(
  {
    [STAKE_RAY.RESET_MESSAGE]: (state, action) => {
      console.log('RESET_MESSAGE → ', action.payload);
      return produce(state, (draft) => {
        draft.message = '';
      });
    },

    [STAKE_RAY.POST_RAY_STAKING_SUCCESS]: (state, action) => {
      console.log('POST_RAY_STAKING_SUCCESS → ', action.payload);
      return produce(state, (draft) => {
        draft.message = 'ray staking success';
      });
    },
    [STAKE_RAY.POST_RAY_STAKING_FAILED]: (state, action) => {
      console.log('POST_RAY_STAKING_FAILED → ', action.payload);
      return produce(state, (draft) => {
        draft.message = 'ray staking failure';
      });
    },

    [STAKE_RAY.POST_RAY_UNSTAKING_SUCCESS]: (state, action) => {
      console.log('POST_RAY_UNSTAKING_SUCCESS → ', action.payload);
      return produce(state, (draft) => {
        draft.message = 'ray unstake success';
      });
    },
    [STAKE_RAY.POST_RAY_UNSTAKING_FAILED]: (state, action) => {
      console.log('POST_RAY_UNSTAKING_FAILED → ', action.payload);
      return produce(state, (draft) => {
        draft.message = 'ray unstake failure';
      });
    },

    [STAKE_RAY.POST_RAY_HARVEST_SUCCESS]: (state, action) => {
      console.log('POST_RAY_HARVEST_SUCCESS → ', action.payload);
      return produce(state, (draft) => {
        draft.message = 'ray harvest success';
      });
    },
    [STAKE_RAY.POST_RAY_HARVEST_FAILED]: (state, action) => {
      console.log('POST_RAY_HARVEST_FAILED → ', action.payload);
      return produce(state, (draft) => {
        draft.message = 'ray harvest failure';
      });
    },

    [STAKE_RAY.GET_RAY_STAKING_ACCOUNT_INFO_SUCCESS]: (state, action) => {
      // console.log('GET_RAY_STAKING_ACCOUNT_INFO_SUCCESS → ', action.payload);
      return produce(state, (draft) => {
        draft.stakingRayInfo = action.payload.data.result.filter(
          (item) => item.name === 'RAY',
        );
      });
    },
    [STAKE_RAY.GET_RAY_STAKING_ACCOUNT_INFO_FAILED]: (state, action) => {
      console.log('GET_RAY_STAKING_ACCOUNT_INFO_SUCCESS → ', action.payload);
      return produce(state, (draft) => {
        draft.stakingRayInfo = null;
      });
    },
  },
  initialState,
);

export default stakeRay;
