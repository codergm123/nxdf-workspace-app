import React, {useState} from 'react';
import {Actions} from 'react-native-router-flux';
import Topbar from '../../components/bar/TopBar';
import {SafeAreaView, View, ViewRow} from '../../components/styled/View';
import {Text} from '../../components/styled/Text';
import {ButtonRadius} from '../../components/styled/Button';
import {Image} from '../../components/styled/Image';
import checkBlackIcon from '../../assets/register/icon_check_black.png';
import checkGrayIcon from '../../assets/register/icon_check_gray.png';

const ServiceAgreenmentScreen = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isNext, setIsNext] = useState(false);

  const onPressToggleAgreement = () => {
    setIsChecked(!isChecked);
    setIsNext(!isNext);
  };

  const onPressNext = () => {
    if (isNext) Actions.mnemonicGuideScreen();
  };

  return (
    <SafeAreaView bgNavyTheme>
      <Topbar isLeftButton />
      <View flex={1}>
        <View flex={1} justifyContent={'center'} paddingLeft={25}>
          <Text ftWhite fontSize={22} marginBottom={20}>
            Hello!
          </Text>
          <Text ftWhite ftSmall>
            Sign up by completing few steps and{'\n'}
            meet various kinds of virtual asset financial products.{'\n'}
            You can experience future finance with Staking4U!
          </Text>
        </View>
        <View flex={1}>
          <ButtonRadius
            {...(isChecked ? {bgYellowTheme: true} : {bgLightNavy: true})}
            width={'88%'}
            paddingTop={10}
            paddingBottom={10}
            paddingLeft={16}
            marginTop={20}
            marginBottom={20}
            marginLeft={'auto'}
            marginRight={'auto'}
            justifyContent={'flex-start'}
            onPress={onPressToggleAgreement}>
            <Image
              width={24}
              height={24}
              marginRight={6}
              source={isChecked ? checkBlackIcon : checkGrayIcon}
            />
            <Text
              {...(isChecked ? {ftFontNavy: true} : {ftWhite: true})}
              bold
              fontSize={16}>
              Agree
            </Text>
          </ButtonRadius>
          <ViewRow>
            <Text
              ftWhite
              ftSmall
              paddingLeft={30}
              marginBottom={10}
              marginRight={6}>
              Terms of service
            </Text>
            <Text
              ftYellowTheme
              ftSmall
              textDecoration={'underline'}
              onPress={Actions.termsOfServiceScreen}>
              View
            </Text>
          </ViewRow>
          <ViewRow>
            <Text ftWhite ftSmall paddingLeft={30} marginRight={6}>
              Privacy policy
            </Text>
            <Text
              ftYellowTheme
              ftSmall
              textDecoration={'underline'}
              onPress={Actions.privacyScreen}>
              View
            </Text>
          </ViewRow>
        </View>
      </View>
      <View flex={1} justifyContent={'flex-end'}>
        {isChecked ? null : (
          <Text ftPurpleWhite width={'100%'} textAlign="center" ftSmall>
            We will continue with your agreement ☺️
          </Text>
        )}
        <ButtonRadius
          {...(isChecked ? {bgYellowTheme: true} : {bgBlueGray: true})}
          width={'88%'}
          paddingTop={10}
          paddingBottom={10}
          marginTop={20}
          marginBottom={20}
          marginLeft={'auto'}
          marginRight={'auto'}
          onPress={onPressNext}>
          <Text ftNavyTheme bold fontSize={16}>
            Next
          </Text>
        </ButtonRadius>
      </View>
    </SafeAreaView>
  );
};

export default ServiceAgreenmentScreen;
