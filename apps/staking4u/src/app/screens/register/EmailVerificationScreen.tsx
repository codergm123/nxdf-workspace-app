import React, {useEffect, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import * as authsActions from '../../store/modules/auths/actions';
import * as modalActions from '../../store/modules/modal/actions';
import {SafeAreaView, View} from '../../components/styled/View';
import {ButtonRadius} from '../../components/styled/Button';
import {Text} from '../../components/styled/Text';
import TopBar from '../../components/bar/TopBar';
import InputBorderRadius from '../../components/input/InputBorderRadius';
import {regEmail} from '../../utils/regExp';
import {getData, storeData} from '../../utils/functions';

const EmailVerificationScreen = () => {
  const dispatch = useDispatch();
  const {postEmailAuth} = useSelector(
    (state) => ({
      postEmailAuth: state.auths.postEmailAuth,
    }),
    shallowEqual,
  );

  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  useEffect(() => {
    if (postEmailAuth) {
      storeData('isValidAuth', 'false');
      storeData('email', email.trim());
      Actions.emailSendingSuccessScreen();
    }
  }, [postEmailAuth]);

  const OnChangeText = (text) => {
    const isValid = regEmail(text.trim());
    setIsValidEmail(isValid);
    setEmail(text);
  };

  const onPressNext = async () => {
    if (!isValidEmail) {
      dispatch(modalActions.change_modal_message('Invalid email'));
      return;
    } else {
      const param = {
        email: email.trim(),
        publicMnemonicHash: await getData('publicMnemonic'),
      };

      dispatch(authsActions.post_email_auth(param));
    }
  };

  return (
    <SafeAreaView bgNavyTheme>
      <TopBar isLeftButton />
      <View flex={1} bgNavyTheme paddingLeft={25}>
        <Text ftLightWhite bold fontSize={22} marginBottom={32}>
          Email Authentication
        </Text>
        <Text ftLightWhite ftSmall>
          Now the final step.{'\n'}
          Service notices and answers to inquiries will be sent to the verified
          email address.
        </Text>
      </View>
      <View flex={1}>
        <InputBorderRadius
          brBlueGray
          ftLightWhite
          width={'88%'}
          marginLeft={'auto'}
          marginRight={'auto'}
          label={'Enter e-mail address'}
          labelColor={{ftLightWhite: true}}
          placeholder={'Please enter your e-mail address.'}
          onChangeText={OnChangeText}
          value={email}
          maxLength={35}
        />
        <Text ftBlueGray fontSize={12} paddingLeft={25} marginTop={8}>
          Enter a receivable e-mail address that is under your name.
        </Text>
      </View>
      <View flex={1} justifyContent={'flex-end'}>
        <ButtonRadius
          {...(isValidEmail ? {bgYellowTheme: true} : {bgBlueGray: true})}
          width={'88%'}
          paddingTop={10}
          paddingBottom={10}
          marginTop={20}
          marginBottom={20}
          marginLeft={'auto'}
          marginRight={'auto'}
          onPress={onPressNext}>
          <Text
            {...(isValidEmail ? {bgYellowTheme: true} : {bgBlueGray: true})}
            ftFontNavy
            bold
            fontSize={16}>
            Send verification mail
          </Text>
        </ButtonRadius>
      </View>
    </SafeAreaView>
  );
};

export default EmailVerificationScreen;
