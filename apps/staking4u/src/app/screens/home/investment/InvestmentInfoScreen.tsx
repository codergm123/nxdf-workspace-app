import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { View, ViewAbsolute } from '../../../components/styled/View';
import { Text } from '../../../components/styled/Text';
import CustomCollapsable from './components/CustomCollapsable';
import Line from '../../../components/line/Line';
import Pie from '../../../components/chart/Pie';
import { Image } from '../../../components/styled/Image';
import dollarIcon from '../../../assets/common/dollar.png';
import { convertNumberFormat, fetcher } from '../../../utils/functions';
import StakedProduct from '../../../components/items/stake/StakedProduct';
import rayLogo from '../../../assets/logos/ray.png';
import { getToday } from '../../../utils/date';

const InvestmentInfoScreen = () => {
  const [stakingProducts, setStakingProducts] = useState([]);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [pieChartData, setPieChartData] = useState([]);

  const rayStakingAccountInfo = '';

  const rayInfo: any = {
    responseStatus: 200,
    responseMessage: 'S0000',
    data: {
      result: [
        {
          publicKey: 'DJ2bHMbS2GpnzcE5Y8rgTRiRjgv3vXUNSLBjR1FXLmQG',
          decimals: 6,
          name: 'RAY-SOL',
          rewardDebt: '0.009426878429478',
          depositBalance: '0.168719',
          poolTotalReward: '1066212.39',
        },
        {
          publicKey: '9T1DZ7kgPKkLPr1Jq5u4TDCWdVwhQoJ8qKaUjS3HAFZX',
          decimals: 6,
          name: 'RAY',
          rewardDebt: '0.002720706183536',
          depositBalance: '0.505136',
          poolTotalReward: '1947851.7',
        },
      ],
    },
  };
  useEffect(() => {
    const count = Object.keys(rayInfo).length;

    if (count > 0) {
      const reward = convertNumberFormat(
        12,
        Number(Number(rayInfo.data.result[0].rewardDebt).toFixed(10)) /
          (10 * rayInfo.data.result[0].decimals)
      );
      const depositBalance = Number(rayInfo.data.result[0].depositBalance);

      if (depositBalance > 0) {
        setStakingProducts([
          {
            name: 'Raydium',
            symbol: 'RAY',
            annualInteresetRate: 26.65,
            minimumLockedAmount: 0,
            logo: rayLogo,
            reward,
            depositBalance,
            startDate: getToday(),
          },
        ]);
        setTotalInvestment(depositBalance);
        setPieChartData([
          {
            name: 'RAY',
            amount: depositBalance,
            color: '#9c88ff',
            legendFontColor: '#7F7F7F',
            legendFontSize: 14,
          },
        ]);
      } else {
        setStakingProducts([]);
        setTotalInvestment(0);
        setPieChartData([]);
      }
    }
  }, [rayStakingAccountInfo]);

  const renderProducts = ({ item }) => {
    const onPressItem = () => {
      Actions.flexibleDetailInfoScreen({ item });
    };
    return <StakedProduct {...item} onPress={onPressItem} />;
  };

  return (
    <View flex={1} marginTop={10} marginBottom={10}>
      <Line width={'100%'} height={1} />
      <View
        height={150}
        justifyContent={'space-around'}
        alignItems={'center'}
        paddingTop={10}
        paddingBottom={20}
      >
        <View width={'100%'} justifyContent={'center'} alignItems={'center'}>
          <Text ftYellowTheme marginBottom={5}>
            Total Investment
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
        <View marginTop={5} marginBottom={5}>
          <Text fontSize={30} ftWhite>
            {`$ ${totalInvestment}`}
          </Text>
        </View>
        {/* <ViewRow
          width={'95%'}
          justifyContent={'space-between'}
          alignItems={'center'}>
          <View width={'50%'} justifyContent={'center'} alignItems={'center'}>
            <Button marginTop={10} marginBottom={10}>
              <ViewRow justifyContent={'center'} alignItems={'center'}>
                <Text fontSize={12} ftBlueGray>
                  Cumulative PNL
                </Text>
                <Image
                  source={iconDownGray}
                  width={10}
                  height={8}
                  marginLeft={5}
                />
              </ViewRow>
            </Button>
            <Text
              fontSize={12}
              ftMint
              bgFontNavy
              width={'80%'}
              textAlign={'center'}
              paddingTop={5}
              paddingBottom={5}
              borderRadius={6}>
              +24.77
            </Text>
          </View>
          <View width={'50%'} justifyContent={'center'} alignItems={'center'}>
            <Text fontSize={12} ftBlueGray marginTop={10} marginBottom={10}>
              Last Day PNL
            </Text>
            <Text
              fontSize={12}
              ftMint
              bgFontNavy
              width={'80%'}
              textAlign={'center'}
              paddingTop={5}
              paddingBottom={5}
              borderRadius={6}>
              0
            </Text>
          </View>
        </ViewRow> */}
      </View>
      <Line width={'100%'} height={3} />
      <CustomCollapsable title={'Invest. Portfolio'}>
        <Pie data={pieChartData} />
      </CustomCollapsable>
      <Line width={'100%'} height={3} />
      <View flex={2}>
        <Text
          ftWhite
          bold
          fontSize={15}
          marginTop={15}
          marginBottom={15}
          paddingLeft={15}
        >
          Product Info.
        </Text>
        <FlatList
          data={stakingProducts}
          renderItem={renderProducts}
          contentContainerStyle={
            stakingProducts.length === 0 && {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }
          }
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </View>
  );
};

export default InvestmentInfoScreen;
