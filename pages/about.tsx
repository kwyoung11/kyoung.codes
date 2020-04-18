import React from 'react';
import styled from 'styled-components';
import { BlogPostLayout } from '../src/components/Layout/BlogPost/BlogPostLayout';
import { parseEntry } from '../src/util/helpers';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';

const About = (props) => {
  const { aboutEntries } = props;
  const aboutEntry = aboutEntries[0];

  return (
    <BlogPostLayout>
      <StyledAbout>
        <h3 className="heading1">{aboutEntry.title}</h3>
        <p className="body1">
          <ReactMarkdown source={aboutEntry.content} />
        </p>
      </StyledAbout>
    </BlogPostLayout>
  );
};

const StyledAbout = styled.div`
  max-width: 75%;
  .heading1 {
    padding-top: 0;
    margin-top: 0;
  }
`;

export async function getStaticProps({ params }) {
  const contentDirectory = path.join(process.cwd(), 'content');
  const dataDirectory = path.join(process.cwd(), 'data');

  let aboutEntries = fs.readdirSync(`${contentDirectory}/about`);
  aboutEntries = aboutEntries.map((filename) => {
    const filePath = path.join(`${contentDirectory}/about`, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return parseEntry(filename.split('.')[0], fileContents);
  });

  aboutEntries = aboutEntries.sort((a: any, b: any) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const config = JSON.parse(fs.readFileSync(`${dataDirectory}/config.json`, 'utf8'));

  return {
    props: {
      config: config,
      aboutEntries: aboutEntries,
    },
  };
}

export default About;
