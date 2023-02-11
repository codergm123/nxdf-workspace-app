import React, { useEffect, useMemo, useState } from 'react';
import { FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import Line from '../../../components/line/Line';
import Coin from '../../../components/items/wallet/Coin';
import {
  SafeAreaView,
  View,
  ViewAbsolute,
  ViewRow,
} from '../../../components/styled/View';
import { Text } from '../../../components/styled/Text';
import { Button } from '../../../components/styled/Button';
import { Image } from '../../../components/styled/Image';
import { localeString } from '../../../utils/functions';
import dollarIcon from '../../../assets/common/dollar.png';
import checkPressed from '../../../assets/common/iconOvalCheckPressed.png';
import orbsLogo from '../../../assets/logos/orbs.png';
import aaveLogo from '../../../assets/logos/aave.png';
import rayLogo from '../../../assets/logos/ray.png';
import atlasLogo from '../../../assets/logos/atlas.png';
import solLogo from '../../../assets/logos/sol.png';

// 나의 지갑
const WalletCoinScreen = (props) => {
  const solTokens = [];
  const tickers = {
    AAVE: { info: { priceChangePercent: -1.2 }, close: 1.2 },
    ORBS: { info: { signed_change_rate: 0.1 }, close: 12.45 },
    SOL: { info: { priceChangePercent: -3.14 }, close: 123.45 },
    RAY: { info: { priceChangePercent: 2.23 }, close: 67.8 },
    ATLAS: { info: { priceChangePercent: 10.01 }, close: 10.0 },
  };
  const usdExchangeRate = 1;

  const aaveAmount = { data: { balance: 1 } };
  const orbsAmount = { data: { balance: 2 } };
  const solAmount = { data: { balance: 3 } };
  const [rayBalance, setRayBalance] = useState(0);
  const [atlasBalance, setAtlasBalance] = useState(1);

  const dispatch = useDispatch();

  const solTokenList = [];

  useEffect(() => {
    setRayBalance(123);
  }, [solTokenList]);

  // 총 보유 자산 계산
  const totalBalanceCalculation = (
    exchangeRate,
    orbsCurrentPrice,
    orbsAmount,
    aaveCurrentPrice,
    aaveAmount,
    rayCurrentPrice,
    rayAmount,
    atlasCurrentPrice,
    atlasAmount,
    solCurrentPrice,
    solAmount
  ) => {
    let orbsPrice;
    let aavePrice;
    let rayPrice;
    let atlasPrice;
    let solPrice;

    orbsPrice = (orbsCurrentPrice * orbsAmount) / exchangeRate;
    aavePrice = aaveCurrentPrice * aaveAmount;
    rayPrice = rayCurrentPrice * rayAmount;
    atlasPrice = atlasCurrentPrice * atlasAmount;
    solPrice = solCurrentPrice * solAmount;

    if (
      Number.isInteger(orbsPrice + aavePrice + rayPrice + atlasPrice + solPrice)
    ) {
      return localeString(
        orbsPrice + aavePrice + rayPrice + atlasPrice + solPrice
      );
    } else {
      return (orbsPrice + aavePrice + rayPrice + atlasPrice + solPrice).toFixed(
        2
      );
    }
  };

  const totalBalances = useMemo(() => {
    return totalBalanceCalculation(
      usdExchangeRate,
      tickers?.['ORBS']?.close,
      orbsAmount?.data.balance,
      tickers?.['AAVE']?.close,
      aaveAmount?.data.balance,
      tickers?.['RAY']?.close,
      rayBalance,
      tickers?.['ATLAS']?.close,
      atlasBalance,
      tickers?.['SOL']?.close,
      solAmount?.data.balance
    );
  }, []);

  const coins = [
    {
      name: 'Aave', // 코인명
      symbol: 'AAVE', // 단위
      logo: aaveLogo, // 로고 이미지
      ticker: tickers?.['AAVE']?.close, // 현재 시장 가격 (시세)
      amount: aaveAmount?.data.balance, //  보유 코인 개수
      price: tickers?.['AAVE']?.close * aaveAmount?.data.balance, // 현재 시장 가 * 보유 코인 갯수 ( $ )
    },
    {
      name: 'Orbs',
      symbol: 'ORBS',
      logo: orbsLogo,
      ticker: tickers?.['ORBS']?.close,
      amount: orbsAmount?.data.balance,
      price:
        (tickers?.['ORBS']?.close * orbsAmount?.data.balance) / usdExchangeRate,
    },
    {
      name: 'Solana',
      symbol: 'SOL',
      logo: solLogo,
      ticker: tickers?.['SOL']?.close,
      amount: solAmount?.data.balance,
      price: tickers?.['SOL']?.close * solAmount?.data.balance,
    },
    {
      name: 'Raydium',
      symbol: 'RAY',
      logo: rayLogo,
      ticker: tickers?.['RAY']?.close,
      amount: rayBalance,
      price: tickers?.['RAY']?.close * rayBalance,
    },
    {
      name: 'Star Atlas',
      symbol: 'ATLAS',
      logo: atlasLogo,
      ticker: tickers?.['ATLAS']?.close,
      amount: atlasBalance,
      price: tickers?.['ATLAS']?.close * atlasBalance,
    },
  ];

  const renderCoin = ({ item }) => {
    let solTokenPublicKey;
    let mintAddress;

    solTokens.map((data) => {
      if (item.symbol === data.tokenSymbol) {
        solTokenPublicKey = data.publicKey;
        mintAddress = data.mint;
      }
    });

    const onPressItem = (symbol) => {
      // 해당 코인 디테일 페이지로 이동
      Actions.walletDetailScreen({
        coin: item,
        solTokenPublicKey,
        mintAddress,
      });
    };

    return (
      <Coin
        logo={item.logo}
        name={item.name}
        symbol={item.symbol}
        amount={item.amount}
        price={item.price}
        onPress={onPressItem}
      />
    );
  };

  return (
    <SafeAreaView bgNavyTheme>
      <View
        flex={1}
        justifyContent={'center'}
        alignSelf={'center'}
        width={'96%'}
      >
        <View flex={5}>
          <FlatList
            data={coins}
            renderItem={renderCoin}
            keyExtractor={(item) => item.name}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WalletCoinScreen;
