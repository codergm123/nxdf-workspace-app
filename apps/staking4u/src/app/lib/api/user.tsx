import RNFetchBlob from 'rn-fetch-blob';
import {headers} from '../../utils/request';
import ROUTES from '../../routes';

export const getUserByPublicMnemonic = async (param) => {
  const method = 'GET';
  const url = ROUTES.USER.GET_USER_BY_PUBLIC_MNEMONIC(param);

  const result = await RNFetchBlob.config({
    trusty: true,
  }).fetch(method, url, headers(''), JSON.stringify(param));

  console.log('getUserByPublicMnemonic result ===> ', result.data);
  return JSON.parse(result.data);
};
