import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { media } from '../../../themes/styleHelpers';
import { MyLink } from '../../Common/MyLink';

export const Header = () => (
  <StyledHeader className="header">
    <Link href={'/portfolio'}>
      <MyLink className="heading">Portfolio</MyLink>
    </Link>
    <Link href={'/about'}>
      <MyLink className="heading">About Me</MyLink>
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
