import {createAction} from 'redux-actions';
import {createRequestActionTypes} from '../../../../lib/createRequestSaga';

// 스테이킹 관련 메세지 초기화
export const RESET_MESSAGE = 'stakeRay/RESET_MESSAGE';
export const reset_message = createAction(RESET_MESSAGE);

// POST_RAY_STAKING
export const [
  POST_RAY_STAKING,
  POST_RAY_STAKING_SUCCESS,
  POST_RAY_STAKING_FAILED,
] = createRequestActionTypes('stakeRay/POST_RAY_STAKING');
export const post_ray_staking = createAction(POST_RAY_STAKING);

// 스테이킹을 넣은 것을 모두 상환 (스테이킹 원금 + 보상)
export const [
  POST_RAY_UNSTAKING,
  POST_RAY_UNSTAKING_SUCCESS,
  POST_RAY_UNSTAKING_FAILED,
] = createRequestActionTypes('stakeRay/POST_RAY_UNSTAKING');
export const post_ray_unstaking = createAction(POST_RAY_UNSTAKING);

// 스테이킹 보상만 상환
export const [
  POST_RAY_HARVEST,
  POST_RAY_HARVEST_SUCCESS,
  POST_RAY_HARVEST_FAILED,
] = createRequestActionTypes('stakeRay/POST_RAY_HARVEST');
export const post_ray_harvest = createAction(POST_RAY_HARVEST);

// 레이디움 스테이킹 계좌 정보 조회
export const [
  GET_RAY_STAKING_ACCOUNT_INFO,
  GET_RAY_STAKING_ACCOUNT_INFO_SUCCESS,
  GET_RAY_STAKING_ACCOUNT_INFO_FAILED,
] = createRequestActionTypes('stakeRay/GET_RAY_STAKING_ACCOUNT_INFO');
export const get_ray_staking_account_info = createAction(
  GET_RAY_STAKING_ACCOUNT_INFO,
);
