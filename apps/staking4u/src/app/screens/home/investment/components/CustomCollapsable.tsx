import React, { useState } from 'react';
// NPM Modules
import Collapsible from 'react-native-collapsible';
// Styled Components
import { View, ViewRow } from '../../../../components/styled/View';
import { Text } from '../../../../components/styled/Text';
import { Image } from '../../../../components/styled/Image';
import { GestureButton } from '../../../../components/styled/GestureButton';
// images
import icon_expand_less from '../../../../assets/investment/icon_expand_less.png';

const CustomCollapsable = ({ title, children }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <View>
      <GestureButton onPress={() => setCollapsed(!collapsed)} height={60}>
        <ViewRow
          paddingLeft={15}
          paddingRight={15}
          justifyContent={'space-between'}
          width={'100%'}
        >
          <Text ftWhite bold fontSize={15}>
            {title}
          </Text>
          <Image width={24} height={24} source={icon_expand_less} />
        </ViewRow>
      </GestureButton>
      <Collapsible
        collapsed={collapsed}
        align="center"
        style={{ paddingBottom: 15 }}
      >
        <View>{children}</View>
      </Collapsible>
      <View bgBlueyGray height={1} />
    </View>
  );
};

export default CustomCollapsable;
