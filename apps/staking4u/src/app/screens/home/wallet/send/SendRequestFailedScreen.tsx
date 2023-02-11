import React from 'react';
import {SafeAreaView, View} from '../../../../components/styled/View';
import {Image} from '../../../../components/styled/Image';
import txFailed from '../../../../assets/common/iconError.png';
import {Text} from '../../../../components/styled/Text';
import {ButtonRadius} from '../../../../components/styled/Button';
import {Actions} from 'react-native-router-flux';

const SendRequestFailedScreen = () => {
  const onPressOK = () => {
    Actions.popTo('walletDetailScreen');
  };
  return (
    <SafeAreaView bgNavyTheme alignItems={'center'}>
      <View marginTop={150} alignItems={'center'} flex={1}>
        <Image width={150} height={150} source={txFailed} />
        <Text ftWhite ftLarge bold marginTop={35}>
          Application of Sending Failed
        </Text>
        <Text textAlign={'center'} ftWhite marginTop={15} bold lineHeight={21}>
          Your application of sending has failed.{'\n'}
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

export default SendRequestFailedScreen;
