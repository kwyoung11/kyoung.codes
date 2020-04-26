import React from 'react';
import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { IoMdOpen } from 'react-icons/io';
import { media } from '../../themes/styleHelpers';

export const MetaPost = (props) => {
  const { post } = props;

  const Link = () => {
    if (post.link) {
      return (
        <StyledLink>
          <a href={post.link}>
            <span>View Project</span> <IoMdOpen />
          </a>
        </StyledLink>
      );
    } else return null;
  };

  const Tags = () => {
    if (post.tags) {
      return (
        <StyledTags>
          {post.tags.map((p) => (
            <div>{p}</div>
          ))}
        </StyledTags>
      );
    } else return null;
  };

  if (!post.tags && !post.link) {
    return null;
  }

  return (
    <StyledMetaPost className="blog-meta">
      <Link />
      <Tags />
    </StyledMetaPost>
  );
};

const StyledLink = styled.div`
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${(props) => props.theme.colors.secondary};
    margin-bottom: 1rem;
    width: auto;
    &:hover {
      text-decoration: underline;
    }
    svg {
      margin-left: 7px;
      margin-top: 2px;
    }
  }
  ${media.lessThan('lg')`
      text-align: center;
  `};
`;

const StyledTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${media.lessThan('lg')`
      justify-content: center;
  `};
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
`;
