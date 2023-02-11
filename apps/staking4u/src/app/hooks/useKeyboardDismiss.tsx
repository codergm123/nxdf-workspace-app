import {Keyboard} from 'react-native';

const useKeyboardDismiss = () => {
  const onDismiss = () => Keyboard.dismiss();

  return onDismiss;
};

export default useKeyboardDismiss;
