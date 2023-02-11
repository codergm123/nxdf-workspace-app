import React from 'react';
import { Linking } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { useDispatch } from 'react-redux';
import * as globalActions from '../../../store/modules/global/actions';
import Topbar from '../../../components/bar/TopBar';
import {
  SafeAreaView,
  View,
  ViewRow,
  ViewBorderRadius,
  ViewRowBorderRadius,
} from '../../../components/styled/View';
import { Text } from '../../../components/styled/Text';
import { Button } from '../../../components/styled/Button';
import { Image } from '../../../components/styled/Image';
import iconCheck from '../../../assets/investment/icon_check.png';
import iconInfo from '../../../assets/investment/icon_info.png';
import iconCopy from '../../../assets/wallet/iconCopyGrey.png';

const InvestmentHistoryDetailScreen = ({ item }) => {
  const dispatch = useDispatch();

  const blockConfirmation = '';

  const onPressCopy = (address) => {
    Clipboard.setString(address);
    dispatch(globalActions.change_toast_message('Copied!'));
  };

  const onPressTX = () => {
    Linking.openURL(`https://solscan.io/tx/${item.txHash}`);
  };

  const renderTransactionRows = () => {
    const rows = [
      {
        label: 'Date',
        data: item.date,
      },
      {
        label: 'Amount',
        data: `${item.amount} ${item.symbol}`,
      },
      {
        label: 'From',
        data: item.from,
        isCopied: true,
      },
      {
        label: 'To',
        data: item.to,
        isCopied: true,
      },
    ];

    return rows.map((row) => (
      <ViewRow
        width={'90%'}
        alignSelf={'center'}
        alignItems={'center'}
        marginBottom={10}
      >
        <View flex={3}>
          <Text fontSize={13} ftBlueGray bold>
            {row.label}
          </Text>
        </View>
        {row.isCopied ? (
          <Button width={'70%'} onPress={() => onPressCopy(row.data)}>
            <Image width={20} height={20} source={iconCopy} />
            <Text fontSize={13} ftWhite paddingLeft={8}>
              {row.data}
            </Text>
          </Button>
        ) : (
          <View flex={7}>
            <Text
              fontSize={13}
              {...(row.label === 'Amount'
                ? { ftYellowTheme: true, bold: true }
                : { ftWhite: true })}
            >
              {row.data}
            </Text>
          </View>
        )}
      </ViewRow>
    ));
  };

  return (
    <SafeAreaView bgNavyTheme>
      <Topbar isLeftButton title={'Detailed History'} />
      <View flex={1.5} justifyContent={'flex-end'} paddingBottom={30}>
        <ViewRowBorderRadius
          width={180}
          height={45}
          justifyContent={'center'}
          alignItems={'center'}
          marginLeft={'5%'}
          marginBottom={10}
          {...(item.type === 'Redeem'
            ? { bgRedeemBox: true }
            : item.type === 'Rewards'
            ? { bgRewardsBox: true }
            : { bgStakeBox: true })}
        >
          <Image source={iconCheck} width={24} height={24} marginRight={2} />
          <Text fontSize={16} ftWhite bold>{`${
            item.type === 'Redeem'
              ? 'Redeem'
              : item.type === 'Rewards'
              ? 'Harvest'
              : 'Staking'
          } Success`}</Text>
        </ViewRowBorderRadius>
        <Text width={'90%'} fontSize={14} ftWhite marginLeft={'5%'}>
          {`More than ${blockConfirmation} blocks are connected to this record(block).`}
        </Text>
        <Text width={'90%'} fontSize={14} ftWhite marginLeft={'5%'}>
          The more blocks, the higher the reliability.
        </Text>
      </View>
      <View flex={2} justifyContent={'center'} alignItems={'center'}>
        <ViewBorderRadius
          width={'90%'}
          bgLineNavy
          alignSelf={'center'}
          paddingTop={20}
          paddingBottom={15}
        >
          {renderTransactionRows()}
        </ViewBorderRadius>
      </View>
      <View flex={2}>
        <ViewBorderRadius
          width={'90%'}
          bgLineNavy
          alignSelf={'center'}
          paddingTop={10}
          paddingBottom={20}
          paddingLeft={20}
          paddingRight={20}
        >
          <Text fontSize={13} ftBlueGray bold>
            Transaction(TX) ID
          </Text>
          <Button onPress={onPressTX}>
            <Text fontSize={13} ftWhite textDecoration={'underline'}>
              {item.txHash}
            </Text>
          </Button>
        </ViewBorderRadius>
        <ViewRow
          width={'90%'}
          justifyContent={'flex-start'}
          alignItems={'center'}
          alignSelf={'center'}
          marginTop={10}
        >
          <Image source={iconInfo} width={16} height={16} marginRight={5} />
          <Text fontSize={11} ftLightGray>
            You can check more detailed history by clicking the TX ID.
          </Text>
        </ViewRow>
      </View>
    </SafeAreaView>
  );
};

export default InvestmentHistoryDetailScreen;
