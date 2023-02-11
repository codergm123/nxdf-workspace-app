import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

const KeyboardAvoid = ({children}) => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      keyboardVerticalOffset={30}
      behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoid;
