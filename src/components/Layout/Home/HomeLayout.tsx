import Meta from './Meta';
import React from 'react';
import styled from 'styled-components';
import { Sidebar } from './Sidebar';
import { LayoutProps } from '../../../types';
import { Header } from './Header';
import { media } from '../../../themes/styleHelpers';

const Layout: React.FC<LayoutProps> = (props) => {
  const { config } = props;

  return (
    <StyledLayout className="layout">
      <Meta config={config} />
      <Header />
      <Sidebar />
      <main className="content">{props.children}</main>
    </StyledLayout>
  );
};

export const StyledLayout = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    'sidebar'
    'header'
    'content';

  .header {
    grid-area: header;
  }
  .sidebar {
    grid-area: sidebar;
  }
  .content {
    grid-area: content;
  }

  ${media.greaterThan('md')`
      grid-template-columns: 30% 1fr;
      grid-template-rows: 15% 1fr;
      grid-template-areas:
       'sidebar header'
       'sidebar content';
  `};
`;

export default Layout;
