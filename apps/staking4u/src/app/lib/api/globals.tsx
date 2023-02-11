import RNFetchBlob from 'rn-fetch-blob';
import ROUTES from '../../routes';
import {headers} from '../../utils/request';

export const getETHKeys = async (param) => {
  const method = 'POST';
  const url = ROUTES.MNEMONIC.ETH_KEY;

  const result = await RNFetchBlob.config({
    trusty: true,
  }).fetch(method, url, headers(''), JSON.stringify(param));

  console.log('getETHKeys result ===> ', result.data);
  return JSON.parse(result.data);
};

export const getSOLKeys = async (param) => {
  const method = 'POST';
  const url = ROUTES.MNEMONIC.SOL_KEY;

  const result = await RNFetchBlob.config({
    trusty: true,
  }).fetch(method, url, headers(''), JSON.stringify(param));

  console.log('getSOLKeys result ===> ', result.data);
  return JSON.parse(result.data);
};
