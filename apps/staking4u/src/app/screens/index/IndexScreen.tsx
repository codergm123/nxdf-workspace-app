import React, { useEffect } from 'react';
import {Actions} from 'react-native-router-flux';
import {
  SafeAreaView,
  View,
  ViewRadiusCustom,
} from '../../components/styled/View';
import {Text} from '../../components/styled/Text';
import {ButtonRadius, ButtonBorderRadius} from '../../components/styled/Button';
import {Image, ImageAbsolute} from '../../components/styled/Image';
import startImage from '../../assets/index/start.png';
import holdingImage from '../../assets/index/holding.png';
import mainLogo from '../../assets/common/main_logo.png';



const IndexScreen = () => {

  return (
    <SafeAreaView bgYellowTheme>
      <View flex={1}>
        <ImageAbsolute source={holdingImage} width={'100%'} height={'100%'} />
        <Image source={startImage} height={'90%'} resizeMode={'contain'} />
      </View>
      <ViewRadiusCustom
        flex={1}
        bgNavyTheme
        borderTopLeftRadius={25}
        borderTopRightRadius={25}>
        <View flex={3} alignItems={'center'} justifyContent={'center'}>
          <Image source={mainLogo} height={'70%'} resizeMode={'contain'} />
        </View>
        <View flex={1} alignItems={'center'} justifyContent={'center'}>
          <Text ftBlueGray>Experience your future Finance.</Text>
        </View>
        <View flex={4} alignItems={'center'} justifyContent={'center'}>
          <ButtonRadius
            bgWhite
            width={'88%'}
            paddingTop={10}
            paddingBottom={10}
            marginBottom={10}
            marginLeft={'auto'}
            marginRight={'auto'}
            onPress={Actions.GenerateMnemonic}>
            <Text ftFontNavy bold fontSize={16}>
              Create Wallet
            </Text>
          </ButtonRadius>
          <ButtonBorderRadius
            brWhite
            width={'88%'}
            paddingTop={10}
            paddingBottom={10}
            marginTop={10}
            marginLeft={'auto'}
            marginRight={'auto'}
            onPress={Actions.GetMnemonic}>
            <Text ftWhite bold fontSize={16}>
              Enter Mnemonic
            </Text>
          </ButtonBorderRadius>
        </View>
      </ViewRadiusCustom>
    </SafeAreaView>
  );
};

export default IndexScreen;
