import React from 'react';
import {View, ViewRowBorder} from '../../styled/View';
import {Text} from '../../styled/Text';
import {substringAddress} from '../../../utils/functions';

const SOLTransaction = ({
  status,
  days,
  times,
  from,
  to,
  amount,
  decimals,
  symbol,
  solPublic,
  fee,
}) => {
  const renderAmount = () => {
    if (from.toLowerCase() !== solPublic.toLowerCase()) {
      return (
        <Text bold ftSmall ftLightGreen>
          +{Number(amount / Math.pow(10, decimals)).toFixed(4)} {symbol}
        </Text>
      );
    } else {
      return (
        <Text bold ftSmall ftLightRed>
          -{Number(amount / Math.pow(10, decimals)).toFixed(4)} {symbol}
        </Text>
      );
    }
  };

  return (
    <View justifyContent={'center'} alignItems={'center'}>
      {status === 'Success' ? (
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
              From : {substringAddress(from, 6, 4)}
            </Text>
            <Text ftBlueGray ftSmall>
              To : {substringAddress(to, 6, 4)}
            </Text>
          </View>
          <View width={'auto'} flex={1.5} alignItems={'flex-end'}>
            {renderAmount()}
            {
              <Text ftWhite fontSize={10} marginTop={5}>
                Fees : {fee / Math.pow(10, 9)} SOL
              </Text>
            }
          </View>
        </ViewRowBorder>
      ) : null}
    </View>
  );
};

export default SOLTransaction;
