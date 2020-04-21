import React from 'react';
import styled from 'styled-components';
import { MdArrowBack } from 'react-icons/md';
import { lighten, darken } from 'polished';
import { media } from '../../../themes/styleHelpers';

export const BlogPostLayout = (props) => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <StyledBlogPostLayout>
      <BackIcon>
        <MdArrowBack size={'2em'} className="back" onClick={handleGoBack} />
      </BackIcon>
      <Content>{props.children}</Content>
    </StyledBlogPostLayout>
  );
};

const StyledBlogPostLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  ${media.greaterThan('sm')`
    grid-template-columns: 10% 1fr;
  `};
`;

const BackIcon = styled.div`
  justify-self: center;
  margin-top: 1rem;

  .back {
    font-size: 0.6em;
    display: none;
    cursor: pointer;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 50%;
    color: ${(props) => darken(0.2)(props.theme.colors.grey)};
    background-color: ${(props) => lighten(0.25)(props.theme.colors.grey)};
    &:hover {
      color: ${(props) => darken(0.4)(props.theme.colors.grey)};
    }
  }

  ${media.greaterThan('sm')`
    margin-top: 3rem;
    .back {
        display: flex;
    }
  `};
`;

const Content = styled.div`
  margin-top: 1rem;
  ${media.greaterThan('sm')`
    margin-top: 3rem;
  `};
`;
