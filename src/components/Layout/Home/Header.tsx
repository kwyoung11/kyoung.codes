import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { media } from '../../../themes/styleHelpers';

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

const StyledHeader = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem 0;

  // ${media.greaterThan('md')`
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   position: relative;
  // `};

  a {
    margin: 0 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;
