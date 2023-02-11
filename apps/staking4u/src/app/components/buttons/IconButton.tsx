import React from 'react';
// Styled Component
import {Button} from '../styled/Button';
import {GestureButton} from '../styled/GestureButton';
import {Image} from '../styled/Image';
// utils
import {isEmpty} from '../../utils/functions';

// iconWidth: iconWidth props가 존재하지 않으면 width로 적용
// iconHeight: iconHeight props가 존재하지 않으면 width로 적용

const IconButton = (props) => {
  return (
    <>
      {isEmpty(props.isGesture) ? (
        <Button {...props}>
          <Image
            width={props.iconWidth || props.width}
            height={props.iconHeight || props.height}
            source={props.source}
          />
        </Button>
      ) : (
        <GestureButton {...props}>
          <Image
            width={props.iconWidth || props.width}
            height={props.iconHeight || props.height}
            source={props.source}
          />
        </GestureButton>
      )}
    </>
  );
};

export default IconButton;
