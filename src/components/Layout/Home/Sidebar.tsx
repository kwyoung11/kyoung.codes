import React from 'react';
import styled from 'styled-components';
import { SidebarLinks } from './SidebarLinks';
import { media } from '../../../themes/styleHelpers';

export const Sidebar: React.FC = () => (
  <StyledSidebar className="sidebar">
    <img className="photo" src="/img/kevin.png" />
    <p className="description body2">
      I build great experiences. Contributor @netlify-cms. UMD CS '16
    </p>
    <SidebarLinks />
  </StyledSidebar>
);

const StyledSidebar = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'photo' 'description';
  align-items: center;
  justify-items: center;
  padding: 1rem 1em;
  position: relative;

  .photo {
    grid-area: photo;
    border-radius: 50%;
    height: 100px;
  }
  .description {
    grid-area: description;
    text-align: center;
    margin: 1em 1.5em;
    color: #454545;
    font-size: 1.15em;
    line-height: 1.45em;
    letter-spacing: 0.2px;
    width: 75%;
  }
  .links {
    grid-area: links;
    display: none;
  }

  &:after {
    position: absolute;
    background: linear-gradient(90deg, #fff, #e6e6e6 25%, #e6e6e6 75%, #fff);
    content: '';
    width: 80%;
    height: 0.0625rem;
    top: 100%;
    left: 10%;
    bottom: 0;
  }

  ${media.greaterThan('sm')`
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'photo description';
  `};

  ${media.greaterThan('md')`
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      'photo'
      'description'
      'links';
    
    .photo {
        align-self: end;
    }
    .description {
        align-self: start;
    }
    .links {
        display: flex;
    }
    
    &:after {
      background: linear-gradient(180deg, #fff, #e6e6e6 25%, #e6e6e6 75%, #fff);
      width: 0.0625rem;
      height: 80%;
      top: 10%;
      left: 100%;
    }
  `};
`;
