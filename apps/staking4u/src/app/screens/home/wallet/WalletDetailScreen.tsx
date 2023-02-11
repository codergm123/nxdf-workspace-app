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
import { ButtonBorderRadius } from '../../../components/styled/Button';
import { findOneThemeToken } from '../../../utils/functions';

// 지갑 상세
const WalletDetailScreen = (props) => {
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
  // 입금 버튼
  const onPressReceive = () => {
    // const param = {
    //   title: props.coin.symbol,
    //   address: getAddressBySymbol(props.coin.symbol),
    // };
    const param = {
      title: props.coin.symbol,
      address: '1111111',
    };
    Actions.receiveScreen(param);
  };

  // 출금 버튼
  const onPressSend = () => {
    const param = {
      title: props.coin.symbol,
      amount,
      mintAddress: props.mintAddress,
    };
    Actions.sendAddressScreen(param);
  };

  return (
    <SafeAreaView bgNavyTheme>
      <TopBar isLeftButton title={props.coin.name} />
      <View alignItems={'center'} marginTop={15} marginBottom={30}>
        <View alignItems={'center'}>
          <Text ftYellowTheme>Total</Text>
          <View bgYellowTheme height={3} marginTop={5} width={50} />
        </View>
        <View marginTop={15} marginBottom={15}>
          <Text ftBigLarge ftWhite>
            {amount ? amount.toFixed(4) : 0} {props.coin.symbol}
          </Text>
        </View>
        <View>
          <Text fontSize={15} ftBlueGray>
            ${price ? price.toFixed(4) : 0}
          </Text>
        </View>
        <ViewRow justifyContent={'space-around'} width={'100%'} marginTop={25}>
          <ButtonBorderRadius
            borderRadius={6}
            bgLightNavy
            width={'43%'}
            paddingTop={15}
            paddingBottom={15}
            onPress={onPressReceive}
          >
            <Text fontSize={15} ftYellowTheme>
              Receive
            </Text>
          </ButtonBorderRadius>
          <ButtonBorderRadius
            borderRadius={6}
            bgLightNavy
            width={'43%'}
            onPress={onPressSend}
          >
            <Text ftWhite fontSize={15}>
              Send
            </Text>
          </ButtonBorderRadius>
        </ViewRow>
      </View>
      <Line height={4} />
      <View paddingLeft={15} paddingRight={15} flex={1}>
        {/* 내역보기 문구 */}
        <ViewRow
          alignItems={'center'}
          marginTop={25}
          marginBottom={25}
          justifyContent={'space-between'}
        >
          <Text ftWhite>History</Text>
          {/*//todo 미구현 UI 주석처리, 추후 구현 예정*/}
          {/*<ButtonBorderRadius*/}
          {/*  bgDeepBlue*/}
          {/*  width={'auto'}*/}
          {/*  paddingLeft={10}*/}
          {/*  paddingRight={10}>*/}
          {/*  <Text*/}
          {/*    ftSmall*/}
          {/*    ftWhite*/}
          {/*    paddingTop={5}*/}
          {/*    paddingBottom={5}*/}
          {/*    marginRight={5}>*/}
          {/*    All*/}
          {/*  </Text>*/}
          {/*  <Image width={12} height={12} source={iconWhiteDown} />*/}
          {/*</ButtonBorderRadius>*/}
        </ViewRow>
        <Line height={1} />
        {/* 내역 상세 리스트 */}
        <FlatList
          data={transactions}
          renderItem={renderTransactions}
          keyExtractor={(item) =>
            findOneThemeToken(props.coin.symbol)
              ? item.blockNumber
              : item.txHash
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default WalletDetailScreen;
