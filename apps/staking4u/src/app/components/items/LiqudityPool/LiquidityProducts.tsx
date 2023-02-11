import React from 'react';
import Line from '../../line/Line';
import { View, ViewBorderRadius, ViewRow } from '../../styled/View';
import { GestureButton } from '../../styled/GestureButton';
import { Text } from '../../styled/Text';
import { Image } from '../../styled/Image';
import { convertPrice } from '../../../utils/price';

const LiquiditiyProduct = ({ name, symbol, annualInteresetRate, logo, poolPrice, onPress }) => {
  return (
    <>
      <Line width={'100%'} height={1} />
      <GestureButton onPress={onPress}>
        <ViewRow flex={1} paddingTop={15} paddingBottom={15}>
          <View flex={2.5} alignItems={'flex-start'} paddingLeft={10}>
            <ViewRow >
              <Image
                source={logo[0]}
                resizeMode={'contain'}
                width={20}
                height={20}
              />
              <Image
                source={logo[1]}
                resizeMode={'contain'}
                width={20}
                height={20}
                />
            </ViewRow>
            <View marginTop={3}>
              <Text ftLightWhite bold fontSize={15}>
                {name}
              </Text>
            </View>
          </View>
          <View
            flex={1}
            alignItems={'flex-end'}
            justifyContent={'center'}
            paddingRight={20}
          >
            <Text ftLightWhite fontSize={14}>
              {`$${convertPrice(poolPrice)}`}
            </Text>
          </View>
          <View
            flex={2}
            justifyContent={'center'}
            alignItems={'flex-end'}
            paddingRight={20}
          >
            <ViewBorderRadius
              bgMint
              width={80}
              paddingTop={7}
              paddingBottom={7}
              paddingRight={10}
              paddingLeft={10}
            >
              <Text
                textAlign={'center'}
                ftLightWhite
                fontSize={13}
              >{`${annualInteresetRate}%`}</Text>
            </ViewBorderRadius>
          </View>
        </ViewRow>
      </GestureButton>
    </>
  );
};

export default LiquiditiyProduct;
