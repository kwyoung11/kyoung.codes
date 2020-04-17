import React from 'react';
import styled from 'styled-components';

export const Footer = (props) => {
  return (
    <StyledFooter className="footer">
      <a className="heading" href={'https://github.com/kwyoung11'}>
        Github
      </a>
      <a className="heading" href={'https://linkedin.com/in/kevwy'}>
        Linkedin
      </a>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    margin: 0 20px;
    letter-spacing: 0.5px;
  }
`;
