import React from 'react';
import Line from '../../line/Line';
import {View, ViewBorderRadius, ViewRow} from '../../styled/View';
import {GestureButton} from '../../styled/GestureButton';
import {Image} from '../../styled/Image';
import {Text} from '../../styled/Text';
import iconNext from '../../../assets/main/icon_next.png';

const History = ({type, symbol, product, date, amount, onPress}) => {
  return (
    <>
      <GestureButton
        onPress={onPress}
        width={'96%'}
        alignSelf={'center'}
        marginTop={5}
        marginBottom={5}
        paddingTop={10}
        paddingBottom={10}>
        <ViewRow flex={1} alignItems={'center'}>
          <View flex={9}>
            <ViewRow alignItems={'center'} marginBottom={10}>
              <ViewBorderRadius
                {...(type === 'Redeem'
                  ? {bgRedeemBox: true}
                  : type === 'Rewards'
                  ? {bgRewardsBox: true}
                  : {bgStakeBox: true})}
                width={75}
                height={30}
                justifyContent={'center'}
                alignItems={'center'}>
                <Text ftWhite fontSize={12} bold>
                  {`${
                    type === 'Redeem'
                      ? 'Redeem'
                      : type === 'Rewards'
                      ? 'Harvest'
                      : 'Staking'
                  }`}
                </Text>
              </ViewBorderRadius>
              <Text
                marginLeft={10}
                ftWhite
                fontSize={15}
                bold>{`${amount} ${symbol}`}</Text>
            </ViewRow>
            <ViewRow alignItems={'center'} paddingLeft={5}>
              <Text fontSize={13} ftWhite>
                {product}
              </Text>
              <View
                width={1}
                height={10}
                bgBlueGray
                marginRight={5}
                marginLeft={5}
              />
              <Text fontSize={12} ftBlueGray>
                {date}
              </Text>
            </ViewRow>
          </View>
          <View flex={1}>
            <Image source={iconNext} width={20} height={20} />
          </View>
        </ViewRow>
      </GestureButton>
      <Line width={'100%'} height={1} />
    </>
  );
};

export default History;
