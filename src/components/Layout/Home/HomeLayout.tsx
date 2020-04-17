import Meta from './Meta';
import React from 'react';
import styled from 'styled-components';
import { responsiveMargin } from '../../../themes/styleHelpers';
import { Sidebar } from './Sidebar';
import { LayoutProps } from '../../../types';
import { Header } from './Header';

const Layout: React.FC<LayoutProps> = (props) => {
  const { config } = props;

  return (
    <StyledLayout className="layout">
      <Meta config={config} />
      <Header />
      <Sidebar />
      <Content className="content">{props.children}</Content>
    </StyledLayout>
  );
};

export const StyledLayout = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-template-rows: 15% 1fr;
  grid-template-areas:
    'sidebar header'
    'sidebar content';

  .header {
    grid-area: header;
  }
  .sidebar {
    grid-area: sidebar;
  }
  .content {
    grid-area: content;
  }
`;

export const Content = styled.div``;

const ContentWrapper = styled.section<any>`
  // ${responsiveMargin};
  // display: flex;
  // justify-content: space-around;
  // align-items: flex-start;
  // max-width: 1280px;
  // margin: 4em 5em 1em 5em;
`;

export default Layout;
