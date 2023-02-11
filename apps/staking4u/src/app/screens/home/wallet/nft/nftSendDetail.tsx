import React from 'react';
import { SafeAreaView, View } from '../../../../components/styled/View';
import Topbar from '../../../../components/bar/TopBar';
import { ButtonRadius } from '../../../../components/styled/Button';
import { Image } from '../../../../components/styled/Image';
import styled from 'styled-components/native';
import { Text } from '../../../../components/styled/Text';
import scan from '../../../assets/main/icon_scan.png';


const SendWalletScreen = styled(View)`
    height: 50px;
    width: 100%;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    flex-direction: row;
    align-self: center;
    align-items: center;
    justify-content: center;
    background-color: #1E2048;
`;




const NftSendDetailScreen = (props) => {
  
  return (
    <SafeAreaView bgNavyTheme>
        <Topbar isLeftButton title={"NFT Send"} />
          <View flex={1} marginTop={50} width={"90%"} alignSelf={"center"} >
            <Text  ftWhite> Check out the information below</Text>
            <Text ftYellowTheme >Cancellation is not possible after sending</Text>
          </View>
          <View flex={1} marginTop={20} width={"90%"} alignSelf={"center"} >
            <Text  ftWhite>Wallet Address</Text>
              <SendWalletScreen border={true}>
                  <Text ftWhite>Wallet Address Plz...</Text>
              </SendWalletScreen>
          </View>
        <View flex={4} marginTop={50}>
            <Text marginLeft={20} ftWhite>send Collection</Text>
            <Image source={""} width={"60%"} height={"80%"} borderRadius={10} bgLightGray marginLeft={'auto'}
        marginRight={'auto'} marginTop={10} />
          </View>
          <View flex={2} width={"90%"}  marginTop={40} marginBottom={10} marginLeft={'auto'}
        marginRight={'auto'}>
            <Text marginBottom={10} fontSize={16} ftWhite>Collection Name plz...</Text>
            <Text  ftLightGray>Collection Name plz...</Text>
          </View>
        <View flex={2} flexDirection={"row"} justifyContent={'center'} alignItems={''}>
        <ButtonRadius
        bgYellowTheme
        width={'80%'}
        height={'40%'}
        paddingTop={10}
        paddingBottom={10}
        marginTop={20}
        marginBottom={20}
        marginLeft={'auto'}
        marginRight={'auto'}
        onPress={""}
        >
            <Text ftNavyTheme bold fontSize={16}>
                Send
            </Text>
        </ButtonRadius>
      </View>
    </SafeAreaView>
  );
};

export default NftSendDetailScreen;
