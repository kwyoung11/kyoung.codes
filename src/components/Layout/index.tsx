import Meta from './Meta';
import React from 'react';
import styled from 'styled-components';
import { responsiveMargin } from '../../themes/styleHelpers';

interface ConfigProps {
  title: string;
  shortDescription: string;
  description: string;
}

interface LayoutProps {
  config: ConfigProps;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { config } = props;

  return (
    <StyledLayout className="layout">
      <Meta config={config} />
      <ContentWrapper>
        <Content className="content">{props.children}</Content>
      </ContentWrapper>
    </StyledLayout>
  );
};

export const StyledLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Content = styled.div``;

const ContentWrapper = styled.section`
  ${responsiveMargin};
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  max-width: 1280px;
  // margin: 4em 5em 1em 5em;
`;

export default Layout;
