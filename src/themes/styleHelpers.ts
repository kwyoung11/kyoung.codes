import { generateMedia } from 'styled-media-query';
import { css, createGlobalStyle } from 'styled-components';

export const breakpoints = {
  xs: `480px`,
  sm: `540px`,
  md: `768px`,
  lg: `1024px`,
  xl: `1200px`,
};

export const media = generateMedia(breakpoints);

export const responsivePadding = css`
  padding: 0 16px;
  margin: 0;

  ${media.greaterThan('sm')`
    padding: 0 24px;
  `}

  ${media.greaterThan('md')`
    padding: 0 32px;
  `}
`;

export const responsiveMargin = css`
  margin: 0 16px;
  padding: 0;

  ${media.greaterThan('sm')`
    margin: 0 24px;
  `}

  ${media.greaterThan('md')`
    margin: 0 32px;
  `}
`;

export const GlobalStyle = createGlobalStyle`
  body p {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;
  }
  html, body, #__next {
    height: 100%;
  }
  
  a.heading {
    text-decoration: none;
    color: #444;
    border-bottom: 2px solid #eee;
    transition: border-bottom-color 0.5s ease;
    &:hover {
      border-bottom: 2px solid ${(props) => props.theme.colors.primary};
      border-bottom-color: ${(props) => props.theme.colors.secondary};
    }
  }
  
  .heading1 {
    font-size: 3em;
    font-weight: bold;
  }
  
  .heading2 {
    font-size: 2.25em;
    font-weight: bold;
  }
  
  .body1 {
    font-size: 1.25em;
    letter-spacing: 0.3px;
    line-height: 1.82rem;
    -webkit-font-smoothing: antialiased;
    color: #222;
    text-rendering: optimizeLegibility;
  }
  
  .body2 {
    font-size: 1em;
    letter-spacing: 0.3px;
    line-height: 1.42rem;
    -webkit-font-smoothing: antialiased;
    color: #222;
    text-rendering: optimizeLegibility;
  }
  
  .subtitle1 {
    font-size: 0.9em;
    font-style: italic;
  }
  .subtitle2 {
    font-size: 0.8em;
    font-weight: bold;
  }
`;
