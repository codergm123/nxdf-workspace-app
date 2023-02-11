import React, {useState} from 'react';
// Components
import IconButton from '../buttons/IconButton';
// Styled Component
import {View, ViewAbsolute} from '../styled/View';
import {Text} from '../styled/Text';
import {NBInputBorder} from '../styled/Input';
// utils
import {isEmpty} from '../../utils/functions';
// images
import icon_eye_blue from '../../assets/register/icon_eye_blue.png';
import icon_eye_grey from '../../assets/register/icon_eye_grey.png';

// 타이틀 포함 인풋
// title : 타이틀
// placeholder : 플레이스홀더 텍스트
// maxLength : 최대 길이
// isBottomLine : 하단 라인 여부
// value : 텍스트 내용
// onChangeText : onChangeText 리턴 함수
// width : 넓이
// height : 높이
// isOnlyNumber : 숫자만 입력 여부
// errorText : 입력 확인 에러 텍스트
// onFocus : 입력 활성 이벤트 헨드링 (함수)
// helperText : 부가 설명

/*
<InputBottomLine
  title={"테스트"}
  placeholder={"서강혁"}
  maxLength={20}
  value={'value'}
  isBottomLine={true} />
*/

const InputBottomLine = (props) => {
  const [isSecureActive, setIsSecureActive] = useState(true);

  const iconSize = 24;
  const defaultMaxLength = props.maxLength || 30;
  const bottomLine = isEmpty(props.isBottomLine) ? 0 : 1;
  const defaultWidth = props.width || '100%';
  const keyboardType = isEmpty(props.isOnlyNumber) ? 'default' : 'numeric';
  const isError = !props.isValid && props.value.length !== 0;
  const isSecure = !isEmpty(props.isSecure);
  const labelMarginBottom = props.labelMarginBottom || 20;

  // 비밀번호 가림 활성 & 비활성
  const isSecureActiveChange = () => {
    setIsSecureActive(!isSecureActive);
  };

  return (
    <View width={defaultWidth} marginBottom={18}>
      {props.title ? (
        <Text ftWhite bold marginBottom={labelMarginBottom}>
          {props.title}
        </Text>
      ) : null}
      <NBInputBorder
        brBlueyGray={!isError}
        brErrorRed={isError}
        borderBottomWidth={bottomLine}
        align={'left'}
        maxLength={defaultMaxLength}
        placeholder={props.placeholder}
        placeholderTextColor={'#9fa6b2'}
        value={props.value}
        secureTextEntry={isSecure && isSecureActive}
        keyboardType={keyboardType}
        borderLeftWidth={'0'}
        borderRightWidth={'0'}
        borderTopWidth={'0'}
        ftWhite
        {...props}
      />
      {isSecure && (
        <ViewAbsolute
          height={'100%'}
          right={4}
          bottom={4}
          justifyContent={'center'}>
          <IconButton
            isFast
            width={iconSize}
            height={iconSize}
            onPress={isSecureActiveChange}
            source={isSecureActive ? icon_eye_grey : icon_eye_blue}
          />
        </ViewAbsolute>
      )}
      {props.helperText && props.value.length === 0 ? (
        <Text ftSmall ftBlueyGray marginTop={4}>
          {props.helperText}
        </Text>
      ) : (
        <Text ftSmall ftErrorRed marginTop={4}>
          {isError && props.errorText}
        </Text>
      )}
    </View>
  );
};
export default InputBottomLine;
