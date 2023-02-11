import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Clipboard from '@react-native-clipboard/clipboard';
import { Actions } from 'react-native-router-flux';
import * as modalActions from '../../../../store/modules/modal/actions';
import * as walletActions from '../../../../store/modules/wallet/actions';
import Topbar from '../../../../components/bar/TopBar';
import InputBorderRadius from '../../../../components/input/InputBorderRadius';
import {
  SafeAreaView,
  View,
  ViewBorderRadius,
  ViewRow,
} from '../../../../components/styled/View';
import {
  ButtonBorderRadius,
  ButtonRadius,
} from '../../../../components/styled/Button';
import { Text } from '../../../../components/styled/Text';
import { findOneThemeToken } from '../../../../utils/functions';

const SendAddressScreen = ({ title, amount, mintAddress }) => {
  const dispatch = useDispatch();

  const address = '1234567890';

  useEffect(() => {
    return () => dispatch(walletActions.reset_wallet());
  }, []);

  const pasteClipboard = async () => {
    dispatch(walletActions.change_wallet_address(await Clipboard.getString()));
  };

  const qrScan = () => {
    Actions.qRCodeScannerScreen();
  };

  const onChangeAddress = (text) => {
    dispatch(walletActions.change_wallet_address(text));
  };

  const onPressNext = () => {
    if (address.indexOf(' ') !== -1 || address.length === 0) {
      dispatch(modalActions.change_modal_message('Not a valid address.'));
    } else if (title === 'XLM') {
      const param = {
        title,
        amount,
        // memo,
        address,
      };
      Actions.sendAmountScreen(param);
    } else if (title === 'ETH' || findOneThemeToken(title)) {
      const param = {
        title,
        amount,
        address,
      };
      Actions.ethSendAmountScreen(param);
    } else {
      // SOL or SPL
      const param = {
        title,
        amount,
        address,
        mintAddress,
      };
      Actions.solSendAmountScreen(param);
    }
  };

  return (
    <SafeAreaView bgNavyTheme>
      <Topbar isLeftButton title={`${title} Send`} />
      <View marginTop={30} paddingLeft={20} paddingRight={20} flex={1}>
        <Text ftWhite bold>
          Wallet address
        </Text>
        <ViewBorderRadius
          marginTop={15}
          brBlueGray
          paddingLeft={10}
          paddingRight={10}
        >
          <InputBorderRadius
            height={37}
            ftWhite
            value={address}
            onChangeText={onChangeAddress}
            maxLength={null}
          />
        </ViewBorderRadius>
        <ViewRow justifyContent={'center'} marginTop={15}>
          <ButtonBorderRadius
            bgLightWhite
            width={'auto'}
            paddingLeft={15}
            paddingTop={10}
            paddingBottom={10}
            paddingRight={15}
            marginRight={5}
            onPress={qrScan}
          >
            <Text>Scan QR</Text>
          </ButtonBorderRadius>
          <ButtonBorderRadius
            bgLightWhite
            width={'auto'}
            paddingLeft={15}
            paddingTop={10}
            paddingBottom={10}
            paddingRight={15}
            marginLeft={5}
            onPress={pasteClipboard}
          >
            <Text>Paste Clipboard</Text>
          </ButtonBorderRadius>
        </ViewRow>
      </View>
      <ButtonRadius
        width={'88%'}
        paddingTop={10}
        paddingBottom={10}
        marginTop={20}
        bgYellowTheme
        onClick={this}
        onPress={onPressNext}
        marginLeft={'auto'}
        marginRight={'auto'}
        marginBottom={20}
      >
        <Text bold fontSize={16}>
          Confirm
        </Text>
      </ButtonRadius>
    </SafeAreaView>
  );
};

export default SendAddressScreen;
