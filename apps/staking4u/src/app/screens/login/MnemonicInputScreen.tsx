import React, {useEffect, useState} from 'react';
import * as authsActions from '../../store/modules/auths/actions';
import * as registerActions from '../../store/modules/register/actions';
import {
  SafeAreaView,
  ScrollView,
  View,
  ViewBorderRadius,
} from '../../components/styled/View';
import TopBar from '../../components/bar/TopBar';
import {Text} from '../../components/styled/Text';
import BottomButton from '../../components/buttons/BottomButton';
import {NBTextareaRadius} from '../../components/styled/Input';
import I18n from 'react-native-i18n';
import {Actions} from 'react-native-router-flux';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {AESKey, mnemonicEncrypt, storeData} from '../../utils/functions';

const MnemonicInputScreen = () => {
  const {getMnemonicVerification, jwt} = useSelector(
    (state) => ({
      jwt: 200,
      getMnemonicVerification: true,
    }),
    shallowEqual,
  );

  const [mnemonic, setMnemonic] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    async function getStorage() {
      if (jwt && jwt !== 400) {
        await AESKey(mnemonic);
        await storeData('isValidAuth', 'true');
        await storeData('jwt', jwt);
        Actions.reset('tabBar');
      } else if (jwt === 400) {
        dispatch(authsActions.reset_jwt());
        await AESKey(mnemonic);
        Actions.GenerateMnemonic();
        Actions.emailVerificationScreen();
      }
    }

    getStorage();
    return () => {
      dispatch(registerActions.reset_mnemonic_verification());
    };
  }, [jwt]);

  const onPressNext = async () => {
    // if (getMnemonicVerification) {
    //   const param = {
    //     publicMnemonicHash: await mnemonicEncrypt(mnemonic),
    //   };

    //   dispatch(authsActions.post_login(param));
    // }
    Actions.mainScreen();
  };

  const onChangeText = (text) => {
    setMnemonic(text);
  };

  return (
    <SafeAreaView bgNavyTheme>
      <TopBar isLeftButton />
      <ScrollView>
        <View paddingLeft={15} paddingRight={15} marginTop={50}>
          <Text ftWhite ftBigLarge>
            Enter mnemonic
          </Text>
          <Text ftWhite marginTop={30}>
            Have you already signed up before?{'\n'}
            Please enter your mnemonic in a correct order.
          </Text>
          <ViewBorderRadius
            width={'100%'}
            bgDarkGray
            brLightGray
            marginTop={30}>
            <NBTextareaRadius
              {...(getMnemonicVerification
                ? {brSuccess: true}
                : {brDanger: true})}
              paddingLeft={10}
              paddingRight={10}
              paddingTop={10}
              paddingBottom={10}
              ftWhite
              rowSpan={5}
              bordered
              onChangeText={onChangeText}
              value={mnemonic}
            />
          </ViewBorderRadius>
        </View>
      </ScrollView>
      <BottomButton
        {...(getMnemonicVerification
          ? {bgYellowTheme: true}
          : {bgBlueGray: true})}
        text={'Next'}
        onPress={onPressNext}
      />
    </SafeAreaView>
  );
};

export default MnemonicInputScreen;
