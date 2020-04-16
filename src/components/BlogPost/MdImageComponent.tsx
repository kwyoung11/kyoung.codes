import React from 'react';
import styled from 'styled-components';

export const MdImageComponent = (props) => {
  return (
    <ImageWrapper>
      <img src={props.src} alt={props.alt} title={props.title} />
      <div>{props.title ? <em>{props.title}</em> : null}</div>
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  margin-top: 50px;
  div {
    text-align: center;
    margin-bottom: 50px;
  }
`;
