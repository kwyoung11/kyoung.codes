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
  padding: 2rem 0rem;

  a {
    font-size: ${(props) => props.theme.fontSizes.sm};
    margin-right: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  ${media.greaterThan('md')`
    justify-content: start;
    padding: 2rem 5rem;
  `};
`;
