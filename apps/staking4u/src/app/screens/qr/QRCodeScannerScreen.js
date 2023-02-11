import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {Actions} from 'react-native-router-flux';
import {useDispatch} from 'react-redux';
import {Linking} from 'react-native';
import * as walletActions from '../../store/modules/wallet/actions';
import {SafeAreaView, View, ViewAbsolute} from '../../components/styled/View';
import {Text} from '../../components/styled/Text';
import {Image} from '../../components/styled/Image';
import {GestureButton} from '../../components/styled/GestureButton';
import iconCancel from '../../assets/common/icon_cancel.png';

const QRCodeScannerScreen = () => {
  const dispatch = useDispatch();

  const onSuccess = (e) => {
    console.log(e);
    const {data} = e;
    if (data.includes('https') || data.includes('http')) {
      Linking.openURL(data);
    } else if (data.includes('ethereum')) {
      const address = data.substring(9);
      dispatch(walletActions.change_wallet_address(address));
    } else {
      dispatch(walletActions.change_wallet_address(data));
    }
    Actions.pop();
  };

  const onPressCancel = () => {
    Actions.pop();
  };

  const renderTopContent = () => (
    <Text fontSize={20} ftYellowTheme bold marginBottom={20}>
      Scan QR code
    </Text>
  );
  const renderBottomContent = () => (
    <View paddingLeft={15} paddingRight={15}>
      <Text ftYellowTheme bold fontSize={16} marginTop={20}>
        Place the QR code in front of the camera.
      </Text>
    </View>
  );

  return (
    <SafeAreaView bgNavyTheme>
      <View flex={1} justifyContent={'center'} alignItems={'center'}>
        <ViewAbsolute top={20} right={20}>
          <GestureButton width={28} height={28} onPress={onPressCancel}>
            <Image width={28} height={28} source={iconCancel} />
          </GestureButton>
        </ViewAbsolute>
        <QRCodeScanner
          onRead={onSuccess}
          reactivate
          reactivateTimeout={1000}
          topContent={renderTopContent()}
          bottomContent={renderBottomContent()}
          showMarker
        />
      </View>
    </SafeAreaView>
  );
};

export default QRCodeScannerScreen;
