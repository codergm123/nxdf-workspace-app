import React, { useEffect } from 'react';
// Redux Configure
import { Provider } from 'react-redux';
import configure from './store/configure';
// Internalization Config
import { initLocale } from './config/i18n';
// Global Screens
import ScreenRouter from './screens/global/ScreenRouter';
import ToastMessage from './screens/global/ToastMessage';
import GlobalModal from './screens/global/GlobalModal';
import Loading from './screens/global/Loading';
import AndroidBackHandle from './screens/global/AndroidBackHanlder';
// import { SafeAreaView } from './src/components/styled/View';
import Push from './screens/global/Push';
import SplashScreen from 'react-native-splash-screen';
import { QueryClient, QueryClientProvider } from 'react-query';

const store = configure();

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    initLocale();
  }, []);

  return (
    <Provider store={store}>
       <QueryClientProvider client={queryClient} >
          <ScreenRouter />
          <ToastMessage />
          <GlobalModal />
          <AndroidBackHandle />
          {/* <Push /> */}
            <Loading />
        </QueryClientProvider>
    </Provider>
  );
};

export default App;
