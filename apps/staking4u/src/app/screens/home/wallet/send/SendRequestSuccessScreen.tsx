import React from 'react';
import {SafeAreaView, View} from '../../../../components/styled/View';
import txSuccess from '../../../../assets/common/iconComplete.png';
import {Image} from '../../../../components/styled/Image';
import {Text} from '../../../../components/styled/Text';
import {ButtonRadius} from '../../../../components/styled/Button';
import {Actions} from 'react-native-router-flux';

const SendRequestSuccessScreen = () => {
  const onPressOK = () => {
    Actions.popTo('walletDetailScreen');
  };
  return (
    <SafeAreaView bgNavyTheme alignItems={'center'}>
      <View marginTop={150} alignItems={'center'} flex={1}>
        <Image width={150} height={150} source={txSuccess} />
        <Text ftWhite ftLarge bold marginTop={35}>
          Application of Withdrawal Complete
        </Text>
        <Text textAlign={'center'} ftWhite marginTop={15} bold lineHeight={21}>
          Your application of withdrawal has been completed. .{'\n'}
          You can check your record at My Wallet.
        </Text>
      </View>
      <ButtonRadius
        width={'88%'}
        paddingTop={10}
        paddingBottom={10}
        marginTop={20}
        bgYellowTheme
        marginLeft={'auto'}
        marginRight={'auto'}
        onPress={onPressOK}
        isValid
        marginBottom={20}>
        <Text bold fontSize={16}>
          Confirm
        </Text>
      </ButtonRadius>
    </SafeAreaView>
  );
};

export default SendRequestSuccessScreen;
