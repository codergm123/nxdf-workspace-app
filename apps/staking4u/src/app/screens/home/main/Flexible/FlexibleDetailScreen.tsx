import React  from 'react';
import { Alert, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as modalActions from '../../../../store/modules/modal/actions';
import Topbar from '../../../../components/bar/TopBar';
import Line from '../../../../components/line/Line';

import {
  SafeAreaView,
  View,
  ViewAbsolute,
  ViewRow,
  ViewBorderRadius,
} from '../../../../components/styled/View';
import { Image } from '../../../../components/styled/Image';
import { GestureButtonBorderRadius } from '../../../../components/styled/GestureButton';
import { ButtonRadius } from '../../../../components/styled/Button';
import iconInfo from '../../../assets/main/icon_coin_info.png';
import { Text } from '../../../../components/styled/Text';
import { useQuery } from 'react-query';
import { getCoin } from '../../../../api/coinStaking';



const FlexibleDetailScreen = ({data}) => {
  const { isLoading: infoLoading, data: infoData } = useQuery(["info", data], getCoin.info);
  const rate = infoData?.market_data?.price_change_24h.toFixed(2);
  const price = infoData?.tickers[0].last;
  const image = infoData?.image.thumb
  const onPressStart = () => {
    if (infoData.symbol !== 'ray') {
      // TODO 우선 하드코딩으로 레이만 스테이킹을 시작할 수 있게 만들어 놓음
      Alert.alert('Coming Soon');
    } else {
      Actions.flexibleInputScreen({data, rate, price});
    }
  };

  // const onPressCoinInfo = () => {
  //   Linking.openURL(
  //     `https://www.coingecko.com/en/coins/${item.name.toLowerCase()}`
  //   );
  // };
  // const onPressFCAS = () => {
  //   Linking.openURL(
  //     `https://coinmarketcap.com/en/currencies/${item.name.toLowerCase()}/ratings/`
  //   );
  // };

  return (
    <SafeAreaView bgNavyTheme>
      <Topbar isLeftButton title={""} />
      <View
        flex={1.5}
        width={'90%'}
        alignSelf={'center'}
        justifyContent={'center'}
      >
        <Text fontSize={28} ftWhite bold marginBottom={5}>{`$ ${
          price
        }`}</Text>
        <Line width={'100%'} height={1} marginTop={10} marginBottom={10} />
        <ViewRow
          justifyContent={'flex-start'}
          alignItems={'center'}
          marginBottom={10}
        >
          <Image source={{uri:image}} width={25} height={25} marginRight={10} />
          <Text fontSize={18} ftWhite>{`${infoData.name} Flexible Staking`}</Text>
        </ViewRow>
        <ViewRow justifyContent={'flex-start'} alignItems={'center'}>
          <Text fontSize={13} ftMint marginRight={10}>
            APR
          </Text>
          <Text fontSize={18} ftMint bold>
            {`${rate}%`}
          </Text>
        </ViewRow>
      </View>
      <Line width={'100%'} height={3} />
      <View flex={3} width={'100%'}>
        <ViewRow
          flex={1}
          flewWrap={'wrap'}
          justifyContent={'space-around'}
          alignItems={'center'}
          marginTop={20}
          marginBottom={20}
        >
          <GestureButtonBorderRadius
            width={170}
            height={70}
            onPress={""}
            borderRadius={6}
            bgYellowTheme
            justifyContent={'center'}
            alignItems={'center'}
            paddingTop={15}
            paddingBottom={15}
            paddingRight={40}
            activeOpacity={1}
            style={{ overflow: 'hidden' }}
          >
            <ViewBorderRadius
              bgLightPurple
              borderRadius={20}
              width={40}
              height={40}
              justifyContent={'center'}
              alignItems={'center'}
              marginRight={10}
            >
              <Image source={iconInfo} width={20} height={20} />
            </ViewBorderRadius>
            <View>
              <Text fontSize={15} bold>
                Coin
              </Text>
              <Text fontSize={13}>Info</Text>
            </View>
            <ViewAbsolute
              bgWhite
              bottom={0}
              right={0}
              style={{
                borderTopWidth: 23,
                borderRightWidth: 23,
                borderBottomWidth: 23,
                borderLeftWidth: 23,
                borderTopColor: '#ffcc00',
                borderRightColor: 'white',
                borderBottomColor: 'white',
                borderLeftColor: '#ffcc00',
              }}
            />
          </GestureButtonBorderRadius>
          <GestureButtonBorderRadius
            width={170}
            height={70}
            onPress={""}
            borderRadius={6}
            bgYellowTheme
            justifyContent={'center'}
            alignItems={'center'}
            paddingTop={15}
            paddingBottom={15}
            paddingRight={40}
            activeOpacity={1}
            style={{ overflow: 'hidden' }}
          >
            <ViewBorderRadius
              bgLightPurple
              borderRadius={20}
              width={40}
              height={40}
              justifyContent={'center'}
              alignItems={'center'}
              marginRight={10}
            >
              <Text fontSize={22} bold ftWhite>
                0
              </Text>
            </ViewBorderRadius>
            <View>
              <Text fontSize={18} bold>
                FCAS
              </Text>
            </View>
            <ViewAbsolute
              bgWhite
              bottom={0}
              right={0}
              style={{
                borderTopWidth: 23,
                borderRightWidth: 23,
                borderBottomWidth: 23,
                borderLeftWidth: 23,
                borderTopColor: '#ffcc00',
                borderRightColor: 'white',
                borderBottomColor: 'white',
                borderLeftColor: '#ffcc00',
              }}
            />
          </GestureButtonBorderRadius>
        </ViewRow>
        <View flex={2} width={'94%'} alignSelf={'center'}>
          <Text fontSize={15} ftYellowTheme bold marginBottom={10}>
            Product Outline
          </Text>
          <ViewRow
            flewWrap={'wrap'}
            justifyContent={'space-between'}
            alignItems={'center'}
            marginBottom={8}
          >
            <Text width={'50%'} fontSize={14} ftBlueGray>
              Product Type
            </Text>
            <Text
              width={'50%'}
              fontSize={14}
              ftWhite
              bold
              textAlign={'right'}
            >{`${infoData.name} Flexible Staking`}</Text>
          </ViewRow>
          <ViewRow marginBottom={8}>
            <Text fontSize={14} ftBlueGray width={'60%'}>
              Minimum Locked Amount
            </Text>
            <Text width={'40%'} fontSize={14} ftWhite textAlign={'right'}>
              {"None"}
            </Text>
          </ViewRow>
          <ViewRow marginBottom={8}>
            <Text width={'50%'} fontSize={14} ftBlueGray>
              Due Date
            </Text>
            <Text width={'50%'} fontSize={14} ftWhite textAlign={'right'}>
              Withdrawal any time
            </Text>
          </ViewRow>
          <ViewRow marginBottom={8}>
            <Text width={'50%'} fontSize={14} ftBlueGray>
              Est. APR
            </Text>
            <Text width={'50%'} fontSize={14} ftWhite textAlign={'right'}>
              {`${rate}%`}
            </Text>
          </ViewRow>
        </View>
      </View>
      <View flex={1} justifyContent={'flex-end'}>
        <ButtonRadius
          bgYellowTheme
          width={'94%'}
          paddingTop={10}
          paddingBottom={10}
          marginTop={20}
          marginBottom={20}
          marginLeft={'auto'}
          marginRight={'auto'}
          onPress={onPressStart}
        >
          <Text ftNavyTheme bold fontSize={16}>
            Start Staking
          </Text>
        </ButtonRadius>
      </View>
    </SafeAreaView>
  );
};

export default FlexibleDetailScreen;
