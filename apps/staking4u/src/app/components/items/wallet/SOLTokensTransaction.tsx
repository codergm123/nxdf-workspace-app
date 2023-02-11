import React from 'react';
import {View, ViewRowBorder} from '../../styled/View';
import {Text} from '../../styled/Text';
import {substringAddress} from '../../../utils/functions';

const SOLTokensTransaction = ({
  status,
  includeSPLTransfer, //todo 트랜잭션 전송 유무 이 값이 존재하지 않으면 스테이킹 (추후 수정 예정)
  fee,
  days,
  times,
  change,
  solTokenPublicKey, //todo 자신이 보낸건지 받은건지에 따른 UI를 그려주기위해 사용하는 자신의 SOL Token 주소, 현재 서버에서 주는 값에는 보내는사람 받는사람의 주소를 확인하지못하여 사용하지 않음 (추후 사용 예정)
  symbol,
}) => {
  const renderAmount = () => {
    if (String(change.changeAmount).substr(0, 1) === '-') {
      return (
        <Text bold ftSmall ftLightRed>
          {Number(change.changeAmount / Math.pow(10, change.decimals)).toFixed(
            4,
          )}{' '}
          {symbol}
        </Text>
      );
    } else {
      return (
        <Text bold ftSmall ftLightGreen>
          +
          {Number(change.changeAmount / Math.pow(10, change.decimals)).toFixed(
            4,
          )}{' '}
          {symbol}
        </Text>
      );
    }

    // if (
    //   tokensTransferTxs[0].source.toLowerCase() !==
    //   solTokenPublicKey.toLowerCase()
    // ) {
    //   return (
    //     <Text bold ftSmall ftLightGreen textAlign={'right'}>
    //       {' '}
    //       +{' '}
    //       {Number(
    //         (
    //           tokensTransferTxs[0].amount /
    //           Math.pow(10, tokensTransferTxs[0].token.decimals)
    //         ).toFixed(4),
    //       )}{' '}
    //       <Text fontSize={11} ftLightGreen bold>
    //         {symbol}
    //       </Text>{' '}
    //     </Text>
    //   );
    // }
    // return (
    //   <Text bold ftSmall ftLightRed textAlign={'right'}>
    //     {' '}
    //     -{' '}
    //     {Number(
    //       (
    //         tokensTransferTxs[0].amount /
    //         Math.pow(10, tokensTransferTxs[0].token.decimals)
    //       ).toFixed(4),
    //     )}{' '}
    //     <Text fontSize={11} ftLightRed bold>
    //       {symbol}
    //     </Text>{' '}
    //   </Text>
    // );
  };
  return (
    <View justifyContent={'center'} alignItems={'center'}>
      {status === 'Success' ? (
        <ViewRowBorder
          borderTopWidth={1}
          borderBottomWidth={'0'}
          borderRightWidth={'0'}
          borderLeftWidth={'0'}
          width={'95%'}
          paddingTop={15}
          justifyContent={'space-between'}
          alignItems={'center'}
          paddingBottom={15}>
          <View width={'auto'} flex={1} alignItems={'flex-start'}>
            <Text ftWhite fontSize={12}>
              {days}
            </Text>
            <Text ftWhite fontSize={11} marginTop={5}>
              {times}
            </Text>
          </View>
          <View width={'auto'} flex={1} alignItems={'center'}>
            {/*<Text ftBlueGray ftSmall>*/}
            {/*  From : {substringAddress(tokensTransferTxs[0].source, 6, 4)}*/}
            {/*</Text>*/}
            {/*<Text ftBlueGray ftSmall>*/}
            {/*  To : {substringAddress(tokensTransferTxs[0].destination, 6, 4)}*/}
            {/*</Text>*/}
            <Text ftSuccess>Success</Text>
          </View>
          <View width={'auto'} flex={1} alignItems={'flex-end'}>
            {renderAmount()}
            {
              <Text ftWhite fontSize={10} marginTop={5}>
                Fees : {fee / Math.pow(10, 9)} SOL
              </Text>
            }
          </View>
        </ViewRowBorder>
      ) : null}
    </View>
  );
};

export default SOLTokensTransaction;
