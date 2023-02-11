import React, { useState } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';
import { SafeAreaView, View } from '../../../components/styled/View';
import TabViewBar from '../../../components/bar/TabViewBar';
import FlexibleScreen from './FlexibleScreen';
import LiquidityScreen from './LiquidityScreen';

const MainScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);
  const [tabItems] = useState(['Staking', 'Liquidity']);

  // 탭뷰 스크린
  const renderScene = SceneMap({
    first: FlexibleScreen,
    second: LiquidityScreen,
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

export default MainScreen;
