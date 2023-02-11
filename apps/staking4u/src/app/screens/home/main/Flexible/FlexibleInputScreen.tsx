import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as modalActions from '../../../../store/modules/modal/actions';
import * as stakeRayActions from '../../../../store/modules/stake/ray/actions';
import {
  SafeAreaView,
  View,
  ViewRow,
  ScrollView,
  ViewRowBorderRadius,
} from '../../../../components/styled/View';
import { Text } from '../../../../components/styled/Text';
import Topbar from '../../../../components/bar/TopBar';
import Line from '../../../../components/line/Line';
import {
  ButtonRadius,
  ButtonBorderRadius,
  Button,
} from '../../../../components/styled/Button';
import CheckBox from '@react-native-community/checkbox';
import InputBorderWith from '../../../../components/input/InputBorderWith';
import { colors } from '../../../../components/styled/Common';
import { ERC20_TOKENS, SOL_TOKENS } from '../../../../utils/constants';

const FlexibleInputScreen = ({ item }) => {
  console.log(item);
  const dispatch = useDispatch();
  const maxAmount = useRef(0);
  const [amount, setAmount] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const solSecret = '';
  const solNetworkMode = '';
  const erc20Tokens = {
    AAVE: { balance: 100 },
    ORBS: { balance: 200 },
    SOL: { balance: 300 },
    RAY: { balance: 400 },
  };
  const solTokens = {
    AAVE: { amount: 100 },
    ORBS: { amount: 200 },
    SOL: { amount: 300 },
    RAY: { amount: 400 },
  };
  const stakingRayInfo: any = {
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
  const [message, setMessage] = useState('');

  const depositBalance = 100;

  useEffect(() => {
    if (message === 'ray staking success') {
      Actions.stakingCompleteScreen({
        amount,
        annualInteresetRate: item.annualInteresetRate,
        symbol: item.symbol,
      });
      dispatch(stakeRayActions.reset_message(''));
    } else if (message === 'ray staking failure') {
      dispatch(
        modalActions.change_modal_message(
          'A problem occurred during the staking process. Contact to manager'
        )
      );
      dispatch(modalActions.change_modal_one_button(true));
    }
  }, [message]);

  const renderBalance = useCallback(() => {
    if (ERC20_TOKENS.includes(item.symbol)) {
      maxAmount.current = erc20Tokens?.[item.symbol].balance;
      return erc20Tokens
        ? `Balance : ${erc20Tokens?.[item.symbol].balance} ${item.symbol}`
        : `Balance : 0 ${item.symbol}`;
    } else if (SOL_TOKENS.includes(item.symbol)) {
      maxAmount.current = solTokens?.[item.symbol].amount;
      return solTokens
        ? `Balance : ${erc20Tokens?.[item.symbol].balance} ${item.symbol}`
        : `Balance : 0 ${item.symbol}`;
    }
  }, [erc20Tokens, solTokens]);

  const onPressToggle = () => {
    setToggleCheckBox(!toggleCheckBox);
  };

  const onPressMax = () => {
    setAmount(String(maxAmount.current));
  };

  const startStaking = (symbol) => {
    switch (symbol) {
      case 'RAY': {
        const body = {
          networkMode: solNetworkMode,
          solSecret,
          amount,
        };
        //dispatch(stakeRayActions.post_ray_staking(body));
        setMessage('ray staking success');
        break;
      }
      default: {
      }
    }
  };

  const onPressStart = () => {
    if (amount && toggleCheckBox) {
      if (Number(amount) > maxAmount.current) {
        dispatch(
          modalActions.change_modal_message(
            'There are not enough assets in your balance.'
          )
        );
        dispatch(modalActions.change_modal_one_button(true));
      } else {
        startStaking(item.symbol);
      }
    } else {
      dispatch(
        modalActions.change_modal_message(
          'Please enter amount or check agreement of notices.'
        )
      );
      dispatch(modalActions.change_modal_one_button(true));
    }
  };

  return (
    <SafeAreaView bgNavyTheme>
      <Topbar isLeftButton title={`${"ray"} Flexible Staking`} />
      <View flex={3} justifyContent={'center'} alignItems={'center'}>
        <View width={'96%'} alignSelf={'center'}>
          <ViewRow
            width={'96%'}
            alignItems={'center'}
            justifyContent={'space-between'}
            marginBottom={10}
            alignSelf={'center'}
          >
            <Text fontSize={15} ftWhite>
              {stakingRayInfo.length > 0 &&
              stakingRayInfo[0].depositBalance !== '0'
                ? 'Additional Staking Amount'
                : 'Staking Amount'}
            </Text>
            <Text fontSize={12} ftBlueGray textAlign={'right'}>
              {renderBalance()}
            </Text>
          </ViewRow>
          <InputBorderWith // Not working
            width={'96%'}
            value={amount}
            placeholder={
              item.minimumLockedAmount > 0
                ? `Min ${item.minimumLockedAmount} ${item.symbol}`
                : '0'
            }
            isOnlyNumber
            onChangeText={(text) => setAmount(text)}
          >
            <ButtonBorderRadius
              alignSelf={'center'}
              onPress={onPressMax}
              borderRadius={6}
              width={55}
              height={35}
              paddingLeft={10}
              paddingRight={10}
              paddingTop={5}
              paddingBottom={5}
              bgWhite
              activeOpacity={0.8}
            >
              <Text ftFontNavy fontSize={13} bold>
                MAX
              </Text>
            </ButtonBorderRadius>
          </InputBorderWith>
        </View>
        {stakingRayInfo.length > 0 &&
        stakingRayInfo[0].depositBalance !== '0' ? (
          <ViewRowBorderRadius
            justifyContent={'space-between'}
            width={'94%'}
            bgLineNavy
            borderRadius={6}
            marginTop={20}
            paddingTop={10}
            paddingBottom={10}
          >
            <Text ftBlueGray fontSize={13} paddingLeft={15}>
              Existing Deposit
            </Text>
            <Text ftBlueGray fontSize={13} paddingRight={15}>
              {`${depositBalance} ${item.symbol}`}
            </Text>
          </ViewRowBorderRadius>
        ) : (
          <></>
        )}
      </View>
      <Line width={'100%'} height={3} />
      <View flex={3} justifyContent={'center'} alignItems={'center'}>
        <View width={'94%'} alignSelf={'center'}>
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
            >{`${item.name} Flexible Staking`}</Text>
          </ViewRow>
          <ViewRow marginBottom={8}>
            <Text fontSize={14} ftBlueGray width={'60%'}>
              Minimum Locked Amount
            </Text>
            <Text width={'40%'} fontSize={14} ftWhite textAlign={'right'}>
              {' '}
              {item.minimumLockedAmount > 0
                ? `Min ${item.minimumLockedAmount} ${item.symbol}`
                : 'None'}
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
              {`${item.annualInteresetRate}%`}
            </Text>
          </ViewRow>
        </View>
      </View>
      <Line width={'100%'} height={3} />
      <ScrollView
        flex={2}
        width={'94%'}
        alignSelf={'center'}
        marginTop={20}
        marginBottom={20}
        paddingBottom={30}
      >
        <Text ftYellowTheme bold fontSize={15} marginBottom={10}>
          Notice
        </Text>
        <Text ftBlueGray fontSize={13} marginBottom={8}>
          1. Staking4U is a cryptocurrency wallet service that ables
          cryptocurrency and crypto-derivative transactions, using only 'Private
          Key' made by each individual.
        </Text>
        <Text ftBlueGray fontSize={13} marginBottom={8}>
          2. Staking4U only handles cryptocurrency for transactions and clearly
          defines that we do not treat any other legal tender.
        </Text>
        <Text ftBlueGray fontSize={13} marginBottom={8}>
          3. Staking4U stores no personal data but email and does not have
          access authority to any cryptocurrency and crypto-derivative that
          belongs to an individual.
        </Text>
        <Text ftBlueGray fontSize={13} marginBottom={8}>
          4. Staking4U only provides introduction of cryptocurrency and
          crypto-derivative, smart contract and decentralized marketplace,
          automatically ran by software, to users of Staking4U software. We do
          not act as a dealer or promotion of cryptocurrency and
          crypto-derivative.
        </Text>
        <Text ftBlueGray fontSize={13} marginBottom={8}>
          5. APR of cryptocurrency and crypto-derivative, mediated by Staking4U,
          is only an estimation of earnings rate of cryptocurrency and
          crypto-derivative provided by Staking4U. We clearly define that it is
          not an earnings rate of legal tender and can fluctuate depending on
          the product and product management agency.
        </Text>
        <Text ftBlueGray fontSize={13} marginBottom={8}>
          6. When a purchase of cryptocurrency or crypto-derivative occurs
          through Staking4U, a specific cryptocurrency that has an equal value
          to the staking product will be automatically payed to the user. The
          user can exchange the specific cryptocurrency for other cryptocurrency
          or crypto-derivative that the user is holding, according to the
          relevant Staking product contract.
        </Text>
        <Text ftBlueGray fontSize={13} marginBottom={8}>
          7. Every cryptocurrency automatically issued by Staking4U is a
          POS(Proof Of Stake) for all cryptocurrency or crypto-derivative
          purchased by users. Also, it is a crypto-derivative that can be
          purchased or sold by anyone and anywhere globally, according to the
          contract of the Staking product.
        </Text>
        <Text ftBlueGray fontSize={13} marginBottom={8}>
          8. Cryptocurrency issued by Staking4U follows the Ethereum and Stellar
          blockchain token system, and can be sent to various cryptocurrency
          wallets that are compatible with the standard qualification of
          Ethereum, Stellar wallet.
        </Text>
        <Text ftBlueGray fontSize={13} marginBottom={8}>
          9. Staking4U provides cryptocurrency staking service, as much as
          technically possible, that ables users to access the blockchain
          network with crypto-assets stored by the company, following the
          implemented function of the specific crypto-asset blockchain. Under no
          circumstances does Staking4U gaurantee principal or promise any
          revenue relevant to the staking service.
        </Text>
        <Text ftBlueGray fontSize={13} marginBottom={8}>
          10. Staking4U can apply details of the staking service differently
          depending on the type of cryptocurrency, and ensure users to read and
          agree to all product agreements.
        </Text>
        <Text ftBlueGray fontSize={13} marginBottom={8}>
          11. The user acknowledges and agrees that there may be restrictions on
          the deposit and withdrawal functions of the cryptocurrency
          participating in the staking service for a certain period, according
          to the terms and policies of the institution providing the Staking
          product.
        </Text>
        <Text ftBlueGray fontSize={13} marginBottom={2}>
          12. Staking4U can dircetly cancel and restore rewards of the staking
          service or delay payment of rewards of the contracted cryptocurrency
          when situations as below occur.
        </Text>
        <Text ftBlueGray fontSize={13} marginBottom={2}>
          {'  '}
          1) User's abnormal use of staking service
        </Text>
        <Text ftBlueGray fontSize={13} marginBottom={2}>
          {'  '}
          2) Error of the staking service agency and the agency's blockchain
          network
        </Text>
        <Text ftBlueGray fontSize={13} marginBottom={2}>
          {'  '}
          3) Service failure due to Internet network failure
        </Text>
        <Text ftBlueGray fontSize={13} marginBottom={8}>
          {'  '}
          4) Other reasons equivalent to above
        </Text>
        <Text ftBlueGray fontSize={13} marginBottom={8}>
          13. When cryptocurrency and crypto-derivative transactions provided by
          Staking4U occur between users, the minimum unit of the relevant
          cryptocurrency will be automatically cut off.
        </Text>
        <Text ftBlueGray fontSize={13} marginBottom={8}>
          14. DAIB cryptocurrency can be exchanged to Ethereum(ETH), Solana(SOL)
          or Stellar(XLM) which are provided from Staking4U wallet. The
          transaction fee is 0.1% of the total amount of cryptocurrency that the
          user wants to exchange.
        </Text>
      </ScrollView>
      <Button
        width={'100%'}
        flexDirection={'row'}
        alignSelf={'center'}
        justifyContent={'flex-start'}
        alignItems={'center'}
        paddingLeft={5}
        paddingTop={2}
        paddingBottom={2}
        marginBottom={20}
        onPress={onPressToggle}
        activeOpacity={1}
        bgDeepBlue
      >
        <CheckBox
          tintColors={{ true: colors.YellowTheme, false: colors.NavyTheme }}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
          value={toggleCheckBox}
        />
        <Text fontSize={13} ftWhite paddingLeft={13}>
          I have read and agree to all notices
        </Text>
      </Button>
      <View flex={1.5} justifyContent={'flex-end'}>
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
            Stake Now
          </Text>
        </ButtonRadius>
      </View>
    </SafeAreaView>
  );
};

export default FlexibleInputScreen;
