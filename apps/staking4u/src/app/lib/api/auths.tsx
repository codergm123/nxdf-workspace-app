import RNFetchBlob from 'rn-fetch-blob';
import { headers } from '../../utils/request';
import ROUTES from '../../routes';

// 이메일 인증코드 전송
export const postEmailAuth = async (params) => {
  try {
    const method = 'POST';
    const url = ROUTES.AUTHS.SEND_EMAIL;
    const body = JSON.stringify(params);

    const result = await RNFetchBlob.config({
      trusty: true,
    }).fetch(method, url, headers(''), body);
    return JSON.parse(result.data);
  } catch (error) {
    console.log('postEmailAuth error => ', error);
  }
};

export const postGenerateJwt = async (param) => {
  const method = 'POST';
  const url = ROUTES.AUTHS.GENERATE_JWT;

  const result = await RNFetchBlob.config({
    trusty: true,
  }).fetch(method, url, headers(''), JSON.stringify(param));

  console.log('postGenerateJwt result ===> ', result.data);
  return JSON.parse(result.data);
};

export const postLogin = async (param) => {
  const method = 'POST';
  const url = ROUTES.AUTHS.LOGIN;

  const result = await RNFetchBlob.config({
    trusty: true,
  }).fetch(method, url, headers(''), JSON.stringify(param));

  console.log('postLogin result ===> ', result.data);
  return JSON.parse(result.data);
};
