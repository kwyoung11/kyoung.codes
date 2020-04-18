import React from 'react';
import path from 'path';
import jdown from 'jdown/dist';
import { BlogPostLayout } from '../../src/components/Layout/BlogPost/BlogPostLayout';
import { parseEntry } from '../../src/util/helpers';
import fs from 'fs';
import { Post } from '../../src/components/Blog/Post';

const PortfolioTemplate = (props) => {
  const { config, post } = props;

  return (
    <BlogPostLayout config={config}>
      <Post post={post} />
    </BlogPostLayout>
  );
};

export async function getStaticProps({ params }) {
  const contentDirectory = path.join(process.cwd(), 'content');
  const dataDirectory = path.join(process.cwd(), 'data');
  const config = JSON.parse(fs.readFileSync(`${dataDirectory}/config.json`, 'utf8'));
  const content = fs.readFileSync(`${contentDirectory}/portfolio/${params.slug}.md`, 'utf8');
  const contentObj = parseEntry(params.slug, content);

  return {
    props: {
      config: config,
      post: contentObj,
    },
  };
}

export async function getStaticPaths() {
  const routes = [];
  const portfolioPosts = await jdown('./content/portfolio');

  // add each blog to the routes obj
  Object.entries(portfolioPosts).forEach(([filename, fileContent]) => {
    const filen = filename.replace(/([a-z][A-Z])/g, function (g) {
      return g[0] + '-' + g[1].toLowerCase();
    });
    routes.push({ params: { slug: filen } });
  });

  return {
    paths: routes,
    fallback: false,
  };
}

export default PortfolioTemplate;
