import React, {useEffect, useState} from 'react';
import useSWR from 'swr';
import env from 'react-native-config';
import {useDispatch} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import * as authsActions from '../../store/modules/auths/actions';
import * as globalActions from '../../store/modules/global/actions';
import * as modalActions from '../../store/modules/modal/actions';
import {SafeAreaView, View} from '../../components/styled/View';
import {Text} from '../../components/styled/Text';
import {ButtonRadius} from '../../components/styled/Button';
import TopBar from '../../components/bar/TopBar';
import {useDisableBackhandler} from '../../hooks';
import {fetcher, getData, storeData} from '../../utils/functions';

const EmailSendingSuccessScreen = () => {
  const [publicMnemonicHash, setPublicMnemonicHash] = useState('');

  useEffect(() => {
    async function getStorage() {
      setPublicMnemonicHash(await getData('publicMnemonic'));
    }
    getStorage();
  }, []);

  const {data: checkData, error: checkDataError} = useSWR(
    `${env.SERVER_URL}/users/auths/${publicMnemonicHash}`,
    fetcher,
    {
      refreshInterval: 5000,
    },
  );

  useEffect(() => {
    if (checkData?.data.isValidAuth) {
      storeData('isValidAuth', 'true'); // 이메일 인증 성공
      Actions.registerSuccessScreen();
    }
  }, [checkData?.data.isValidAuth]);

  const dispatch = useDispatch();

  const onPressResend = async () => {
    // 이메일 전송 API 호출
    const param = {
      email: await getData('email'),
      publicMnemonicHash: await getData('publicMnemonic'),
    };
    dispatch(authsActions.post_email_auth(param));
    dispatch(
      globalActions.change_toast_message(
        'The verification mail has been sent to you.',
      ),
    );
  };

  const onPressModalOK = async () => {
    dispatch(authsActions.reset_email_auth());
    await AsyncStorage.clear();
    Actions.reset('Index');
  };

  const onPressRefresh = () => {
    // 니모닉 리셋 호출 (db에 현재 해당 user를 삭제할 것인지 그냥 두고 진행할 것인지는 결정해야함)
    dispatch(
      modalActions.change_modal_message(
        'Do you want to go to the home screen?',
      ),
    );
    dispatch(modalActions.change_modal_one_button(false));
    dispatch(modalActions.change_modal_on_press_ok(onPressModalOK));
  };

  useDisableBackhandler();

  return (
    <SafeAreaView bgNavyTheme>
      <TopBar />
      <View flex={1.5} paddingLeft={25} paddingTop={25}>
        <Text ftLightWhite bold fontSize={22} marginBottom={32}>
          The verification mail has been sent to you.
        </Text>
        <Text ftLightWhite ftSmall>
          A verification link has been sent to your e-mail.{'\n'}
          Continue the e-mail verification to complete signing up.{'\n'}
        </Text>
      </View>
      <View flex={2}>
        <ButtonRadius
          bgYellowTheme
          width={'88%'}
          paddingTop={13}
          paddingBottom={13}
          marginBottom={20}
          marginLeft={'auto'}
          marginRight={'auto'}
          onPress={onPressResend}>
          <Text ftFontNavy bold fontSize={13}>
            Did you not receive the e-mail? 🤔
          </Text>
        </ButtonRadius>
        <ButtonRadius
          bgLightWhite
          width={'88%'}
          paddingTop={13}
          paddingBottom={13}
          marginBottom={20}
          marginLeft={'auto'}
          marginRight={'auto'}
          onPress={onPressRefresh}>
          <Text ftNavyTheme bold fontSize={13}>
            Did you not back-up your mnemonic? 😱
          </Text>
        </ButtonRadius>
        <Text ftLightWhite textAlign={'center'} fontSize={12}>
          You cannot gain access or recover your account without your mnemonic.
          {'\n'}
          Make sure to save your mnemonic!{'\n'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default EmailSendingSuccessScreen;
