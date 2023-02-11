import React from 'react';
// NPM Module
import Spinner from 'react-native-loading-spinner-overlay';

// color: 스피너 색상
// animation: none, slide, fade
// size: 스피너 크기 (small, normal, large)
// textContent: 스피너 아래 텍스트
// textStyle: 스피너 아래 텍스트 스타일
// visiable: 스피너 보임

const LoadingSpinner = (props) => {
  const color = props.color || 'white';
  const animation = props.animation || 'none';
  const size = props.size || 'large';
  const textContent = props.textContent || '';
  const textStyle = props.textStyle || {};
  const visible = props.visible || true;

  return (
    <Spinner
      color={color}
      animation={animation}
      size={size}
      textContent={textContent}
      textStyle={textStyle}
      visible={visible}
    />
  );
};

export default LoadingSpinner;
