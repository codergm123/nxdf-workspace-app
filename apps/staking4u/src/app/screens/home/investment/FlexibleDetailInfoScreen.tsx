import React, { useEffect, useState } from 'react';
import { Linking } from 'react-native';
import { useDispatch } from 'react-redux';
import * as stakeRayActions from '../../../store/modules/stake/ray/actions';
import * as modalActions from '../../../store/modules/modal/actions';
import Topbar from '../../../components/bar/TopBar';
import Line from '../../../components/line/Line';
import {
  SafeAreaView,
  View,
  ViewRow,
  ViewAbsolute,
  ViewBorderRadius,
} from '../../../components/styled/View';
import { Text } from '../../../components/styled/Text';
import { Image } from '../../../components/styled/Image';
import {
  ButtonRadius,
  ButtonBorderRadius,
} from '../../../components/styled/Button';
import { GestureButtonBorderRadius } from '../../../components/styled/GestureButton';
import dollarIcon from '../../../assets/common/dollar.png';
import iconInfo from '../../../assets/main/icon_coin_info.png';
import { Actions } from 'react-native-router-flux';

const FlexibleDetailInfoScreen = ({ item }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const onPressCoinInfo = () => {
    Linking.openURL(
      `https://coinmarketcap.com/en/currencies/${item.name.toLowerCase()}`
    );
  };
  const onPressFCAS = () => {
    Linking.openURL(
      `https://coinmarketcap.com/en/currencies/${item.name.toLowerCase()}/ratings/`
    );
  };

  // 임시용
  const renderFCAS = (symbol) => {
    switch (symbol) {
      case 'AAVE': {
        return 'A';
      }
      case 'ORBS': {
        return 'U';
      }
      case 'SOL': {
        return 'B';
      }
      case 'RAY': {
        return 'U';
      }
      default: {
      }
    }
  };

  const onPressHarvestOK = () => {
    setMessage('ray unstake success');
  };

  const onPressUnstakeOK = () => {
    setMessage('ray harvest success');
  };

  const onPressUnstake = () => {
    dispatch(modalActions.change_modal_message(`Do you want to unstake?`));
    dispatch(modalActions.change_modal_one_button(false));
    dispatch(modalActions.change_modal_on_press_ok(onPressUnstakeOK));
  };

  const onPressHarvest = () => {
    dispatch(
      modalActions.change_modal_message(
        `Do you want to harvest ${item.reward} ${item.symbol}?`
      )
    );
    dispatch(modalActions.change_modal_one_button(false));
    dispatch(modalActions.change_modal_on_press_ok(onPressHarvestOK));
  };

  useEffect(() => {
    if (message === 'ray unstake success') {
      Actions.unstakingCompleteScreen({
        amount: item.depositBalance,
        rewards: item.reward,
        symbol: item.symbol,
      });
    } else if (message === 'ray harvest success') {
      Actions.harvestCompleteScreen({
        amount: item.depositBalance,
        rewards: item.reward,
        symbol: item.symbol,
      });
      dispatch(stakeRayActions.reset_message(''));
    }
  }, [message]);

  const onPressAdditionalStake = () => {
    Actions.reset('tabBar'); // TODO 라우팅 이동에 대해서 고민해보기
    Actions.flexibleInputScreen({ item });
  };

  return (
    <SafeAreaView bgNavyTheme>
      <Topbar isLeftButton title={'Product Info'} />
      <View
        alignSelf={'center'}
        paddingTop={25}
        paddingBottom={25}
        width={'90%'}
      >
        <ViewRow width={'100%'} alignItems={'center'}>
          <Image source={item.logo} width={20} height={20} marginRight={10} />
          <Text
            bold
            ftWhite
            fontSize={18}
          >{`${item.symbol} Flexible Staking`}</Text>
        </ViewRow>
      </View>
      <Line width={'100%'} height={3} />
      <View
        flex={2}
        justifyContent={'space-around'}
        alignItems={'center'}
        paddingTop={15}
        paddingBottom={15}
      >
        <View width={'100%'} justifyContent={'center'} alignItems={'center'}>
          <Text ftYellowTheme marginBottom={5}>
            Staking Amount
          </Text>
          <View bgYellowTheme height={3} width={50} />
          <ViewAbsolute
            top={0}
            right={15}
            bgLightNavy
            width={24}
            height={24}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Image source={dollarIcon} width={18} height={18} />
          </ViewAbsolute>
        </View>
        <View>
          <Text fontSize={30} ftWhite>
            {`$ ${item.depositBalance} ${item.symbol}`}
          </Text>
        </View>
        <ButtonBorderRadius
          onPress={onPressHarvest}
          brYellowTheme
          width={'90%'}
          alignSelf={'center'}
          paddingTop={10}
          paddingBottom={10}
          borderRadius={6}
          style={{ backgroundColor: 'rgba(255, 215, 67, 0.15)' }}
        >
          <Text ftYellowTheme bold fontSize={15}>
            Harvest
          </Text>
        </ButtonBorderRadius>
      </View>
      <Line width={'100%'} height={3} />
      {/* 하단 */}
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
            onPress={onPressCoinInfo}
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
            onPress={onPressFCAS}
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
                {renderFCAS(item.symbol)}
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
            >{`${item.symbol} Flexible Staking`}</Text>
          </ViewRow>
          <ViewRow marginBottom={8}>
            <Text fontSize={14} ftBlueGray width={'60%'}>
              Deposit Amount
            </Text>
            <Text width={'40%'} fontSize={14} ftWhite textAlign={'right'}>
              {item.depositBalance}
            </Text>
          </ViewRow>
          <ViewRow marginBottom={8}>
            <Text width={'50%'} fontSize={14} ftBlueGray>
              Deposit Start Date
            </Text>
            <Text width={'50%'} fontSize={14} ftWhite textAlign={'right'}>
              {item.startDate}
            </Text>
          </ViewRow>
          <ViewRow marginBottom={8}>
            <Text width={'50%'} fontSize={15} ftBlueGray>
              Est. APR
            </Text>
            <Text width={'50%'} fontSize={15} ftMint bold textAlign={'right'}>
              {`${item.annualInteresetRate}%`}
            </Text>
          </ViewRow>
        </View>
      </View>
      <ViewRow justifyContent={'space-around'}>
        <ButtonRadius
          bgWhite
          width={'45%'}
          paddingTop={10}
          paddingBottom={10}
          marginTop={20}
          marginBottom={20}
          onPress={onPressUnstake}
        >
          <Text ftNavyTheme bold fontSize={15}>
            Redeem
          </Text>
        </ButtonRadius>
        <ButtonRadius
          bgYellowTheme
          width={'45%'}
          paddingTop={10}
          paddingBottom={10}
          marginTop={20}
          marginBottom={20}
          onPress={onPressAdditionalStake}
        >
          <Text ftNavyTheme bold fontSize={15}>
            Additional Stake
          </Text>
        </ButtonRadius>
      </ViewRow>
    </SafeAreaView>
  );
};

export default FlexibleDetailInfoScreen;
