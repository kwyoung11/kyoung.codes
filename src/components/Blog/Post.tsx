import * as React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import Link from 'next/link';
import styled from 'styled-components';
import { MdImage } from './MdImage';
import { reformatDate } from '../../util/helpers';

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
      <Hero className="blog_hero">
        {post.thumbnail ? <img src={`${post.thumbnail}`} alt={post.title} /> : null}
      </Hero>
      <BlogInfo className="blog__info">
        <h3 className="heading1">{post.title}</h3>
        <p className="subtitle1">{reformatDate(post.date)}</p>
      </BlogInfo>
      <BlogBody className="blog__body">
        <p className="body1">
          <ReactMarkdown
            source={post.content}
            renderers={{ image: MdImage }}
            className="markdown"
            escapeHtml={false}
          />
        </p>
      </BlogBody>
      <BlogFooter className="blog__footer">{tags}</BlogFooter>
    </BlogWrapper>
  );
};

const BlogWrapper = styled.article`
  padding: 0em 0em 0em 0em;
  .heading1 {
    padding-top: 0;
    margin-top: 0;
  }
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
  padding: 0rem 0rem;
  text-align: center;
  h3 {
    margin-bottom: 10px;
  }
  ul {
    display: flex;
    justify-content: center;
    margin-bottom: 0.25rem;
    a {
      font-size: 0.85em;
      text-transform: uppercase;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const BlogBody = styled.div`
  width: 100%;
  padding: 0 1.25rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 768px;

  a {
    padding-bottom: 1.5rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  h1 h2 h3 h4 h5 h6 p {
    font-weight: normal;
  }

  p {
    color: inherit;
  }

  ul {
    list-style: initial;
  }

  ul ol {
    margin-left: 1.25rem;
    margin-bottom: 1.25rem;
    padding-left: 1.45rem;
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
