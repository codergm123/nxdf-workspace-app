import React from 'react';
import {View, ViewRowBorder} from '../../styled/View';
import {Text} from '../../styled/Text';
import {GestureButton} from '../../styled/GestureButton';
import {
  calculateERC20GasFee,
  calculateEthGasFee,
  isEmpty,
} from '../../../utils/functions';

const ETHTransaction = ({
  onPressEthTxLink,
  ethNetworkMode,
  days,
  times,
  ethPublic,
  from,
  to,
  symbol,
  value,
  gas,
  hash,
}) => {
  const renderAmount = () => {
    if (from.toLowerCase() !== ethPublic.toLowerCase()) {
      return (
        <Text bold ftSmall ftLightGreen textAlign={'right'}>
          {' '}
          +{Number((value * 0.000000000000000001).toFixed(4))}{' '}
          <Text fontSize={11} ftLightGreen bold>
            {symbol}
          </Text>{' '}
        </Text>
      );
    }
    return (
      <Text bold ftSmall ftLightRed textAlign={'right'}>
        {' '}
        -{Number((value * 0.000000000000000001).toFixed(4))}{' '}
        <Text fontSize={11} ftLightRed bold>
          {symbol}
        </Text>{' '}
      </Text>
    );
  };

  const onPress = (networkMode, txID) => {
    if (!isEmpty(onPressEthTxLink)) onPressEthTxLink(networkMode, txID);
  };

  return (
    <GestureButton onPress={() => onPress(ethNetworkMode, hash)}>
      <ViewRowBorder
        borderTopWidth={1}
        borderBottomWidth={'0'}
        borderRightWidth={'0'}
        borderLeftWidth={'0'}
        width={'95%'}
        paddingTop={15}
        justifyContent={'space-between'}
        alignItems={'center'}
        paddingBottom={15}>
        <View width={'auto'} flex={1} alignItems={'flex-start'}>
          <Text ftWhite fontSize={12}>
            {days}
          </Text>
          <Text ftWhite fontSize={11} marginTop={5}>
            {times}
          </Text>
        </View>
        <View width={'auto'} flex={2} alignItems={'center'}>
          <Text ftBlueGray ftSmall>
            From :{' '}
            {`${from.substring(0, 6)}...${from.substring(from.length - 4)}`}
          </Text>
          <Text ftBlueGray ftSmall>
            To : {`${to.substring(0, 6)}...${to.substring(to.length - 4)}`}
          </Text>
        </View>
        <View width={'auto'} flex={1.5} alignItems={'flex-end'}>
          {renderAmount()}
          {from.toLowerCase() !== ethPublic.toLowerCase() ? null : (
            <Text ftWhite fontSize={10} marginTop={5}>
              Fees :{' '}
              {symbol === 'ETH'
                ? calculateEthGasFee(gas / 1000000000)
                : calculateERC20GasFee(gas / 1000000000)}{' '}
              ETH
            </Text>
          )}
        </View>
      </ViewRowBorder>
    </GestureButton>
  );
};

export default ETHTransaction;
