import I18n from 'react-native-i18n';
import lang from './languages';
import AsyncStorage from '@react-native-community/async-storage';

I18n.fallbacks = true;
I18n.defaultLocale = 'kr';

export const initLocale = async () => {
  let lang;
  try {
    lang = await AsyncStorage.getItem('lang');
    console.log('lang......', lang);
    if (lang === 'en') {
      console.log('en');
      I18n.locale = 'en';
    } else {
      console.log('kr');
      I18n.locale = 'kr';
    }
  } catch (error) {
    I18n.locale = 'kr';
    console.log('initLocale error => ', error);
  }
};

I18n.translations = {
  en: lang.en,
  kr: lang.kr,
};

export const setLocale = async (lang) => {
  I18n.locale = lang;
  console.log('setLocale => ', lang);
  await AsyncStorage.setItem('lang', lang);
  const newLang = await AsyncStorage.getItem('lang');
  console.log('newLang => ', newLang);
};

export default I18n;
