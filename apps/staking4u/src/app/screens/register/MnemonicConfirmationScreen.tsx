import React, {useState, useRef} from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import * as modalActions from '../../store/modules/modal/actions';
import {
  SafeAreaView,
  View,
  ViewBorderRadius,
} from '../../components/styled/View';
import {Text} from '../../components/styled/Text';
import {ButtonRadius} from '../../components/styled/Button';
import TopBar from '../../components/bar/TopBar';
import MnemonicList from './MnemonicList';
import {AESKey, shuffleArray} from '../../utils/functions';

const MnemonicConfirmationScreen = () => {
  const dispatch = useDispatch();
  const {mnemonic} = useSelector(
    (state) => ({
      mnemonic: state.register.mnemonic,
    }),
    shallowEqual,
  );
  const [clickedMnemonic, setClickedMnemonic] = useState([]);
  const shuffledMnemonic = useRef(shuffleArray(mnemonic.split(' ')));

  const onPressNext = async () => {
    if (mnemonic !== clickedMnemonic.join(' ')) {
      dispatch(
        modalActions.change_modal_message(
          '입력하신 단어의 순서와 니모닉이 다릅니다.',
        ),
      );
    } else {
      await AESKey(mnemonic);
      Actions.emailVerificationScreen();
    }
  };

  return (
    <SafeAreaView bgNavyTheme>
      <TopBar isLeftButton />
      <View flex={2} paddingLeft={25}>
        <Text ftLightWhite bold fontSize={22} marginBottom={32}>
          Confirm Mnemonic
        </Text>
        <Text ftLightWhite ftSmall>
          Enter the phrases in a correct order for confirmation of the mnemonic.
        </Text>
      </View>
      <View flex={6} justifyContent={'center'}>
        <ViewBorderRadius
          flex={1.3}
          bgLightNavy
          brBlueGray
          width={'88%'}
          marginBottom={10}
          marginLeft={'auto'}
          marginRight={'auto'}>
          <Text
            ftLightWhite
            ftSmall
            paddingTop={20}
            paddingBottom={20}
            paddingLeft={15}
            paddingRight={15}>
            {clickedMnemonic.join(' ')}
          </Text>
        </ViewBorderRadius>
        <View flex={3} marginTop={20}>
          <MnemonicList
            mnemonic={shuffledMnemonic.current}
            isPressable
            setMnemonic={setClickedMnemonic}
            realMnemonic={mnemonic}
          />
        </View>
      </View>
      <View flex={2} justifyContent={'flex-end'}>
        <ButtonRadius
          bgYellowTheme
          width={'88%'}
          paddingTop={10}
          paddingBottom={10}
          marginTop={20}
          marginBottom={20}
          marginLeft={'auto'}
          marginRight={'auto'}
          onPress={onPressNext}>
          <Text ftFontNavy bold fontSize={16}>
            Next
          </Text>
        </ButtonRadius>
      </View>
    </SafeAreaView>
  );
};

export default MnemonicConfirmationScreen;
