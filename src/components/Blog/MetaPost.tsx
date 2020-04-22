import React from 'react';
import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { IoMdOpen } from 'react-icons/io';

export const MetaPost = (props) => {
  const { post } = props;
  return (
    <StyledMetaPost>
      <div>
        <a href={post.link}>
          View Project <IoMdOpen />
        </a>
      </div>
      <Tags>
        {post.tags.map((p) => (
          <div>{p}</div>
        ))}
      </Tags>
    </StyledMetaPost>
  );
};
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  div {
    display: inline-block;
    border-radius: 5px;
    margin: 5px 10px 5px 0px;
    background-color: ${(props) => lighten(0.26)(props.theme.colors.grey)};
    padding: 5px 5px;
    color: ${darken(0.13)('#4197d4')};
    transition: all 0.25s ease-in-out;
    font-size: ${(props) => props.theme.fontSizes.md};
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;
const StyledMetaPost = styled.div`
  display: flex;
  flex-direction: column;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.colors.secondary};
    margin-bottom: 1rem;
    &:hover {
      text-decoration: underline;
    }
    svg {
      margin-left: 7px;
      margin-top: 2px;
    }
  }
`;
