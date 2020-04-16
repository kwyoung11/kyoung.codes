import React from 'react';
import Layout from '../../src/components/Layout';
import { BlogPost } from '../../src/components/BlogPost/BlogPost';
import glob from 'glob';
import path from 'path';
import jdown from 'jdown/dist';

const BlogTemplate = (props) => {
  return (
    <Layout config={props.config}>
      <BlogPost post={{}} />
    </Layout>
  );
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

export async function getStaticPaths() {
  const routes = [];
  const blogPosts = await jdown('./content/blog');
  const files = glob.sync('content/blog/*.md');

  // add each blog to the routes obj
  Object.entries(blogPosts).forEach(([filename, fileContent]) => {
    const filen = filename.replace(/([a-z][A-Z])/g, function (g) {
      return g[0] + '-' + g[1].toLowerCase();
    });
  });
  return {
    paths: routes,
    fallback: false,
  };
}

export default BlogTemplate;
