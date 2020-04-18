import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { lighten } from 'polished';

export const Header = () => (
  <StyledHeader className="header">
    <Link href={'/portfolio'}>
      <a className="heading">Portfolio</a>
    </Link>
    <Link href={'/about'}>
      <a className="heading">About Me</a>
    </Link>
  </StyledHeader>
);

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // border-bottom: 1px solid ${(props) => lighten(0.2)(props.theme.colors.grey)};
  position: relative;

  a {
    margin: 0 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;
