import React from 'react';
import styled from 'styled-components';
import { Picture } from '../Picture';
import { assetPath } from '../../util/helpers';

export const MdImage = (props) => {
  const imagePath = assetPath(props.src);
  return (
    <ImageWrapper>
      <Picture
        imagePath={require(`../../assets/images${imagePath}?trace`)}
        webPImagePath={require(`../../assets/images${imagePath}?webp`)}
        alt={props.alt}
        title={props.title}
      />
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
