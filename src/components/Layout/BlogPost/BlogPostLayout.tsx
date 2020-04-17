import React from 'react';
import styled from 'styled-components';
import { MdArrowBack } from 'react-icons/md';
import { lighten, darken } from 'polished';

export const BlogPostLayout = (props) => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <StyledBlogPostLayout>
      <div>
        <MdArrowBack size={'2em'} className="back" onClick={handleGoBack} />
      </div>
      {props.children}
    </StyledBlogPostLayout>
  );
};

const StyledBlogPostLayout = styled.div`
  display: grid;
  grid-template-columns: 10% 1fr;
  width: 100%;

  & > div {
    justify-self: center;
  }
  .back {
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-top: 3em;
    padding: 0.5em;
    border-radius: 50%;
    color: ${(props) => darken(0.2)(props.theme.colors.grey)};
    background-color: ${(props) => lighten(0.25)(props.theme.colors.grey)};
    &:hover {
      color: ${(props) => darken(0.4)(props.theme.colors.grey)};
    }
  }
`;
