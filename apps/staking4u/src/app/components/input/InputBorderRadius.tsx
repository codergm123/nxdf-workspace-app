import React from 'react';
// Styled Component
import { View } from '../styled/View';
import { Text } from '../styled/Text';
import { NBInputBorderRadius } from '../styled/Input';
import * as Common from '../styled/Common';
// utils
import { isEmpty } from '../../utils/functions';

/* value값의 초기값은 무조건 string 형태일 것 */
/*
InputBorderRadius props
value: 입력 값                    (string)
onChange: 입력 값 변경             (function)
placeholder: 인풋 창 placeholder  (string)
isOnlyNumber: 숫자 키패드만 활성     (boolean)
autoFocus: 입력창 자동 활성         (boolean)
secureTextEntry: 비밀번호 입력      (boolean)
maxLength: 최대 입력 길이           (number)
keyboardType: 입력창 키보드 타입     ('default', 'numeric')
 */

const InputBorderRadius = (props) => {
  const height = props.height || 50;
  const keyboardType = isEmpty(props.isOnlyNumber) ? 'default' : 'numeric';
  const paddingLeft = props.paddingLeft || 10;
  const paddingRight = props.paddingRight || 10;
  const maxLength = props.maxLength || 50;

  return (
    <View>
      {props.label && (
        <Text ftSmall marginBottom={8} paddingLeft={25} {...props.labelColor}>
          {props.label}
        </Text>
      )}
      <View height={height}>
        <NBInputBorderRadius
          placeholderTextColor={Common.colors.BlueGray}
          keyboardType={keyboardType}
          maxLength={maxLength}
          paddingLeft={paddingLeft}
          paddingRight={paddingRight}
          {...props}
        />
      </View>
    </View>
  );
};

export default InputBorderRadius;
