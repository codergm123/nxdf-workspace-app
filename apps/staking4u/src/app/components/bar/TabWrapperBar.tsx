import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../styled/Common';

const Container = styled.View`
  width: 42;
  height: 50;
  justify-content: center;
  align-items: center;
  border-radius: 20;
  background-color: ${(props) =>
    props.focused ? colors.YellowTheme : 'transparent'};
`;

const TabWrapperBar = ({focused, children}) => {
  return <Container focused={focused}>{children}</Container>;
};

export default TabWrapperBar;
