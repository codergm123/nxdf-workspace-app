import React from 'react';
import Line from '../../line/Line';
import { View, ViewRow } from '../../styled/View';
import { GestureButton } from '../../styled/GestureButton';
import { Text } from '../../styled/Text';
import { Image } from '../../styled/Image';
import icon_next from '../../../assets/wallet/icon_next.png';

const Nft = (props) => {
  return (
    <View width={'50%'}>
      <Line width={'100%'} height={1} />
      <GestureButton onPress={props.onPress}>
        <View
          width={'94%'}
          height={180}
          justifyContent={'center'}
          alignItems={'center'}
          
        >
                  <View
                      width={'100%'}
                height={'80%'}
                  bgLightGray
                  >
                          
            </View>
            <View width={'100%'}
                      height={'20%'}
                    bgBlack
                  >
                      <Text ftWhite>{props.name}</Text>
                      <Text ftLightGray>{props.name}</Text>
            </View>
        </View>
      </GestureButton>
      <View bgDarkGray height={1} />
    </View>
  );
};

export default Nft;
