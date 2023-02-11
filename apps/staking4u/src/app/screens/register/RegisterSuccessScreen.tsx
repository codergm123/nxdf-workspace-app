import React, {useEffect} from 'react';
import {Actions} from 'react-native-router-flux';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import * as authsActions from '../../store/modules/auths/actions';
import {SafeAreaView, View} from '../../components/styled/View';
import {Image} from '../../components/styled/Image';
import {ButtonRadius} from '../../components/styled/Button';
import TopBar from '../../components/bar/TopBar';
import successImage from '../../assets/register/register_success.png';
import {Text} from '../../components/styled/Text';
import {useDisableBackhandler} from '../../hooks';
import {getData, storeData} from '../../utils/functions';

const RegisterSuccessScreen = () => {
  const {jwt} = useSelector(
    (state) => ({
      jwt: state.auths.jwt,
    }),
    shallowEqual,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (jwt) {
      storeData('jwt', jwt);
      Actions.reset('tabBar');
    }
  }, [jwt]);

  const onPressStart = async () => {
    // 서버에서 private mnemonic 생성을 할수 있도록 신호를 보내주는 API 호출
    // JWT 발급
    const param = {
      email: await getData('email'),
      publicMnemonicHash: await getData('publicMnemonic'),
    };

    dispatch(authsActions.post_generate_jwt(param));
  };

  useDisableBackhandler();

  return (
    <SafeAreaView bgNavyTheme>
      <TopBar />
      <View flex={1} justifyContent={'center'} alignItems={'center'}>
        <Text ftLightWhite bold fontSize={22}>
          Congratulations!
        </Text>
      </View>
      <View flex={2} alignItems={'center'}>
        <Image source={successImage} width={'80%'} resizeMode={'contain'} />
        <Text ftLightWhite textAlign={'center'} ftSmall>
          You have completed all steps{'\n'}
          Meet various financial products at Staking4U.{'\n'}
        </Text>
      </View>
      <View flex={3} justifyContent={'flex-end'}>
        <ButtonRadius
          bgYellowTheme
          width={'88%'}
          paddingTop={10}
          paddingBottom={10}
          marginTop={20}
          marginBottom={20}
          marginLeft={'auto'}
          marginRight={'auto'}
          onPress={onPressStart}>
          <Text ftFontNavy bold fontSize={16}>
            Getting Started!
          </Text>
        </ButtonRadius>
      </View>
    </SafeAreaView>
  );
};

export default RegisterSuccessScreen;
