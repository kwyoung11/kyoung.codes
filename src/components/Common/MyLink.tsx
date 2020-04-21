import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

interface MyLinkProps {
  className?: any;
  href?: string;
  noUnderline?: boolean;
}

export const MyLink: React.FC<MyLinkProps> = (props) => {
  console.log('MyLink', props);
  return <StyledMyLink {...props}>{props.children}</StyledMyLink>;
};

const StyledMyLink = styled.a<MyLinkProps>`
  text-decoration: none;
  color: #444;
  border-bottom: ${(props) => (props.noUnderline ? 'none' : '2px solid #eee')};
  transition: border-bottom-color 0.5s ease;
  &:hover {
    cursor: pointer;
    border-bottom: ${(props) =>
      props.noUnderline ? 'none' : `2px solid ${props.theme.colors.primary}`};
    border-bottom-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => (props.noUnderline ? props.theme.colors.secondary : 'inherit')};
  }
`;
