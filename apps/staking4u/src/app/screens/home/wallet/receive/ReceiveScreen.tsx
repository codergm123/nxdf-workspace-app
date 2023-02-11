import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import Clipboard from '@react-native-clipboard/clipboard';
import { useDispatch } from 'react-redux';
import * as globalActions from '../../../../store/modules/global/actions';
import Topbar from '../../../../components/bar/TopBar';
import Line from '../../../../components/line/Line';
import {
  SafeAreaView,
  ScrollView,
  View,
  ViewRowBorderRadius,
} from '../../../../components/styled/View';
import { Text } from '../../../../components/styled/Text';
import { Image } from '../../../../components/styled/Image';
import { GestureButtonBorderRadius } from '../../../../components/styled/GestureButton';
import iconCopyGrey from '../../../../assets/wallet/iconCopyGrey.png';

const ReceiveScreen = ({ title, address }) => {
  const dispatch = useDispatch();

  const onPressCopy = () => {
    Clipboard.setString(address);
    dispatch(globalActions.change_toast_message('Copied!'));
  };
  return (
    <SafeAreaView bgNavyTheme>
      <ScrollView>
        <Topbar isLeftButton title={`${title} Receive`} />
        <View
          paddingLeft={15}
          paddingRight={15}
          marginTop={30}
          alignItems={'center'}
        >
          <QRCode value={address} size={150} />
        </View>
        <View paddingLeft={15} paddingRight={15}>
          <Text bold marginTop={15} paddingLeft={10} ftWhite>
            Wallet address
          </Text>
        </View>
        <ViewRowBorderRadius
          alignItems={'center'}
          bgLineNavy
          marginTop={15}
          marginLeft={20}
          paddingLeft={15}
          marginRight={20}
        >
          <View flex={1}>
            <Text ftWhite>{address}</Text>
          </View>
          <GestureButtonBorderRadius
            onPress={onPressCopy}
            flexDirection={'column'}
            paddingLeft={10}
            paddingRight={10}
            width={'auto'}
            paddingTop={25}
            paddingBottom={25}
            bgWhite
            flex={1}
            borderTopRightRadius={5}
            borderBottomRightRadius={5}
          >
            <View>
              <Image width={18} height={18} source={iconCopyGrey} />
            </View>
            <View>
              <Text bold ftFontNavy>
                Copy
              </Text>
            </View>
          </GestureButtonBorderRadius>
        </ViewRowBorderRadius>
        <View marginTop={30}>
          <Line height={5} />
        </View>
        <View paddingLeft={20} paddingRight={20} marginTop={30}>
          <Text ftYellowTheme bold>
            Deposit Notice
          </Text>
          <Text marginTop={15} ftBlueGray bold>
            - The address above is a deposit-only address.
          </Text>
          <Text marginTop={5} ftBlueGray bold>
            - Deposit from an external wallet to my wallet.
          </Text>
          <Text marginTop={5} ftBlueGray bold>
            - The total time to complete a confirmation may differ, depending on
            the congestion level of the blockchain network.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReceiveScreen;
