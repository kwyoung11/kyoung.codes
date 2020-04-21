import * as React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import Link from 'next/link';
import styled from 'styled-components';
import { MdImage } from './MdImage';
import { reformatDate } from '../../util/helpers';
import { lighten } from 'polished';

export interface TagProps {
  name: string;
}

export interface PostProps {
  title: string;
  content: string;
  date: string;
  slug: string;
  tags: TagProps[];
  thumbnail: string;
}

interface BlogPostProps {
  post: PostProps;
}

export const Post: React.FC<BlogPostProps> = (props: BlogPostProps) => {
  const { post } = props;

  const tags = () => {
    if (!post.tags) {
      return null;
    }
    return post.tags.map((tag, i) => (
      <Link key={i} href="/tags/[tagname]" as={`/tags/${tag.name}`}>
        <a>
          <i>
            {tag.name}
            {i === post.tags.length - 1 ? `` : <>,&nbsp;</>}
          </i>
        </a>
      </Link>
    ));
  };

  return (
    <BlogWrapper>
      <Hero>{post.thumbnail ? <img src={`${post.thumbnail}`} alt={post.title} /> : null}</Hero>
      <BlogInfo>
        <h1>{post.title}</h1>
        <div className="small">{reformatDate(post.date)}</div>
      </BlogInfo>
      <BlogBody>
        <p>
          <ReactMarkdown
            source={post.content}
            renderers={{ image: MdImage }}
            className="markdown"
            escapeHtml={false}
          />
        </p>
      </BlogBody>
      <BlogFooter>{tags}</BlogFooter>
    </BlogWrapper>
  );
};

const BlogWrapper = styled.article`
  max-width: 812px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Hero = styled.figure`
  max-height: 750px;
  width: 100%;
  margin: 0;
  overflow: hidden;

  img {
    margin-bottom: 50px;
    max-width: 100%;
  }
`;

const BlogInfo = styled.div`
  text-align: center;
  h1 {
    margin-top: 0;
  }
`;

const BlogBody = styled.div`
  padding: 1rem 1.25rem;
  font-size: ${(props) => props.theme.fontSizes.md};

  a {
    padding-bottom: 1.5rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  code {
    border-radius: 5px;
    padding: 3px;
    background-color: ${(props) => lighten(0.25)(props.theme.colors.grey)};
  }

  pre {
    font-size: 0.5em;
    border-radius: 5px;
    padding: 5px;
    background-color: ${(props) => lighten(0.25)(props.theme.colors.grey)};
    overflow: hidden;
    word-break: break-all;
    overflow-x: scroll;
    //border: 1px solid red;
  }
  .markdown {
    img {
      width: 100%;
    }
  }

  iframe {
    display: flex;
    width: 100%;
    margin: 5rem auto;
  }
`;

const BlogFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.25rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  h2 {
    margin-bottom: 0;
  }

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a svg {
    width: 20px;
  }

  div {
    display: flex;
  }

  .tags {
    a {
      display: inline;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
