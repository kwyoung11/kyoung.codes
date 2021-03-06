import React from 'react';
import styled from 'styled-components';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { MyLink } from '../../Common/MyLink';

export const SidebarLinks = () => (
  <StyledFooter className="links">
    <Links>
      <MyLink className="heading" href={'https://github.com/kwyoung11'}>
        Github
      </MyLink>
      <MyLink className="heading" href={'https://linkedin.com/in/kevwy'}>
        Linkedin
      </MyLink>
    </Links>
    <Source>
      Built with React and Next.js.{' '}
      <MyLink className="heading" href="https://github.com/kwyoung11/kyoung.codes">
        View Source <IoIosArrowRoundForward />{' '}
      </MyLink>
    </Source>
  </StyledFooter>
);

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  a {
    font-size: ${(props) => props.theme.fontSizes.sm};
    margin: 0 20px;
    letter-spacing: 0.5px;
  }
`;

const Source = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.colors.grey};
  a {
    color: ${(props) => props.theme.colors.grey} !important;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 0 20px;
    letter-spacing: 0.5px;
    transition: color 0.5s ease;
    &:hover {
      color: ${(props) => props.theme.fonts.bodyColor} !important;
    }
  }
`;
