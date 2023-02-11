import React from 'react';
// Components
import {View} from '../styled/View';
import {Image} from '../styled/Image';
import {Button} from '../styled/Button';
// images
import icon_checked from '../../assets/index/icon_checkbox.png';
import icon_unChecked from '../../assets/index/icon_blankbox.png';
// utils
import {isEmpty} from '../../utils/functions';

const CheckBox = (props) => {
  const onPress = () => {
    if (!isEmpty(props.onPress)) props.onPress(!props.checked);
  };
  return (
    <View>
      <Button onPress={onPress} width={'auto'}>
        <Image
          width={24}
          height={24}
          source={props.checked ? icon_checked : icon_unChecked}
        />
      </Button>
    </View>
  );
};

export default CheckBox;
