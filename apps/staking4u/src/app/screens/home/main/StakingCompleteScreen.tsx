import React from 'react';
import {Actions} from 'react-native-router-flux';
import {useDisableBackhandler} from '../../../hooks';
import {
  SafeAreaView,
  View,
  ViewRow,
  ViewBorderRadius,
} from '../../../components/styled/View';
import {Text} from '../../../components/styled/Text';
import {Image} from '../../../components/styled/Image';
import {ButtonRadius} from '../../../components/styled/Button';
import iconCompleted from '../../../assets/main/icon_completed.png';
import {getToday} from '../../../utils/date';

const StakingCompleteScreen = ({amount, annualInteresetRate, symbol}) => {
  useDisableBackhandler();

  const generateRows = (data) =>
    data.map((item, index) => {
      return (
        <ViewRow
          key={index}
          paddingLeft={20}
          paddingRight={20}
          justifyContent={'space-between'}
          marginBottom={10}>
          <Text ftBlueGray>{item.label}</Text>
          <Text ftWhite bold>
            {item.contents}
          </Text>
        </ViewRow>
      );
    });

  const rowsData = [
    {
      label: 'Deposit Amount',
      contents: `${amount} ${symbol}`,
    },
    {
      label: 'Deposit Start Date',
      contents: getToday(),
    },
    {
      label: 'Est. APR',
      contents: `${annualInteresetRate}%`,
    },
  ];

  const onPressHome = () => {
    Actions.reset('tabBar');
  };
  const onPressInvestInfo = () => {
    Actions.reset('tabBar');
    Actions.investmentScreen();
    Actions.pop(); // TODO 해당 코드가 없으면 investmentScreen stack이 한번 더 쌓임. 원인을 찾아야함
  };

  return (
    <SafeAreaView bgNavyTheme>
      <View flex={1}>
        <View flex={1} justifyContent={'center'} alignItems={'center'}>
          <Image width={100} height={100} source={iconCompleted} />
          <Text ftWhite bold fontSize={22} marginTop={25}>
            Staking Complete!
          </Text>
        </View>
      </View>
      <View flex={1.2} justifyContent={'flex-start'} alignItems={'center'}>
        <ViewBorderRadius
          width={'96%'}
          bgLineNavy
          paddingTop={20}
          paddingBottom={20}>
          {generateRows(rowsData)}
        </ViewBorderRadius>
      </View>
      <ViewRow justifyContent={'space-around'}>
        <ButtonRadius
          bgWhite
          width={'45%'}
          paddingTop={10}
          paddingBottom={10}
          marginTop={20}
          marginBottom={20}
          onPress={onPressHome}>
          <Text ftNavyTheme bold fontSize={16}>
            Home
          </Text>
        </ButtonRadius>
        <ButtonRadius
          bgYellowTheme
          width={'45%'}
          paddingTop={10}
          paddingBottom={10}
          marginTop={20}
          marginBottom={20}
          onPress={onPressInvestInfo}>
          <Text ftNavyTheme bold fontSize={16}>
            Investment Info
          </Text>
        </ButtonRadius>
      </ViewRow>
    </SafeAreaView>
  );
};

export default StakingCompleteScreen;
