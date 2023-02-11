import {useEffect} from 'react';
import {BackHandler, Platform} from 'react-native';

const useDisableBackhandler = () => {
  const onBackPress = () => {
    return true;
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }
  }, []);
};

export default useDisableBackhandler;
