import React from 'react';
import {View} from '../styled/View';

// 라인 컴포넌트
const Line = (props) => {
  const lineColor = props.color || {bgLineNavy: true};

  return (
    <>
      <View
        width={props.width || '100%'}
        height={props.height || 0.5}
        {...lineColor}
        marginTop={props.marginTop || 0}
        marginBottom={props.marginBottom || 0}
        alignSelf={'center'}
      />
    </>
  );
};

export default Line;
