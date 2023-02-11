import React from 'react';
import Line from '../../line/Line';
import { View, ViewBorderRadius, ViewRow } from '../../styled/View';
import { GestureButton } from '../../styled/GestureButton';
import { Text } from '../../styled/Text';
import { Image } from '../../styled/Image';
import { convertPrice } from '../../../utils/price';
import { useQuery } from "react-query";
import { getCoin } from '../../../api/coinStaking';
import { Actions } from 'react-native-router-flux';

const Product = ({ name}) => {
  const { isLoading: infoLoading, data: infoData } = useQuery(["info", name], getCoin.info);
  const rate = infoData?.market_data?.price_change_24h.toFixed(2);
  const price = infoData?.tickers[0].last 
  const image = infoData?.image.thumb
  const onPressItem = () => {
      Actions.flexibleDetailScreen(name);
    };

  return infoLoading ? null : (
     
      <>
        <Line width={'100%'} height={1} />
        <GestureButton onPress={onPressItem}>
          <ViewRow flex={1} paddingTop={15} paddingBottom={15}>
            <ViewRow flex={2.5} alignItems={'center'} paddingLeft={10}>
              <Image
                source={{uri: image}}
                resizeMode={'contain'}
                width={25}
                height={25}
              />
              <View marginLeft={10}>
                <Text ftLightWhite fontSize={15} bold>
                  {infoData.name.length > 9 ? `${infoData.name.substring(0, 9)}...` : infoData.name}
                </Text>
                <Text ftLightWhite fontSize={12}>
                  {infoData.symbol}
                </Text>
              </View>
            </ViewRow>
            <View
              flex={1.2}
              alignItems={'flex-end'}
              justifyContent={'center'}
              paddingRight={20}
              marginrLeft={10}
            >
              <Text ftLightWhite fontSize={name === "next-defi-protocol" ? 12 : 14}>
                { ` $${name === "next-defi-protocol" ? price.toFixed(6) : price.toFixed(2)}`}
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
                >{`${rate}%`}</Text>
              </ViewBorderRadius>
            </View>
          </ViewRow>
        </GestureButton>
      </> 
  );
};

export default Product;
