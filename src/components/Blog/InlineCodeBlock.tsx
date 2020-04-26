import React from 'react';
import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const InlineCodeBlock = (props) => {
  return <StyledInlineCodeBlock>{props.children}</StyledInlineCodeBlock>;
};

const StyledInlineCodeBlock = styled.span`
  padding: 3px;
  border-radius: 5px;
  background-color: ${(props) => darken(0.05)(props.theme.colors.lightGrey)};
`;
