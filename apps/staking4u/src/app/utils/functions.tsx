import { NativeModules } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import env from 'react-native-config';
//import {stellar} from './cryptoCurrency';
import { screenHeight, screenWidth } from '../components/styled/ScreenSize';
import { cryptoCurrency } from './cryptoCurrency';

// 값이 비어있는지 확인하는 함수
export const isEmpty = (data) => {
  if (
    typeof data === 'undefined' ||
    data === null ||
    data === '' ||
    data === 'NaN'
  ) {
    return true;
  } else {
    return false;
  }
};

// AsyncStorage 값 읽는 함수
export const getData = async (key) => await AsyncStorage.getItem(key);

export const getDataMulti = async (arr) => {
  return await AsyncStorage.multiGet(arr);
};

// AsyncStorage 값 저장 함수
export const storeData = async (key, value) => {
  return await AsyncStorage.setItem(key, value);
};

export const storeDataMulti = async (arr) => {
  return await AsyncStorage.multiSet(arr);
};

const AesCipher = NativeModules.Aes;

const generateKey = (password, salt, cost, length) =>
  AesCipher.pbkdf2(password, salt, cost, length);

const encryptData = (text, key) => {
  return AesCipher.randomKey(16).then((iv) => {
    return AesCipher.encrypt(text, key, iv).then((cipher) => ({
      cipher,
      iv,
    }));
  });
};

const encryptDataIV = (text, key, iv) => {
  return AesCipher.encrypt(text, key, iv).then((cipher) => ({
    cipher,
    iv,
  }));
};

const decryptData = (encryptedData, key) =>
  AesCipher.decrypt(encryptedData.cipher, key, encryptedData.iv);

let encryptKey = '';
let encryptString = '';
let encryptIv = '';

// 키생성
export const AESKey = async (mnemonic) => {
  try {
    await generateKey(env.AES_PASSWORD, 'SALT', 1000, 256).then((key) => {
      encryptKey = key;

      console.log(`AESKey 생성 ===> ${encryptKey}`);

      storeData('AESKey', encryptKey);
      AESEncrypt(mnemonic, encryptKey);
    });
  } catch (e) {
    console.error(e);
  }
};

export const AESEncrypt = async (plainString, key) => {
  try {
    encryptDataIV(plainString, key, env.IV)
      .then(({ cipher, iv }) => {
        encryptIv = iv;
        encryptString = cipher;

        console.log(`AESEncrypt 니모닉 암호화 스트링 ===> ${encryptString}`);
        storeData('encryptIv', iv);
        storeData('mnemonic', encryptionRegex(encryptString));

        storeData(
          'publicMnemonic',
          mnemonicHalf(encryptionRegex(encryptString))
        );
      })
      .catch((error) => {
        console.log('encryptDataIV Error => ', error);
      });
  } catch (e) {
    console.error(e);
  }
};

export const AESDecrypt = async (key) => {
  const iv = await getData('encryptIv');
  const cipher = decryptionRegex(await getData('mnemonic'));
  try {
    const decryptString = await decryptData({ cipher, iv }, key);

    console.log(`AESDecrypt 니모닉 복호화 스트링 ===> ${decryptString}`);
    return decryptString;
  } catch (e) {
    console.error(e);
  }
};

// SWR 리턴
export const fetcher = (url, token) =>
  axios
    .get(url, token && { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      res.data;
      // console.log('/store/utils/functions SWR fetcher' + res.data);
    });

// 니모닉 절반 자르기
export const mnemonicHalf = (mnemonic) => {
  const len = Math.ceil(mnemonic.length / 2);

  return mnemonic.substr(0, len);
};

export const mnemonicEncrypt = async (plainString) => {
  try {
    return encryptDataIV(plainString, env.AES_KEY, env.IV)
      .then(({ cipher, iv }) => {
        encryptIv = iv;
        encryptString = cipher;

        const mapObj = {
          '/': '-',
          '+': '_',
        };

        return mnemonicHalf(encryptString).replace(
          /\/|\+/gi,
          function (matched) {
            return mapObj[matched];
          }
        );
      })
      .catch((error) => {
        console.log('encryptDataIV Error => ', error);
      });
  } catch (e) {
    console.error(e);
  }
};

export const encryptionRegex = (phrases) => {
  const mapObj = {
    '/': '-',
    '+': '_',
  };

  return phrases.replace(/\/|\+/gi, function (matched) {
    return mapObj[matched];
  });
};

export const decryptionRegex = (phrases) => {
  const mapObj = {
    '-': '/',
    _: '+',
  };

  return phrases.replace(/-|_/gi, function (matched) {
    return mapObj[matched];
  });
};

// Upbit 의 증감 % 반환 (반올림, 절삭 반환)
export const fixPercent = (changeRate) => {
  const newRate = changeRate * 100;
  return newRate.toFixed(2);
};

// 원 단위 미만 절삭, 천단위 콤마 함수
export const localeString = (data) => {
  return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Device 넓이 퍼센트 구하기
export const percentWidth = (percent) =>
  Math.round((percent * screenWidth) / 100);

// Device 높이 퍼센트 구하기
export const percentHeight = (percent) =>
  Math.round((percent * screenHeight) / 100);

// 배열 랜덤 정렬
export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const erc20 = cryptoCurrency.erc20;

// 특정 ThemeToken 결과 값 반환
export const findOneThemeToken = (key) => {
  for (let i = 0; i < erc20.ThemeToken.length; i++) {
    if (erc20.ThemeToken[i].symbol === key) {
      return {
        name: erc20.ThemeToken[i].name,
        symbol: erc20.ThemeToken[i].symbol,
        mainNetContractAddress: erc20.ThemeToken[i].mainNetContractAddress,
        //estNetContractAddress: erc20.ThemeToken[i].testNetContractAddress,
      };
    }
  }
};

// 이더 거래 수수료
export const calculateEthGasFee = (gas) => {
  return Number((gas * 0.000000001 * 21000).toFixed(6));
};

// erc20 거래 수수료
export const calculateERC20GasFee = (gas) => {
  return Number((gas * 0.000000001 * 70000).toFixed(6));
};

export function substringAddress(address, front, back = front) {
  return `${address.substring(0, front)}.....${address.substring(
    address.length - back
  )}`;
}

// 숫자 형식 변경 : 자바스크립트 소수점 뒤에가 길어서 나타나는 현상을 위한 함수
// TODO 좀 더 테스트 필요
export const convertNumberFormat = (digit, target) => {
  if (typeof target === 'string') {
    return Number(Number(target).toFixed(10));
  } else if (typeof target === 'number') {
    return target.toFixed(digit);
  }
};
