import {takeLatest} from 'redux-saga/effects';
import createRequestSaga from '../../../../lib/createRequestSaga';
import * as STAKE_RAY from './actions';
import * as stakeRayAPI from '../../../../lib/api/stake/ray';

export const postRayStaking = createRequestSaga(
  STAKE_RAY.POST_RAY_STAKING,
  stakeRayAPI.postRayStaking,
);

export const postRayUnstaking = createRequestSaga(
  STAKE_RAY.POST_RAY_UNSTAKING,
  stakeRayAPI.postRayUnstaking,
);

export const postRayHarvest = createRequestSaga(
  STAKE_RAY.POST_RAY_HARVEST,
  stakeRayAPI.postRayHarvest,
);

export const getRayStakingAccountInfo = createRequestSaga(
  STAKE_RAY.GET_RAY_STAKING_ACCOUNT_INFO,
  stakeRayAPI.getRayStakingAccountInfo,
);

export default function* rootSaga() {
  yield [
    yield takeLatest(STAKE_RAY.POST_RAY_STAKING, postRayStaking),
    yield takeLatest(STAKE_RAY.POST_RAY_UNSTAKING, postRayUnstaking),
    yield takeLatest(STAKE_RAY.POST_RAY_HARVEST, postRayHarvest),
    yield takeLatest(
      STAKE_RAY.GET_RAY_STAKING_ACCOUNT_INFO,
      getRayStakingAccountInfo,
    ),
  ];
}
