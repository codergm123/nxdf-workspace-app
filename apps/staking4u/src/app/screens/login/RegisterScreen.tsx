import React, {useMemo, useState} from 'react';
// NPM Module
import {Actions} from 'react-native-router-flux';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
// Components
import {
  SafeAreaView,
  ScrollView,
  View,
  ViewAbsolute,
  ViewRow,
} from '../../components/styled/View';
import TopBar from '../../components/bar/TopBar';
import BottomButton from '../../components/buttons/BottomButton';
import InputBorderRadius from '../../components/input/InputBorderRadius';
import {ButtonBorderRadius} from '../../components/styled/Button';
import {Text} from '../../components/styled/Text';
// languages
import I18n from '../../config/i18n';
// utils
import {regEmail} from '../../utils/regExp';
// actions
import * as authsActions from '../../store/modules/auths/actions';

// 회원가입
const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('gee8196@gmail.com'); // 이메일
  const [verificationCode, setVerificationCode] = useState(''); // 인증코드

  const {emailAuth} = useSelector(
    (state) => ({emailAuth: state.auths.emailAuth}),
    shallowEqual,
  );

  // 상태값 변경
  const onChange = (event, state) => {
    const {text} = event.nativeEvent;
    const setState = {
      email: setEmail,
      verificationCode: setVerificationCode,
    };
    setState[state](text);
  };

  // 입력값 검증
  const isValid = useMemo(() => {
    return regEmail(email);
  }, [email]);

  // 인증코드 전송 클릭
  const onPressCert = () => {
    const params = {email};
    dispatch(authsActions.post_email_auth(params));
  };

  // 다음 클릭
  const onPressNext = () => {
    // const params = {email};
    // dispatch(authsActions.get_email_auth_check(params));
    Actions.registerSuccessScreen();
  };

  return (
    <SafeAreaView bgTheme>
      <TopBar bgTheme isLeftButton />
      <ScrollView>
        <View paddingLeft={15} paddingRight={15} marginTop={50}>
          <Text ftWhite ftBigLarge>
            {I18n.t('register.welcome')}
          </Text>
          <Text ftWhite marginTop={30} lineHeight={23}>
            {I18n.t('register.registerPhrase')}
          </Text>
          <ViewRow
            width={'100%'}
            marginTop={30}
            justifyContent={'space-between'}>
            <View width={'65%'}>
              <InputBorderRadius
                ftWhite
                width={'100%'}
                label={I18n.t('register.emailLabel')}
                error={I18n.t('register.emailError')}
                placeholder={I18n.t('register.emailPlaceholder')}
                labelColor={{ftWhite: true}}
                isBottomLine={true}
                value={email}
                isValid={regEmail(email)}
                onChange={(event) => onChange(event, 'email')}
              />
            </View>
            <ViewAbsolute width={'30%'} right={0} top={25}>
              <ButtonBorderRadius
                bgPurple
                height={50}
                paddingLeft={5}
                paddingRight={5}
                onPress={onPressCert}>
                <Text ftWhite>인증코드 전송</Text>
              </ButtonBorderRadius>
            </ViewAbsolute>
          </ViewRow>
        </View>
      </ScrollView>
      <BottomButton
        disabled
        text={I18n.t('register.nextButton')}
        onPress={onPressNext}
      />
    </SafeAreaView>
  );
};

export default RegisterScreen;
