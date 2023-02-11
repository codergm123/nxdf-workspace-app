import React, {useCallback} from 'react';
import {ViewRow} from '../styled/View';
import {Text} from '../styled/Text';
import {Button} from '../styled/Button';

const TabBar = (props) => {
  const active = useCallback((index) => index === props.index, [props.index]);

  return (
    <ViewRow>
      {props.tabItems.map((data, index) => (
        <Button
          key={index}
          width={'auto'}
          height={50}
          marginRight={15}
          justifyContent={'center'}
          onPress={() => props.setIndex(index)}>
          <Text
            fontSize={24}
            ftBlueyGray={!active(index)}
            ftWhite={active(index)}
            bold={active(index)}>
            {data}
          </Text>
        </Button>
      ))}
    </ViewRow>
  );
};

export default TabBar;
