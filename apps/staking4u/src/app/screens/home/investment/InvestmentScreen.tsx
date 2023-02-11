import React, { useState } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';
import InvestmentInfoScreen from './InvestmentInfoScreen';
import InvestmentHistoryScreen from './InvestmentHistoryScreen';
import { SafeAreaView, View } from '../../../components/styled/View';
import TabViewBar from '../../../components/bar/TabViewBar';

const InvestmentScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);
  const [tabItems] = useState(['Info.', 'History']);

  // 탭뷰 스크린
  const renderScene = SceneMap({
    first: InvestmentInfoScreen,
    second: InvestmentHistoryScreen,
  });

  return (
    <SafeAreaView bgNavyTheme>
      <View
        flex={1}
        width={'96%'}
        justifyContent={'center'}
        alignSelf={'center'}
      >
        <View height={50} marginTop={10} marginLeft={10}>
          <TabViewBar index={index} tabItems={tabItems} setIndex={setIndex} />
        </View>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          renderTabBar={() => null}
          onIndexChange={setIndex}
          initialLayout={{ width: 10, height: 100 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default InvestmentScreen;
