import React from 'react';
import path from 'path';
import jdown from 'jdown/dist';
import { BlogPostLayout } from '../../src/components/Layout/BlogPost/BlogPostLayout';
import { parseEntry } from '../../src/util/helpers';
import fs from 'fs';

const PortfolioTemplate = (props) => {
  return (
    <BlogPostLayout config={props.config}>
      <div>Hello, world!</div>
    </BlogPostLayout>
  );
};

export async function getStaticProps({ params }) {
  console.log('getStaticProps', params);
  const contentDirectory = path.join(process.cwd(), 'content');
  const dataDirectory = path.join(process.cwd(), 'data');
  const config = JSON.parse(fs.readFileSync(`${dataDirectory}/config.json`, 'utf8'));
  const content = fs.readFileSync(
    `${contentDirectory}/portfolio/${params.portfolioSlug}.md`,
    'utf8',
  );
  const contentObj = parseEntry(params.portfolioSlug, content);

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
    routes.push({ params: { portfolioSlug: filen } });
  });
  console.log('ROUTES', routes);
  return {
    paths: routes,
    fallback: false,
  };
}

export default PortfolioTemplate;
