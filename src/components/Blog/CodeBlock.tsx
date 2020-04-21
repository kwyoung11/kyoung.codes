import React, { useRef } from 'react';
import Prism from 'prismjs';

export const CodeBlock = (props) => {
  const code = useRef();

  React.useEffect(() => {
    Prism.highlightElement(code.current);
  });

  return (
    <pre className="language-markup line-numbers">
      <code ref={code} className={`language-${props.language}`}>
        {props.value}
      </code>
    </pre>
  );
};
