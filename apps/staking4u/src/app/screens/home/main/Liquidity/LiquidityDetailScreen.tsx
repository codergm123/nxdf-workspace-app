import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, ViewRow, ScrollView } from '../../../../components/styled/View';
import { Text } from '../../../../components/styled/Text';
import Topbar from '../../../../components/bar/TopBar';
import styled from 'styled-components/native';
import { Button, ButtonRadius } from '../../../../components/styled/Button';
import iconPlus from "../../../assets/main/icon_Plus.png"
import { Image } from '../../../../components/styled/Image';
import Line from '../../../../components/line/Line';
import CheckBox from '@react-native-community/checkbox';
import { colors } from '../../../../components/styled/Common';

const SwapView = styled.View`
  width: 80%;
  flex: 1;
  justify-self: center;
  align-self: center;
  justify-content: center;
  margin-bottom: 10px;
`;


const TopView = styled(SwapView)`
  margin-top: 20px;
`

const FromView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;

`;


const FromText = styled.Text`
  color: white;
  
`

const SwapBox = styled.View`
  height: 50%;
  border: 1px solid white;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(49,56,103);
`;

const LiquidCoin = styled.View`
  width: 15%;
  height: 80%;
  background: rgb(49,56,103);
  justify-content: center;
  align-items: center;
`

const SwapPrice = styled.View`
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  background: rgb(49,56,103);
`;

const Input = styled.TextInput`
  width: 30%;
  justify-content: flex-end;
  color: white;
  text-align: right;
`;

const MaxBtn = styled.TouchableOpacity`
  background-color: white;
  padding: 4px;
  border-radius: 5px;
`;

const IconView = styled.View`
  align-self: center;
`

const ToText = styled(FromText)`
  margin-top: 5px;
  align-self: flex-end;
`;


//설명 부분 
const DesView = styled(View)`
 padding: 10px;

`


const BtnView = styled(ViewRow)`
`



const LiquiditiyDetailScreen = ({ item }) => {
  const [fInput, setFinput] = useState(0);
  const [sInput, setSinput] = useState(0);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const Schange = (event) => {
      const {text} = event.nativeEvent;
      setSinput(text.replace(/[^0-9]/g, ''));
      }
  const Fchange = (event) => {
    const { text } = event.nativeEvent;
    const num = text.replace(/[^0-9]/g, '')
      setFinput(num);
      }
const onPressToggle = () => {
    console.log("시작")
  };

  return (
     <SafeAreaView bgNavyTheme>
      <Topbar isLeftButton title={item.symbol} />
      <TopView>
        <FromView>
          <FromText>Input</FromText>
          <FromText>{`Balance: ${fInput} ETH`}</FromText>
        </FromView>
        <SwapBox>
          <LiquidCoin>
            <Image source={item.logo[0]} height={20} width={20} />
          </LiquidCoin>
          <SwapPrice>
            <Input value={fInput} placeholder={'0'} onChange={Fchange} />
            <Text ftWhite marginLeft={5} marginRight={5}>ETH</Text>
            <MaxBtn><Text>Max</Text></MaxBtn>
          </SwapPrice>
        </SwapBox>
      </TopView>
      {/* 이미지 */}
        <IconView>
          <Image source={iconPlus} height={30} width={30} />
        </IconView>
    {/* to */}
      <SwapView>
        <FromView>
          <FromText>Input</FromText>
          <FromText>{`Balance: ${sInput} ETH`}</FromText>
        </FromView>
        <SwapBox>
          <LiquidCoin>
            <Image source={item.logo[1]} height={20} width={20} />
          </LiquidCoin>
          <SwapPrice>
            <Input value={sInput} placeholder={'0'} onChange={Schange} />
            <Text ftWhite marginLeft={5} marginRight={5}>ETH</Text>
            <MaxBtn><Text>Max</Text></MaxBtn>
          </SwapPrice>
        </SwapBox>
      </SwapView>
      {/* 상세 정보 창 */}
      <View flex={2} justifyContent={'center'} alignItems={'center'}>
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
            >{`${item.name} Liquidity pool`}</Text>
          </ViewRow>
          <ViewRow marginBottom={8}>
            <Text fontSize={14} ftBlueGray width={'60%'}>
              TVL
            </Text>
            <Text width={'40%'} fontSize={14} ftWhite textAlign={'right'}>
              {item.poolPrice}$
            </Text>
          </ViewRow>
          <ViewRow marginBottom={8}>
            <Text width={'50%'} fontSize={14} ftBlueGray>
             Exchange Rate
            </Text>
            <Text width={'50%'} fontSize={14} ftWhite textAlign={'right'}>
              0
            </Text>
          </ViewRow>
          <ViewRow marginBottom={8}>
            <Text width={'50%'} fontSize={14} ftBlueGray>
              Share Ratio
            </Text>
            <Text width={'50%'} fontSize={14} ftWhite textAlign={'right'}>
              {`${0}%`}
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
        flex={1}
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
      {/* 스위치 */}
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
          onPress={""}
        >
          <Text ftNavyTheme bold fontSize={16}>
            Enter an amount
          </Text>
        </ButtonRadius>
      </View>
    </SafeAreaView>
  )
};




export default LiquiditiyDetailScreen;
