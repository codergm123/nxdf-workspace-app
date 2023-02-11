import React from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';

const keyboardDismiss = (WrappedComponent) => {
  return (props) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <WrappedComponent {...props} />
    </TouchableWithoutFeedback>
  );
};

export default keyboardDismiss;
