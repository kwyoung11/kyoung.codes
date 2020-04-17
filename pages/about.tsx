import React from 'react';
import styled from 'styled-components';
import { BlogPostLayout } from '../src/components/Layout/BlogPost/BlogPostLayout';

const About = (props) => {
  return (
    <BlogPostLayout>
      <StyledAbout>
        <p className="body1">
          Ever since 2009 I've been building various websites and learning how HTML/CSS and PHP
          work. In college, I built activeterps.com, a social fitness app for college students,
          using Ruby on Rails. After graduating in 2012 with a degree in Kinesiology, I had taken
          three online CS MOOC's (Stanford CS150X, HarvardCS and BerkeleyCS) before I decided I may
          as well scratch my itch and go back to UMD to get a CS degree. I learned a ton, attended
          hackathons, worked for the Maryland Institute of Advanced Computer Studies as web
          developer, built some really cool passion projects (here and here). After college, I
          worked at Perfect Sense, then founded Strengthify. I now do freelance consulting work and
          contribute to OSS projects (Netlify CMS, next-netlify-cms-starter) in my spare time.
        </p>
      </StyledAbout>
    </BlogPostLayout>
  );
};

const StyledAbout = styled.div`
  margin-top: 100px;
  max-width: 75%;
`;

export default About;
