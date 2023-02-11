import React, { useState } from 'react';
import styled from 'styled-components/native';
import Topbar from '../../../components/bar/TopBar';
import { Button, ButtonRadius } from '../../../components/styled/Button';
import { Image } from '../../../components/styled/Image';
import { Text } from '../../../components/styled/Text';
import { View, ViewRow, SafeAreaView } from '../../../components/styled/View';
import iconExcahnge from "../../../assets/main/icon_Exchange.png"
import { SwapData } from '../../../utils/dummy';
import { TouchableOpacity } from 'react-native-gesture-handler';


const SwapView = styled.View`
  width: 80%;
  flex: 1;
  justify-self: center;
  align-self: center;
  justify-content: center;
  margin-bottom: 10px;
`;


const TopView = styled(SwapView)`
  margin-top: 40px;
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
`;

const SwapCoin = styled.TouchableOpacity`
  width: 30%;
  height: 80%;
  background: rgb(49,56,103);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
`

const SwapPrice = styled.View`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const SwapText = styled.Text`
  color: white;
`;

const MaxBtn = styled.TouchableOpacity`
  background-color: white;
  padding: 4px;
  border-radius: 5px;
`;

const IconView = styled.TouchableOpacity`
  align-self: center;
`

const ToText = styled(FromText)`
  margin-top: 5px;
  align-self: flex-end;
`;


const ToSwapText = styled(SwapText)`
  margin-left: 40px;
`;
const ToSwapInput = styled.TextInput`
  width: 60%;
  justify-content: flex-end;
  color: white;
  text-align: right;
`;

//설명 부분 
const DesView = styled(View)`
 padding: 10px;

`

const DesBtn = styled(Button)`
  border: 2px solid white;
  border-radius: 5px;
  height: 80%;
  margin-right: 10px;
  padding: 3px;
  width: 20%;
`

const BtnView = styled(ViewRow)`
`


const SwapDetailScreen = ( )=> {
  const [bgbtn, setbgbtn] = useState(0);
  const [fCoin, setFCoin] = useState("ETH");
  const [sCoin, setSCoin] = useState("NXDF");
  const [fInput, setFinput] = useState(0);
  const [sInput, setSinput] = useState(0);

  const onClick = (value) => {
    setbgbtn(value);
  }
  const Schange = (event) => {
      const {text} = event.nativeEvent;
      setSinput(text.replace(/[^0-9]/g, ''));
      }
  const Fchange = (event) => {
    const { text } = event.nativeEvent;
    const num = text.replace(/[^0-9]/g, '')
      setFinput(num);
      }

  const onPress = () => {
    setSCoin(fCoin);
    setFCoin(sCoin);
    setFinput(0);
    setSinput(0);
    console.log(fCoin, sCoin);
  }


  return (
    <SafeAreaView bgNavyTheme>
      <View height={50} marginTop={20} marginLeft={10}>
          <Text fontSize={24} ftWhite bold>
            Swap
          </Text>
        </View>
      <TopView>
        <FromView>
          <FromText>From</FromText>
          <FromText>{`Balance: ${fInput} ETH`}</FromText>
        </FromView>
        <SwapBox>
          <SwapCoin>
            <Image source={0} height={20} width={20}/>
            <Text ftWhite marginLeft={5}>{fCoin}</Text>
          </SwapCoin>
          <SwapPrice>
            <ToSwapInput value={fInput} placeholder={'0'} onChange={Fchange} />
            <MaxBtn><Text>Max</Text></MaxBtn>
          </SwapPrice>
        </SwapBox>
      </TopView>
      {/* 이미지 */}
        <IconView onPress={onPress}>
          <Image source={iconExcahnge} height={30} width={30} />
        </IconView>
    {/* to */}
      <SwapView>
        <FromView>
          <FromText>To</FromText>
        </FromView>
        <SwapBox>
          <SwapCoin>
            <Image source={0} height={20} width={20}/>
            <Text ftWhite marginLeft={5}>{sCoin}</Text>
          </SwapCoin>
          <SwapPrice>
            <SwapText>{`${fInput}`}</SwapText>
            <SwapText>{`ETH`}</SwapText>
          </SwapPrice>
        </SwapBox>
        <ToText>{`Balance: ${fInput} ETH`}</ToText>
      </SwapView>
      {/* 상세 정보 창 */}
      <View flex={3} marginTop={30}>
        <DesView height={150} width={'94%'} alignSelf={'center'} justifySelf={'center'} bgLightNavy>
          <ViewRow
            flewWrap={'wrap'}
            justifyContent={'space-between'}
            alignItems={'center'}
            marginBottom={8}
          >
            <Text width={'50%'} fontSize={14} ftBlueGray>
             Minimum received
            </Text>
            <Text
              width={'50%'}
              fontSize={14}
              ftWhite
              bold
              textAlign={'right'}
            >{`${0}${0}`}</Text>
          </ViewRow>
          <ViewRow marginBottom={8}>
            <Text fontSize={14} ftBlueGray width={'60%'}>
              Price Impact
            </Text>
            <Text width={'40%'} fontSize={14} ftWhite textAlign={'right'}>
              { 'None'}
            </Text>
          </ViewRow>
          <ViewRow marginBottom={8}>
            <Text width={'50%'} fontSize={14} ftBlueGray>
              Slippage tolerance 
            </Text>
            <Text width={'50%'} fontSize={14} ftWhite textAlign={'right'}>
            </Text>
          </ViewRow>
          <BtnView flex={1} justifyContent={'flex-end'} alignItems={'flex-end'} width={'100%'}>
            {
              btndata.map((value, index) => 
              index ===  bgbtn ?
                  <DesBtn onPress={() => onClick(index)} bgWhite ><Text ftSmall ftBlack>{value.value}</Text></DesBtn>
                : <DesBtn onPress={() => onClick(index)} ><Text ftWhite ftSmall>{value.value}</Text></DesBtn>
              )
                }
          </BtnView>
          <ViewRow>
            <Text width={'50%'} ftWhite>Path</Text>
            <Text width={'50%'} ftWhite  textAlign={'right'}>{`${fCoin} > ${sCoin}`}</Text>
          </ViewRow>
        </DesView>
      </View>
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
            Swap
          </Text>
        </ButtonRadius>
      </View>
    </SafeAreaView>
  );
};

const btndata =
  [
    { value : "0.1%" },
    { value : "0.5%" },
    { value : "custom%" },
  ]



export default SwapDetailScreen;
