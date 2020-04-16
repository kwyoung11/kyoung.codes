import React from 'react';
import Layout from '../src/components/Layout';
import { BlogPost } from '../src/components/BlogPost/BlogPost';
import path from 'path';
import glob from 'glob';

const Home = (props) => {
  const { config } = props;

  return <Layout config={props.config}></Layout>;
};

export async function getStaticProps({ params }) {
  const contentDirectory = path.join(process.cwd(), 'content');
  const dataDirectory = path.join(process.cwd(), 'data');

  const files = glob.sync('content/blog/*.md');
  const contentMatter = {};

  return {
    props: {
      config: {},
      ...contentMatter,
    },
  };
}

// @ts-ignore
export default Home;
