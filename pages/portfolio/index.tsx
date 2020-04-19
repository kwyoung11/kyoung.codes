import React from 'react';
import styled from 'styled-components';
import { parseEntry } from '../../src/util/helpers';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import { BlogPostLayout } from '../../src/components/Layout/BlogPost/BlogPostLayout';
import Link from 'next/link';
import { media } from '../../src/themes/styleHelpers';

const PortfolioIndex = (props) => {
  const { portfolioEntries: entries } = props;

  return (
    <BlogPostLayout>
      <StyledPortfolioIndex>
        {entries.map((pfe) => (
          <PortfolioCard>
            <Link href="/portfolio/[slug]" as={`/portfolio/${pfe.slug}`}>
              <a className="heading title">{pfe.title}</a>
            </Link>
            <img src={pfe.thumbnail} />
            <p className="body1">
              <ReactMarkdown source={pfe.description} />
            </p>
          </PortfolioCard>
        ))}
      </StyledPortfolioIndex>
    </BlogPostLayout>
  );
};

const StyledPortfolioIndex = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 1.5rem;
  margin: 0 2rem 2rem 2rem;

  ${media.greaterThan('sm')`
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  `};
`;
const PortfolioCard = styled.div`
  border: 1px solid ${(props) => props.theme.colors.grey};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  img {
    max-width: 100%;
    object-fit: contain;
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
