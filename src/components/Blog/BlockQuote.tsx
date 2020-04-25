import React from 'react';
import styled from 'styled-components';

export const BlockQuote = (props) => {
  return <StyledBlockQuote className={props.class} lang={props.lang}></StyledBlockQuote>;
};

const StyledBlockQuote = styled.blockquote``;
