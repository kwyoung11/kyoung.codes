import React from 'react';
import Layout from '../src/components/Layout/Home/HomeLayout';
import path from 'path';
import fs from 'fs';
import { parseEntry, reformatDate } from '../src/util/helpers';
import Link from 'next/link';
import styled from 'styled-components';

const Home = (props) => {
  const { config } = props;

  return (
    <Layout config={config}>
      <Blog>
        {props.posts.map((post, index) => (
          <div key={index}>
            <div className="date">{reformatDate(post.date)}</div>
            <Link href={'/blog/[slug]'} as={`/blog/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </div>
        ))}
      </Blog>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const contentDirectory = path.join(process.cwd(), 'content');
  const dataDirectory = path.join(process.cwd(), 'data');

  let blogPosts = fs.readdirSync(`${contentDirectory}/blog`);
  blogPosts = blogPosts.map((filename) => {
    const filePath = path.join(`${contentDirectory}/blog`, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return parseEntry(filename.split('.')[0], fileContents);
  });

  blogPosts = blogPosts.sort((a: any, b: any) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const config = JSON.parse(fs.readFileSync(`${dataDirectory}/config.json`, 'utf8'));

  return {
    props: {
      config: config,
      posts: blogPosts,
    },
  };
}

const Blog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5em;
  .date {
    color: ${(props) => props.theme.colors.grey};
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 0.8em;
  }
  a {
    text-decoration: none;
    color: #454545;
    display: inline-block;
    margin-bottom: 45px;
    width: auto;
    font-size: 2em;
    letter-spacing: 0.75px;
  }
`;

// @ts-ignore
export default Home;
