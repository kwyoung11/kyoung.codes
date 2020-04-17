import React from 'react';
import styled from 'styled-components';
import { Footer } from './Footer';
import { lighten } from 'polished';

export const Sidebar: React.FC = (props) => {
  return (
    <StyledSidebar className="sidebar">
      <img src="/img/kevin.png" />
      <div className="blurb">
        <p className="body2">
          Full Stack developer specializing in front-end javascript development. Contributor
          @netlify-cms. UMD CS '16
        </p>
      </div>
      <Footer />
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  padding: 0 1em;
  position: relative;
  // border-right: 1px solid ${(props) => lighten(0.2)(props.theme.colors.grey)};
  img {
    border-radius: 50%;
    max-width: 100%;
    height: 100px;
    align-self: end;
  }

  .blurb {
    align-self: start;
    text-align: center;
    margin: 0.5em 1.5em;
    width: 75%;
  }
  &:after {
    position: absolute;
    background: linear-gradient(180deg, #fff, #e6e6e6 25%, #e6e6e6 75%, #fff);
    content: '';
    width: 0.0625rem;
    height: 80%;
    top: 10%;
    right: 0px;
    bottom: 0;
  }
`;
