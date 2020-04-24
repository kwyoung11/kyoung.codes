import React from 'react';
import styled from 'styled-components';

export const Picture = (props) => {
  const { imageUrl, webPImageUrl } = props;

  return (
    <PictureWrapper>
      <TraceImg src={imageUrl.trace} />
      <picture>
        <source srcSet={webPImageUrl} type="image/webp" />
        <source srcSet={imageUrl.src} type="image/png" />
        <Img src={imageUrl.src} />
      </picture>
    </PictureWrapper>
  );
};

const PictureWrapper = styled.div`
  position: relative;
`;

const TraceImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;

const Img = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
`;
