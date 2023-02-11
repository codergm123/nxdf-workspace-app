import React from 'react';
// Styled Component
import {View, ViewAbsolute} from '../styled/View';
import {Image} from '../styled/Image';
import {NBInputBorder} from '../styled/Input';
// utils
import {isEmpty} from '../../utils/functions';
// images
import icon_search_grey from '../../assets/main/icon_search_grey.png';

const InputSearchBottom = (props) => {
  const iconSize = 24;
  const maxLength = props.maxLength || 30;
  const borderBottomWidth = isEmpty(props.isBottomLine) ? 0 : 1;
  const width = props.width || '100%';
  const keyboardType = isEmpty(props.isOnlyNumber) ? 'default' : 'numeric';

  return (
    <View width={width} marginBottom={18}>
      <NBInputBorder
        brBlueyGray
        borderBottomWidth={borderBottomWidth}
        maxLength={maxLength}
        placeholder={props.placeholder}
        placeholderTextColor={'#9fa6b2'}
        value={props.value}
        keyboardType={keyboardType}
        borderLeftWidth={'0'}
        borderRightWidth={'0'}
        borderTopWidth={'0'}
        ftWhite
        {...props}
      />
      <ViewAbsolute height={'100%'} right={10} justifyContent={'center'}>
        <Image width={iconSize} height={iconSize} source={icon_search_grey} />
      </ViewAbsolute>
    </View>
  );
};
export default InputSearchBottom;
