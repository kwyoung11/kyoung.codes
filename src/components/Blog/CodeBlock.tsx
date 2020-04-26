import React, { useRef } from 'react';
import Prism from 'prismjs';
import styled from 'styled-components';

export const CodeBlock = (props) => {
  const code = useRef();

  React.useEffect(() => {
    Prism.highlightElement(code.current);
  });

  return (
    <StyledPre className="language-markup line-numbers">
      <code ref={code} className={`language-${props.language}`}>
        {props.value}
      </code>
    </StyledPre>
  );
};

const StyledPre = styled.pre`
  overflow: auto !important;
`;
