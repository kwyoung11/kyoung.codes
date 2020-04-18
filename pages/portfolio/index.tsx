import React from 'react';
import styled from 'styled-components';
import { parseEntry } from '../../src/util/helpers';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import { BlogPostLayout } from '../../src/components/Layout/BlogPost/BlogPostLayout';
import Link from 'next/link';

const PortfolioIndex = (props) => {
  return (
    <BlogPostLayout>
      <StyledPortfolioIndex>
        {props.portfolioEntries.map((pf) => (
          <PortfolioCard>
            <Link href="/portfolio/[slug]" as={`/portfolio/${pf.slug}`}>
              <a className="heading title">{pf.title}</a>
            </Link>
            <img src={pf.thumbnail} />
            <p className="body1">
              <ReactMarkdown source={pf.description} />
            </p>
          </PortfolioCard>
        ))}
      </StyledPortfolioIndex>
    </BlogPostLayout>
  );
};

const StyledPortfolioIndex = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  gap: 1.5rem;
  margin: 0 0 2rem 0;
`;
const PortfolioCard = styled.div`
  border: 1px solid ${(props) => props.theme.colors.grey};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  padding: 2rem;
  img {
    max-width: 100%;
  }
  .title {
    display: inline;
    text-align: center;
    font-size: 3em;
    margin-bottom: 1rem;
  }
  p {
    word-break: break-word;
  }
`;

export async function getStaticProps({ params }) {
  const contentDirectory = path.join(process.cwd(), 'content');
  const dataDirectory = path.join(process.cwd(), 'data');

  let portfolioEntries = fs.readdirSync(`${contentDirectory}/portfolio`);
  portfolioEntries = portfolioEntries.map((filename) => {
    const filePath = path.join(`${contentDirectory}/portfolio`, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return parseEntry(filename.split('.')[0], fileContents);
  });

  portfolioEntries = portfolioEntries.sort((a: any, b: any) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const config = JSON.parse(fs.readFileSync(`${dataDirectory}/config.json`, 'utf8'));

  return {
    props: {
      config: config,
      portfolioEntries: portfolioEntries,
    },
  };
}

export default PortfolioIndex;
