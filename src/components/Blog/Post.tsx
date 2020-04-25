import * as React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import Link from 'next/link';
import styled from 'styled-components';
import { MdImage } from './MdImage';
import { assetPath, reformatDate } from '../../util/helpers';
import { CodeBlock } from './CodeBlock';
import { MetaPost } from './MetaPost';
import { Picture } from '../Picture';
import { BlockQuote } from './BlockQuote';

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
  description?: string;
}

interface BlogPostProps {
  post: PostProps;
}

export const Post: React.FC<BlogPostProps> = (props: BlogPostProps) => {
  const { post } = props;
  const imagePath = assetPath(post.thumbnail);

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
      <Hero>
        {post.thumbnail ? (
          <Picture
            imagePath={require(`../../assets/images${imagePath}?trace`)}
            webPImagePath={require(`../../assets/images${imagePath}?webp`)}
            alt={post.title}
          />
        ) : null}
      </Hero>
      <BlogInfo>
        <Empty></Empty>
        <div>
          <h1>{post.title}</h1>
          <div className="small">{reformatDate(post.date)}</div>
        </div>
      </BlogInfo>
      <article>
        <MetaPost post={post} />
        <div>
          <BlogBody>
            {post.description ? (
              <ReactMarkdown
                source={post.description}
                renderers={{ image: MdImage, code: CodeBlock }}
                className="markdown"
                escapeHtml={false}
              />
            ) : null}
            <p>
              <ReactMarkdown
                source={post.content}
                renderers={{ image: MdImage, code: CodeBlock }}
                className="markdown"
                escapeHtml={false}
              />
            </p>
          </BlogBody>
        </div>
      </article>
      <BlogFooter>{tags}</BlogFooter>
    </BlogWrapper>
  );
};

const BlogWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;

  article {
    display: grid;
    grid-template-columns: 200px 1fr;
    width: 100%;
  }
`;

const Hero = styled.div`
  margin-bottom: 3rem;
`;

const Empty = styled.div`
  flex: 0 1 200px;
`;

const BlogInfo = styled.div`
  display: flex;
  text-align: center;
  margin-bottom: 2rem;
  & > div:nth-child(2) {
    flex: 1 1 auto;
  }
  h1 {
    margin-top: 0;
  }
`;

const BlogBody = styled.div`
  padding: 0rem 1.25rem 1rem 1.25rem;
  font-size: ${(props) => props.theme.fontSizes.md};

  a {
    padding-bottom: 1.5rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  p:first-child {
    margin-top: 0;
  }

  .markdown {
    img {
      width: 100%;
    }
    video {
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
