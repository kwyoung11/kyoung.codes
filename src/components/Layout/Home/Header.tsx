import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { lighten } from 'polished';

export const Header = (props) => {
  return (
    <StyledHeader className="header">
      <Link href={'/portfolio'}>
        <a className="heading">Portfolio</a>
      </Link>
      <Link href={'/about'}>
        <a className="heading">About Me</a>
      </Link>
    </StyledHeader>
  );
};

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
  //&:after {
  //  background: linear-gradient(0deg, #e6e6e6 0, #e6e6e6 48%, #fff);
  //  position: absolute;
  //  content: '';
  //  width: 75%;
  //  height: 0.0625rem;
  //  top: 100%;
  //  left: 12.5%;
  //  bottom: 0;
  //}
`;
