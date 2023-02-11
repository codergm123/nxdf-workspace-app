import React, {useState} from 'react';
import {ViewRow, View} from '../../components/styled/View';
import {Text} from '../../components/styled/Text';
import {ButtonRadius} from '../../components/styled/Button';
import {GestureButton} from '../../components/styled/GestureButton';

/*
** props
mnemonic : Array[string]
isPressable : boolean
setMnemonic : setter(function) : 상위 컴퍼넌트(MnemonicConfirmationScreen) 랜더링을 위해서 사용
*/

const MnemonicList = ({mnemonic, isPressable, setMnemonic, realMnemonic}) => {
  const [_clickedMnemonic, _setClickedMnemonic] = useState([]); // 클릭한 니모닉 문구를 담는 배열

  // 개발단계에서의 백도어버튼
  const onPressBackdoor = () => {
    _setClickedMnemonic(realMnemonic.split(' '));
    setMnemonic(realMnemonic.split(' '));
  };

  const onPressToggle = (phrase) => {
    let filteredMnemonic;
    if (_clickedMnemonic.includes(phrase)) {
      filteredMnemonic = _clickedMnemonic.filter(
        (_phrase) => phrase !== _phrase,
      );
    } else {
      filteredMnemonic = [..._clickedMnemonic, phrase];
    }
    _setClickedMnemonic(filteredMnemonic); //Toggle에 따른 UI 변경
    setMnemonic(filteredMnemonic); // 상위 컴퍼넌트 변경
  };

  return (
    <ViewRow flexWrap={'wrap'} justifyContent={'center'}>
      {mnemonic &&
        mnemonic.length > 0 &&
        mnemonic.map((phrase, index) => (
          <ButtonRadius
            {...(isPressable ? {activeOpacity: 0.4} : {activeOpacity: 1})}
            {...(isPressable ? {onPress: () => onPressToggle(phrase)} : null)}
            key={index}
            width={'26%'}
            paddingTop={7}
            paddingBottom={7}
            marginLeft={10}
            marginRight={10}
            marginTop={7}
            marginBottom={7}
            {...(_clickedMnemonic.includes(phrase)
              ? {bgLightWhite: true}
              : {bgLightNavy: true})}>
            <Text
              {...(_clickedMnemonic.includes(phrase)
                ? {ftFontNavy: true}
                : {ftLightWhite: true})}
              fontSize={15}>
              {phrase}
            </Text>
          </ButtonRadius>
        ))}
      {/* 개발 단계에서의 백도어버튼 : 개발 단계 이후 반드시 삭제 필요*/}
      {isPressable ? (
        <GestureButton
          marginRight={250}
          marginTop={50}
          width={100}
          onPress={onPressBackdoor}
          borderRadius={10}
          activeOpacity={1}>
          <Text ftNavyTheme>backdoor</Text>
        </GestureButton>
      ) : null}
    </ViewRow>
  );
};

export default MnemonicList;
