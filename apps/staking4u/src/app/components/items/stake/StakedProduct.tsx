import React from 'react';
import { shallowEqual, useSelector, RootStateOrAny } from 'react-redux';
import { View, ViewRow } from '../../styled/View';
import { GestureButton } from '../../styled/GestureButton';
import { Text } from '../../styled/Text';
import { Image } from '../../styled/Image';
import { convertNumberFormat } from '../../../utils/functions';

const StakedProduct = ({
  symbol,
  annualInteresetRate,
  logo,
  onPress,
  reward,
  depositBalance,
}) => {
  const { tickers } = useSelector(
    (state: RootStateOrAny) => ({
      tickers: state.ticker.tickers,
    }),
    shallowEqual
  );

  return (
    <GestureButton
      onPress={onPress}
      flexDirection={'column'}
      width={'94%'}
      alignSelf={'center'}
      marginTop={5}
    >
      <ViewRow
        width={'100%'}
        justifyContent={'flex-start'}
        alignItems={'center'}
      >
        <Image
          source={logo}
          resizeMode={'contain'}
          width={18}
          height={18}
          marginRight={10}
        />
        <Text ftLightWhite fontSize={15} bold>
          {`${symbol} Flexible Staking`}
        </Text>
      </ViewRow>
      <ViewRow
        flex={1}
        width={'100%'}
        paddingTop={10}
        paddingBottom={10}
        justifyContent={'space-between'}
      >
        <View>
          <Text fontSize={13} ftLightGray marginBottom={3}>
            Total Amount
          </Text>
          <Text fontSize={14} ftWhite marginBottom={3}>
            {`${depositBalance} ${symbol}`}
          </Text>
          <Text fontSize={12} ftBlueGray>
            {`$${Number(
              depositBalance * (tickers?.[symbol].close || 0)
            ).toFixed(5)}`}
          </Text>
        </View>
        <View>
          <Text fontSize={13} ftLightGray marginBottom={3}>
            Total Rewords
          </Text>
          <Text fontSize={14} ftMint>
            {`${reward} ${symbol}`}
          </Text>
          <Text fontSize={12} ftBlueGray marginBottom={3}>
            {`$${convertNumberFormat(
              10,
              Number(Number(reward).toFixed(10)) *
                (tickers?.[symbol].close || 0)
            )}`}
          </Text>
        </View>
        <View>
          <Text fontSize={13} ftLightGray marginBottom={5}>
            Est. APR
          </Text>
          <Text fontSize={14} ftWhite>
            {`${annualInteresetRate}%`}
          </Text>
        </View>
      </ViewRow>
    </GestureButton>
  );
};

export default StakedProduct;
