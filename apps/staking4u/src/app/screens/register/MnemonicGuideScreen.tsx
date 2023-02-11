import React from 'react';
import Topbar from '../../components/bar/TopBar';
import {Actions} from 'react-native-router-flux';
import {SafeAreaView, View} from '../../components/styled/View';
import {Text} from '../../components/styled/Text';
import {Image} from '../../components/styled/Image';
import {ButtonRadius} from '../../components/styled/Button';
import mnemonicGuideImage from '../../assets/register/mnemonic_guide.png';

const MnemonicGuideScreen = () => {
  const onPressNext = () => {
    Actions.mnemonicGenerationScreen();
  };

  return (
    <SafeAreaView bgNavyTheme>
      <Topbar isLeftButton />
      <View flex={1} paddingLeft={25}>
        <Text ftLightWhite bold fontSize={22} marginBottom={32}>
          Create Mnemonic
        </Text>
        <Text ftLightWhite ftSmall>
          12 recovery phrases will appear.{'\n'}
          Mnemonic can perfectly control funds of your account and{'\n'}
          can be used for access to cryptographic keys.{'\n'}
          Mnemonic is used to access and recover the real owner's account.
        </Text>
      </View>
      <View flex={4} alignItems={'center'}>
        <Image
          width={'90%'}
          height={'100%'}
          source={mnemonicGuideImage}
          resizeMode={'contain'}
        />
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

export default MnemonicGuideScreen;
