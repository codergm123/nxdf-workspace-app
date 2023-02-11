import React from 'react';
import { View, ViewAbsolute } from '../styled/View';
import { NBInputBorderRadius } from '../styled/Input';
import { colors } from '../styled/Common';

const InputBorderWith = (props) => {
  return (
    <View
      width={props.width || '100%'}
      height={props.height || 50}
      alignSelf={'center'}
    >
      <NBInputBorderRadius
        value={props.value}
        placeholderTextColor={colors.BlueGray}
        placeholder={props.placeholder}
        keyboardType={props.isOnlyNumber ? 'numeric' : 'default'}
        maxLength={props.maxLength || 50}
        paddingLeft={props.paddingRight || 15}
        paddingRight={props.paddingLeft || 80}
        borderColor={props.borderColor}
        brBlueGray
        ftWhite
        onChangeText={props.onChangeText}
      />
      {props.children && (
        <ViewAbsolute
          width={70}
          height={'100%'}
          top={0}
          right={0}
          justifyContent={'center'}
          alignItems={'center'}
        >
          {props.children}
        </ViewAbsolute>
      )}
    </View>
  );
};

export default InputBorderWith;
