import React from 'react';
import {PieChart} from 'react-native-chart-kit';
import {pieChartData} from '../../utils/dummy';
import {screenWidth} from '../styled/ScreenSize';
import {View} from '../styled/View';
import {Text} from '../styled/Text';

const Pie = ({data}) => {
  const chartConfig = {
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  };
  return (
    <>
      {data.length > 0 ? (
        <PieChart
          data={data}
          width={screenWidth}
          height={200}
          chartConfig={chartConfig}
          accessor={'amount'}
          backgroundColor={'transparent'}
          paddingLeft={'15'}
          center={[0, 0]}
        />
      ) : (
        <View justifyContent={'center'} alignItems={'center'}>
          <Text ftLightGray fontSize={15}>
            No assets invested
          </Text>
        </View>
      )}
    </>
  );
};

export default Pie;
