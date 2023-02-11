import React from 'react';
// Components
import {View, ViewAbsolute} from '../../../components/styled/View';
import {Text} from '../../../components/styled/Text';
import {NBInputBorderRadius} from '../../../components/styled/Input';
import * as Common from '../../../components/styled/Common';
import {Image} from '../../../components/styled/Image';
// utils
import {isEmpty} from '../../../utils/functions';
// images
import icon_email from '../../../assets/index/icon_email.png';
import icon_password from '../../../assets/index/icon_password.png';

/* value값의 초기값은 무조건 string 형태일 것 */
/*
IconInputBorderRadius props
value: 입력 값                    (string)
onChange: 입력 값 변경             (function)
placeholder: 인풋 창 placeholder  (string)
isOnlyNumber: 숫자 키패드만 활성     (boolean)
autoFocus: 입력창 자동 활성         (boolean)
secureTextEntry: 비밀번호 입력      (boolean)
maxLength: 최대 입력 길이           (number)
keyboardType: 입력창 키보드 타입     ('default', 'numeric')
typeIcon: 아이콘 타입
 */

const IconInputBorderRadius = (props) => {
  const height = props.height || 50;
  const keyboardType = isEmpty(props.isOnlyNumber) ? 'default' : 'numeric';
  const paddingLeft = props.paddingLeft || 40;
  const paddingRight = props.paddingRight || 10;
  const maxLength = props.maxLength || 30;
  const placeholderTextColor =
    props.placeholderTextColor || Common.colors.LightGray;

  return (
    <View {...props}>
      {/* 입력창 라벨 */}
      {props.label && (
        <Text marginBottom={5} marginLeft={5}>
          {props.label}
        </Text>
      )}
      {/* 입력창 */}
      <View height={height}>
        <NBInputBorderRadius
          maxLength={maxLength}
          paddingLeft={paddingLeft}
          paddingRight={paddingRight}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
          secureTextEntry={props.isSecure}
          {...props}
        />
        <ViewAbsolute left={10} justifyContent={'center'} height={'100%'}>
          <Image
            width={24}
            height={24}
            source={props.iconType === 'email' ? icon_email : icon_password}
          />
        </ViewAbsolute>
      </View>
    </View>
  );
};

export default IconInputBorderRadius;
