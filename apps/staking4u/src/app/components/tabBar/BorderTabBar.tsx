import React, { useCallback } from 'react';
// Styled Components
import { ViewRow } from '../styled/View';
import { Text } from '../styled/Text';
import { ButtonEdgeRadius } from '../styled/Button';
// NPM Module

const BorderTabBar = (props) => {
  const active = useCallback((index) => index === props.index, [props.index]);

  return (
    <ViewRow>
      {props.tabItems.map((data, index) => (
        <ButtonEdgeRadius
          brWhite
          borderTopLeftRadius={!index && 5}
          borderBottomLeftRadius={!index && 5}
          borderTopRightRadius={props.tabItems.length - 1 === index && 5}
          borderBottomRightRadius={props.tabItems.length - 1 === index && 5}
          key={index}
          width={`${100 / props.tabItems.length}%`}
          height={50}
          bgWhite={active(index)}
          justifyContent={'center'}
          onPress={() => props.setIndex(index)}
        >
          <Text bold ftBlack={active(index)} ftWhite={!active(index)}>
            {data}
          </Text>
        </ButtonEdgeRadius>
      ))}
    </ViewRow>
  );
};

export default BorderTabBar;
