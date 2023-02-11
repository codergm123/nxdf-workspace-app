import React, {useState} from 'react';
// Styled Component
import {Button} from '../styled/Button';
import {Text} from '../styled/Text';
// utils
import {isEmpty} from '../../utils/functions';

// *** 하단 바텀 버튼 ***
// textSize : 텍스트 크기
// brColor : 바텀 버튼 색상 - 기본값 : bgTheme

const BottomButton = (props) => {
  const defaultBgColor = !props.disabled
    ? {bgPurple: true}
    : {bgPressedGray: true};
  const textSize = props.textSize || 18;

  const onPressButton = () => {
    if (!isEmpty(props.onPress)) props.onPress();
  };

  return (
    <Button
      {...defaultBgColor}
      width={props.width || '100%'}
      height={props.height || 56}
      position={'absolute'}
      disabled={props.disabled}
      onPress={onPressButton}
      {...props}>
      <Text ftWhite fontSize={textSize}>
        {props.text}
      </Text>
    </Button>
  );
};

export default BottomButton;
