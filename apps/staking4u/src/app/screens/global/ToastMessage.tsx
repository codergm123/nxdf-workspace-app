import React, { useRef, useEffect } from 'react';
// NPM Module
import Toast from 'react-native-easy-toast';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
// Styled Component
import { ViewAbsolute } from '../../components/styled/View';
// actions
import * as globalActions from '../../store/modules/global/actions';

// *** 토스트 메세지 ***
const ToastMessage = (props) => {
  const dispatch = useDispatch();
  // 토스트 메세지 참조 선언
  const toastRef = useRef(null);
  const toastMessage = useSelector(
    (state: RootStateOrAny) => state.global.toastMessage
  );

  useEffect(() => {
    if (toastMessage) {
      toastRef.current.show(toastMessage);
      dispatch(globalActions.change_toast_message(null));
    }
  }, [toastMessage]);

  return (
    <ViewAbsolute width={'100%'}>
      <Toast
        position={props.position}
        ref={toastRef}
        fadeInDuration={750}
        fadeOutDuration={1000}
      />
    </ViewAbsolute>
  );
};

export default ToastMessage;
