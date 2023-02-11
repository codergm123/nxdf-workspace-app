import React, {useEffect} from 'react';
import {shallowEqual, useSelector, useDispatch} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import * as registerActions from '../../store/modules/register/actions';
import * as globalActions from '../../store/modules/global/actions';
import {SafeAreaView, View} from '../../components/styled/View';
import {Text} from '../../components/styled/Text';
import {ButtonRadius} from '../../components/styled/Button';
import {Image} from '../../components/styled/Image';
import TopBar from '../../components/bar/TopBar';
import MnemonicList from './MnemonicList';
import copyIcon from '../../assets/register/icon_copy_grey.png';
import Clipboard from '@react-native-clipboard/clipboard';

const MnemonicGenerationScreen = () => {
  const dispatch = useDispatch();
  const {mnemonic} = useSelector(
    (state) => ({
      mnemonic: state.register.mnemonic,
    }),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(registerActions.post_mnemonic());
  }, []);

  const onPressCopy = () => {
    Clipboard.setString(mnemonic);
    dispatch(globalActions.change_toast_message('Copied!'));
  };

  const onPressNext = () => {
    Actions.mnemonicConfirmationScreen();
  };

  return (
    <SafeAreaView bgNavyTheme>
      <TopBar isLeftButton />
      <View flex={1} paddingLeft={25}>
        <Text ftLightWhite bold fontSize={22} marginBottom={32}>
          Mnemonic Storage
        </Text>
        <Text ftLightWhite ftSmall>
          Do not expose your mnemonic to others!{'\n'}
          Back up the 12 phrases below in a safe place.{'\n'}
          Mnemonic is used to access and recover the real owner's account.{'\n'}
        </Text>
      </View>
      <View flex={5} justifyContent={'center'}>
        <MnemonicList mnemonic={mnemonic.split(' ')} />
        <ButtonRadius
          bgLightWhite
          width={'60%'}
          paddingTop={10}
          paddingBottom={10}
          marginTop={20}
          marginLeft={'auto'}
          marginRight={'auto'}
          onPress={onPressCopy}>
          <Image width={24} height={24} source={copyIcon} />
          <Text ftTheme bold fontSize={14}>
            Copy
          </Text>
        </ButtonRadius>
      </View>
      <View flex={2} justifyContent={'flex-end'}>
        <ButtonRadius
          bgYellowTheme
          width={'88%'}
          paddingTop={10}
          paddingBottom={10}
          marginTop={20}
          marginBottom={20}
          marginLeft={'auto'}
          marginRight={'auto'}
          onPress={onPressNext}>
          <Text ftNavyTheme bold fontSize={16}>
            Next
          </Text>
        </ButtonRadius>
      </View>
    </SafeAreaView>
  );
};

export default MnemonicGenerationScreen;
