import React, {useCallback} from 'react';
import {View, ViewRow} from '../styled/View';
import {Text} from '../styled/Text';
import {Button} from '../styled/Button';

const TabViewBar = (props) => {
  const active = useCallback((index) => index === props.index, [props.index]);

  return (
    <ViewRow justifyContent={'flex-start'} alignItems={'center'}>
      {props.tabItems.map((data, index) => (
        <ViewRow key={index} justifyContent={'center'} alignItems={'center'}>
          <Button
            width={'auto'}
            height={50}
            onPress={() => props.setIndex(index)}>
            <Text
              fontSize={props.ftsize? props.ftsize : 24}
              ftBlueGray={!active(index)}
              ftWhite={active(index)}
              bold={active(index)}>
              {data}
            </Text>
          </Button>
          {index === 0 && (
            <View
              width={3}
              height={18}
              bgBlueGray
              marginRight={10}
              marginLeft={10}
            />
          )}
        </ViewRow>
      ))}
    </ViewRow>
  );
};

export default TabViewBar;
