
import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, Linking } from 'react-native';
import { format } from 'date-fns';
import { Actions } from 'react-native-router-flux';
import TopBar from '../../../components/bar/TopBar';
import Line from '../../../components/line/Line';
import ETHTransaction from '../../../components/items/wallet/ETHTransaction';
import SOLTransaction from '../../../components/items/wallet/SOLTransaction';
import SOLTokensTransaction from '../../../components/items/wallet/SOLTokensTransaction';
import { SafeAreaView, View, ViewRow } from '../../../components/styled/View';
import { Text } from '../../../components/styled/Text';
import { ButtonBorderRadius, ButtonRadius } from '../../../components/styled/Button';
import { findOneThemeToken } from '../../../utils/functions';
import { Image } from '../../../components/styled/Image';

// 지갑 상세
const WalletNftDetailScreen = (props) => {
  const ethPublic = '';
  const ethNetworkMode = '';
  const solPublic = '';
  const tickers = {
    AAVE: { info: { priceChangePercent: -1.2 }, close: 1.2 },
    ORBS: { info: { signed_change_rate: 0.1 }, close: 12.45 },
    SOL: { info: { priceChangePercent: -3.14 }, close: 123.45 },
    RAY: { info: { priceChangePercent: 2.23 }, close: 67.8 },
    ATLAS: { info: { priceChangePercent: 10.01 }, close: 10.0 },
  };
  const usdExchangeRate = 1;

  const solAmount = { data: { balance: 3 } };
  const erc20Amount = { data: { balance: 4 } };

  const SOL_TOKENS = '';
  const ERC20_TOKENS = '';

  const [solTokensBalance, setSolTokensBalance] = useState(0);

  const solTokenList = { data: { tokens: {} } };

  useEffect(() => {
    // solTokenList?.data.tokens.map(async (item) => {
    //   if (props.coin.symbol === item.tokenSymbol) {
    //     setSolTokensBalance(item.amount);
    //   }
    // });
    setSolTokensBalance(3); // total sol amount
  }, [solTokenList]);

  // symbol에 따른 수량 분기 처리
  const amount = useMemo(() => {
    if (ERC20_TOKENS.includes(props.coin.symbol)) {
      return erc20Amount?.data.balance;
    } else if (SOL_TOKENS.includes(props.coin.symbol)) {
      return solTokensBalance;
    } else if (props.coin.symbol === 'SOL') {
      return solAmount?.data.balance;
    }
  }, [erc20Amount, solTokensBalance, solAmount]);

  const price = useMemo(() => {
    if (props.coin.symbol === 'ORBS') {
      return (
        (tickers?.['ORBS']?.close * erc20Amount?.data.balance) / usdExchangeRate
      );
    } else if (props.coin.symbol === 'AAVE') {
      return tickers?.['AAVE']?.close * erc20Amount?.data.balance;
    } else if (SOL_TOKENS.includes(props.coin.symbol)) {
      return tickers?.[props.coin.symbol]?.close * solTokensBalance;
    } else if (props.coin.symbol === 'SOL') {
      return tickers?.['SOL']?.close * solAmount?.data.balance;
    }
  }, [tickers, solTokensBalance]);

  // 트랜잭션 상세정보 페이지 Linking ex) ETH
  const onPressEthTxLink = (networkMode, txID) => {
    if (networkMode !== 'mainnet') {
      Linking.openURL(`https://${networkMode}.etherscan.io/tx/${txID}`);
    } else {
      Linking.openURL(`https://etherscan.io/tx/${txID}`);
    }
  };

  // 트랜잭션 UI 컴포넌트
  const renderTransactions = ({ item }) => {
    if (findOneThemeToken(props.coin.symbol)) {
      return (
        <ETHTransaction
          onPressEthTxLink={onPressEthTxLink}
          ethNetworkMode={ethNetworkMode}
          days={format(new Date(item.timeStamp * 1000), 'yyyy-MM-dd')}
          times={format(new Date(item.timeStamp * 1000), 'HH:mm:ss')}
          ethPublic={ethPublic}
          from={item.from}
          to={item.to}
          symbol={props.coin.symbol}
          value={item.value}
          gas={item.gasPrice}
          hash={item.hash}
        />
      );
    } else if (SOL_TOKENS.includes(props.coin.symbol)) {
      return (
        <SOLTokensTransaction
          status={item.status}
          includeSPLTransfer={item.includeSPLTransfer}
          fee={item.fee}
          days={format(new Date(item.blockTime * 1000), 'yyyy-MM-dd')}
          times={format(new Date(item.blockTime * 1000), 'HH:mm:ss')}
          change={item.change}
          solTokenPublicKey={props.solTokenPublicKey}
          symbol={props.coin.symbol}
        />
      );
    } else if (props.coin.symbol === 'SOL') {
      return (
        <SOLTransaction
          status={item.status}
          days={format(new Date(item.blockTime * 1000), 'yyyy-MM-dd')}
          times={format(new Date(item.blockTime * 1000), 'HH:mm:ss')}
          from={item.src}
          to={item.dst}
          amount={item.lamport}
          decimals={item.decimals}
          symbol={props.coin.symbol}
          solPublic={solPublic}
          fee={item.fee}
        />
      );
    }
  };

  const erc20TransactionList: any = { data: {} };
  const solTokenTransactionList: any = { data: { transactions: {} } };
  const solTransactionList: any = { data: { transactions: {} } };
  // 트랜잭션 리스트 정보
  const transactions = useMemo(() => {
    if (ERC20_TOKENS.includes(props.coin.symbol)) {
      return erc20TransactionList?.data;
    } else if (SOL_TOKENS.includes(props.coin.symbol)) {
      return solTokenTransactionList?.data.transactions;
    } else if (props.coin.symbol === 'SOL') {
      return solTransactionList?.data.transactions;
    }
  }, [erc20TransactionList, solTokenTransactionList, solTransactionList]);

  // symbol에 따른 공개키 주소 반환
  const getAddressBySymbol = (symbol) => {
    switch (symbol) {
      case findOneThemeToken(symbol)?.symbol:
        return ethPublic;
      case 'RAY':
      case 'ATLAS':
      case 'SOL':
        return solPublic;
    }
  };
  // 전송 버튼
  const onPressSend= () => {
    // const param = {
    //   title: props.coin.symbol,
    //   address: getAddressBySymbol(props.coin.symbol),
    // };
    const param = {
      title: props.coin.symbol,
      address: '1111111',
    };
    Actions.sendNftScreen(param);
  };

  // 판매 버튼
  const onPressSell = () => {
    const param = {
      title: props.coin.symbol,
      amount,
      mintAddress: props.mintAddress,
    };
    Actions.sellNftScreen(param);
  };

  return (
    <SafeAreaView bgNavyTheme>
      <TopBar isLeftButton title={props.coin.name} />
        <View flex={5}>
            <Image source={""} width={"90%"} height={"100%"} borderRadius={10} bgLightGray marginLeft={'auto'}
        marginRight={'auto'}  />
          </View>
          <View flex={4} width={"90%"}  marginTop={10} marginBottom={10} marginLeft={'auto'}
        marginRight={'auto'}>
            <Text ftWhite>{props.coin.name}</Text>
            <Text ftWhite>{props.coin.name}</Text>
          </View>
        <View flex={2} flexDirection={"row"} justifyContent={'center'} alignItems={''}>
        <ButtonRadius
        bgWhite
        width={'40%'}
        height={'40%'}
        paddingTop={10}
        paddingBottom={10}
        marginTop={20}
        marginBottom={20}
        marginLeft={'auto'}
        marginRight={'auto'}
        onPress={onPressSend}
        >
            <Text ftNavyTheme bold fontSize={16}>
                Send
            </Text>
        </ButtonRadius>
        <ButtonRadius
        bgYellowTheme
        width={'40%'}
        height={'40%'}
        paddingTop={10}
        paddingBottom={10}
        marginTop={20}
        marginBottom={20}
        marginLeft={'auto'}
        marginRight={'auto'}
        onPress={onPressSell}
        >
            <Text ftNavyTheme bold fontSize={16}>
                Sell
            </Text>
        </ButtonRadius>
      </View>
    </SafeAreaView>
  );
};

export default WalletNftDetailScreen;
