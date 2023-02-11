import React, { useEffect } from 'react';
// NPM Module
import { BackHandler } from 'react-native';
import { useDispatch } from 'react-redux';
import { Actions } from 'react-native-router-flux';
// languages
import I18n from '../../config/i18n';
// actions
import * as globalActions from '../../store/modules/global/actions';
// utils
import { androidAppClose } from '../../utils/constants';

// 안드로이드 기기 뒤로가기
const AndroidBackHandle = () => {
  const dispatch = useDispatch();

  // 1000(1초) 안에 back 버튼을 한번 더 클릭 할 경우 앱 종료
  let exitApp = false;
  const handleBackButton = () => {
    dispatch(
      globalActions.change_toast_message('Please click BACK again to exit')
    );
    if (!exitApp) {
      exitApp = true;
      setTimeout(() => (exitApp = false), 1000);
    } else {
      // 앱 종료
      BackHandler.exitApp();
    }
  };

  // 뒤로가기 2번 앱 종료
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      // 최초 스크린에서만 뒤로가기 두 번 클릭시 앱 종료(ex, 로그인, 메인)
      androidAppClose.includes(Actions.currentScene) && handleBackButton();
      return true;
    });
  }, []);

  return <></>;
};

export default AndroidBackHandle;
