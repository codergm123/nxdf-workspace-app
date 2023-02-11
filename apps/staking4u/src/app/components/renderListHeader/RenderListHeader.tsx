import React from 'react';
import { Image } from '../styled/Image';
import { Text } from '../styled/Text';
import { View, ViewRow } from '../styled/View';
import iconDownGray from '../../../assets/main/icon_down_gray.png';


const RenderListHeader = (fValue,sValue,tValue) => {
  return (
      <View height={50}>
        <ViewRow flex={1} justifyContent={'space-between'}>
          <ViewRow flex={1}
            justifyContent={'flex-end'}
            alignItems={'center'}
          paddingRight={70}
          paddingLeft={20}
        >
            <Text fontSize={13} ftBlueGray bold>
              {fValue}
            </Text>
            <Image source={iconDownGray} width={10} height={8} marginLeft={5} marginTop={5} />
          </ViewRow>
          <ViewRow
            flex={1}
            justifyContent={'flex-end'}
            alignItems={'center'}
            paddingRight={20}
          >
            <Image source={iconDownGray} width={10} height={8} marginRight={5} marginTop={5}/>
            <Text fontSize={13} ftBlueGray bold>
              {sValue}
            </Text>
          </ViewRow>
          <ViewRow
            flex={2}
            justifyContent={'flex-end'}
            alignItems={'center'}
            paddingRight={20}
          >
            <Image source={iconDownGray} width={10} height={8} marginRight={5} marginTop={5}/>
            <Text fontSize={13} ftBlueGray bold>
              {tValue}
            </Text>
          </ViewRow>
        </ViewRow>
      </View >

    );
};
  


export default RenderListHeader;