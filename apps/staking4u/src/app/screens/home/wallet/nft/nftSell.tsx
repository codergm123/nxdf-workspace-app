import React from 'react';
import { SafeAreaView, View } from '../../../../components/styled/View';
import Topbar from '../../../../components/bar/TopBar';
import { ButtonRadius } from '../../../../components/styled/Button';
import { Image } from '../../../../components/styled/Image';
import styled from 'styled-components/native';
import { isEmpty } from '../../../../utils/functions';
import { Actions } from 'react-native-router-flux';
import{ Text } from '../../../../components/styled/Text';



const SellScreen = styled(View)`
    height: 50px;
    border: 1px solid white;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;


const PriceInput = styled.TextInput`
    height: 100%;
    width: 60%;
    text-align: right;
    color: white;
    align-self: center;
`;

const CoinText = styled.Text`
    color: white;
    align-self: center;

`;

const NftSellScreen = (props) => {

  const onPressLeft = () => {
    if (isEmpty(props.onPressLeft)) {
      Actions.pop();
    } else {
      props.onPressLeft();
    }
  };
  
  return (
    <SafeAreaView bgNavyTheme>
      <Topbar isLeftButton title={"Sell"} />
        <View flex={5} marginTop={50}>
            <Text marginLeft={20} ftWhite>asdasd</Text>
            <Image source={""} width={"90%"} height={"100%"} borderRadius={10} bgLightGray marginLeft={'auto'}
        marginRight={'auto'} marginTop={10} />
          </View>
          <View flex={4} width={"90%"}  marginTop={40} marginBottom={10} marginLeft={'auto'}
        marginRight={'auto'}>
            <Text ftWhite>Sell Price</Text>
                <SellScreen border={true}>
                  <Image source={""} width={"20%"} height={"100%"} borderRadius={10} bgLightGray />
                  <PriceInput />
                  < CoinText  >
                  {`ETH`}
                  </CoinText>
                </SellScreen>
             <Text ftLightGray>Commission</Text>
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
        onPress={onPressLeft}
        >
            <Text ftNavyTheme bold fontSize={16}>
                Cancel
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
        onPress={onPressLeft}
        >
            <Text ftNavyTheme bold fontSize={16}>
                Sell
            </Text>
        </ButtonRadius>
      </View>
    </SafeAreaView>
  );
};

export default NftSellScreen;
