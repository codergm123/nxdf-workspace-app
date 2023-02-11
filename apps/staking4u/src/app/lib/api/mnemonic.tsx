import RNFetchBlob from 'rn-fetch-blob';
import ROUTES from '../../routes';
import {headers} from '../../utils/request';

export const postMnemonic = async (params) => {
  try {
    const method = 'POST';
    const url = ROUTES.REGISTER.GENERATE_MNEMONIC;

    const result = await RNFetchBlob.config({
      trusty: true,
    }).fetch(method, url, headers(''));

    // console.log('result ===> ', result);
    return JSON.parse(result.data);
  } catch (error) {
    console.log('postMnemonic error => ', error);
  }
};

export const getMnemonicVerification = async (mnemonic) => {
  const method = 'POST';
  const url = ROUTES.MNEMONIC.MNEMONIC_VERIFICATION;

  const result = await RNFetchBlob.config({
    trusty: true,
  }).fetch(method, url, headers(''), JSON.stringify({mnemonic}));

  console.log('getMnemonicVerification result ===> ', result.data);
  return JSON.parse(result.data);
};
