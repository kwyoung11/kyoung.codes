import React from 'react';
import styled from 'styled-components';
import { parseEntry } from '../../src/util/helpers';
import fs from 'fs';
import path from 'path';
import { BlogPostLayout } from '../../src/components/Layout/BlogPost/BlogPostLayout';
import Link from 'next/link';
const cardCurve = require('../../src/assets/images/card-curve.svg');
import { darken } from 'polished';
import { PortfolioThumb } from '../../src/components/Portfolio/PortfolioThumb';

const PortfolioIndex = (props) => {
  const { portfolioEntries: entries } = props;

  return (
    <BlogPostLayout>
      <StyledPortfolioIndex>
        {entries.map((pfe) => (
          <PortfolioCard>
            <Link href="/portfolio/[slug]" as={`/portfolio/${pfe.slug}`}>
              <a>
                <PortfolioThumb pfe={pfe} />
                <Description>
                  <h3 className="title">{pfe.title}</h3>
                </Description>
              </a>
            </Link>
          </PortfolioCard>
        ))}
      </StyledPortfolioIndex>
    </BlogPostLayout>
  );
};

const StyledPortfolioIndex = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 450px);
  grid-template-rows: auto;
  gap: 2.5rem;
  margin: 0 2rem 2rem 2rem;
  justify-content: center;
`;

const Description = styled.div`
  background-image: url(${cardCurve});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100px;
  text-align: center;
  margin-top: -50px;
  padding: 50px 0 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  color: ${(props) => darken(0.4)(props.theme.colors.grey)};
`;

const PortfolioCard = styled.div`
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
    border-bottom: 1px solid #eee;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 0 0;
    position: relative;
    transition: all 0.25s ease-in-out;
    &:hover {
      box-shadow: 3px 3px 15px #aaa;
      transform: scale(1.1);
    }
  }

  .title {
    display: inline;
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.lg};
    margin-bottom: 1rem;
    padding: 0 1rem;
    word-break: break-word;
  }
  svg {
    height: 100%;
    width: 100%;
    scale: 2;
    color: red;
    stroke: red;
  }
  .description {
    background-color: ${(props) => props.theme.colors.black};
    background-image: url(${cardCurve});
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    text-align: center;
    margin-top: -50px;
    padding: 50px 0 50px 0;
    color: red;
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
