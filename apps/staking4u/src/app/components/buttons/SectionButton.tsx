import React from 'react';
import {Button} from '../styled/Button';
import {Text} from '../styled/Text';

const SettingButton = (props) => {
  const onPressClick = () => {
    if (props.isButton) {
      props.onPress();
    }
  };
  return (
    <Button
      {...(!props.isButton ? {disabled: true} : {disabled: false})}
      justifyContent={'flex-start'}
      onPress={onPressClick}
      paddingLeft={20}
      paddingTop={20}
      paddingBottom={20}
      width={'100%'}
      alignItems={'center'}>
      <Text fontSize={15} ftWhite>
        {props.text}
      </Text>
    </Button>
  );
};

export default SettingButton;
