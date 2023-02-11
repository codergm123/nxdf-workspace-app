import React from 'react';
import { SafeAreaView, View } from '../../../../components/styled/View';
import Topbar from '../../../../components/bar/TopBar';
import { ButtonRadius } from '../../../../components/styled/Button';
import { Image } from '../../../../components/styled/Image';
import styled from 'styled-components/native';
import { Text } from '../../../../components/styled/Text';
import scan from '../../../assets/main/icon_scan.png';
import { Actions } from 'react-native-router-flux';
import { isEmpty } from '../../../../utils/functions';


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
    width: 70%;
    text-align: right;
    color: white;
    align-self: center;
    font-size: 18px;
    font-weight: 600;
    margin-right: 10px;
`;



const NftSendScreen = (props) => {
   // 전송 버튼
  const onPressSend= () => {
 ;
    const param = {
      address: '1111111',
    };
    Actions.sendNftDetailScreen(param);
  };
    
    //뒤로가기
    const onPressLeft = () => {
    if (isEmpty(props.onPressLeft)) {
      Actions.pop();
    } else {
      props.onPressLeft();
    }
  };
    
  return (
    <SafeAreaView bgNavyTheme>
      <Topbar isLeftButton title={"Send"} />
        <View flex={5} marginTop={50}>
            <Text marginLeft={20} ftWhite>asdasd</Text>
            <Image source={""} width={"60%"} height={"80%"} borderRadius={10} bgLightGray marginLeft={'auto'}
        marginRight={'auto'} marginTop={10} />
          </View>
          <View flex={4} width={"90%"}  marginTop={40} marginBottom={10} marginLeft={'auto'}
        marginRight={'auto'}>
            <Text  ftWhite>Wallet Address</Text>
                <SellScreen border={true}>
                  <PriceInput  />
                  <ButtonRadius marginTop={5} width={"15%"} height={"80%"} bgWhite alignItems={'center'} justifyContent={'center'}>
                     <Image source={scan} width={"50%"} height={"50%"} borderRadius={10} bgWhite />
                    </ButtonRadius>
              </SellScreen>
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
        onPress={onPressSend}
        >
            <Text ftNavyTheme bold fontSize={16}>
                Send
            </Text>
        </ButtonRadius>
      </View>
    </SafeAreaView>
  );
};

export default NftSendScreen;
