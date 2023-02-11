import RNFetchBlob from 'rn-fetch-blob';
import ROUTES from '../../../routes';
import {headers} from '../../../utils/request';

// 레이디움 스테이킹 시작 호출
export const postRayStaking = async ({networkMode, solSecret, amount}) => {
  const method = 'POST';
  const url = ROUTES.STAKE.RAY.STAKING;
  const body = {
    network: networkMode,
    walletPrivateKey: solSecret,
    amount,
  };

  const result = await RNFetchBlob.config({
    trusty: true,
  }).fetch(method, url, headers(''), JSON.stringify(body));

  console.log('postRayStaking result ===>', result.data);
  return JSON.parse(result.data);
};

// 레이디움 언스테이킹 호출
export const postRayUnstaking = async ({networkMode, solSecret, amount}) => {
  const method = 'POST';
  const url = ROUTES.STAKE.RAY.UNSTAKING;
  const body = {
    network: networkMode,
    walletPrivateKey: solSecret,
    amount,
  };

  const result = await RNFetchBlob.config({
    trusty: true,
  }).fetch(method, url, headers(''), JSON.stringify(body));

  console.log('postRayUnstaking result ===>', result.data);
  return JSON.parse(result.data);
};

// 레이디움 스테이킹 보상 수령 호출
export const postRayHarvest = async ({networkMode, solSecret, publicKey}) => {
  const method = 'POST';
  const url = ROUTES.STAKE.RAY.HARVEST;
  const body = {
    network: networkMode,
    walletPrivateKey: solSecret,
    toStakeAccount: publicKey,
  };

  const result = await RNFetchBlob.config({
    trusty: true,
  }).fetch(method, url, headers(''), JSON.stringify(body));

  console.log('postRayHarvest result ===>', result.data);
  return JSON.parse(result.data);
};

// 레이디움 스테이킹 정보 호출
export const getRayStakingAccountInfo = async ({networkMode, solPublic}) => {
  const method = 'GET';
  const url = ROUTES.STAKE.RAY.STAKING_ACCOUNT_INFO(networkMode, solPublic);

  const result = await RNFetchBlob.config({
    trusty: true,
  }).fetch(method, url, headers(''));

  console.log('getRayStakingAccountInfo result ===>', result.data);
  return JSON.parse(result.data);
};
