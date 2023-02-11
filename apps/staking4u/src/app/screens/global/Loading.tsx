import React, { useMemo } from 'react';
// NPM Module
import { Actions } from 'react-native-router-flux';
import { useSelector, shallowEqual, RootStateOrAny } from 'react-redux';
// Components
import LoadingSpinner from '../../components/loading/LoadingSpinner';
// utils
import { skipLoadingScreens } from '../../utils/constants';

// 로딩
const Loading = () => {
  const { loading } = useSelector(
    (state: RootStateOrAny) => ({
      loading: state.loading,
    }),
    shallowEqual
  );

  const isLoading = useMemo(() => {
    return (
      // 로딩 중 & 현재 스크린이 스킵 스크린이 아닐 경우
      Object.values(loading).includes(true) &&
      !skipLoadingScreens.includes(Actions.currentScene)
    );
  }, [loading]);

  return isLoading && <LoadingSpinner />;
};

export default Loading;
