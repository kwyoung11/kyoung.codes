import React, { useRef, useState } from 'react';
import styled from 'styled-components';

export const Picture = (props) => {
  const { imageUrl, webPImageUrl } = props;
  const [loaded, setLoaded] = useState(false);
  const image = useRef();

  const handleLoaded = () => {
    if (!loaded) {
      console.log('image loaded');
      setLoaded(true);
    }
  };

  React.useEffect(() => {
    const img = image.current;
    // @ts-ignore
    if (img && img.complete) {
      handleLoaded();
    }
  }, []);

  return (
    <PictureWrapper>
      <TraceImg src={imageUrl.trace} loaded={loaded} />
      <picture>
        <source srcSet={webPImageUrl} type="image/webp" />
        <source srcSet={imageUrl.src} type="image/png" />
        <Img src={imageUrl.src} ref={image} onLoad={handleLoaded} />
      </picture>
    </PictureWrapper>
  );
};

const PictureWrapper = styled.div`
  position: relative;
`;

const TraceImg = styled.img<{ loaded: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  filter: blur(1px);
  transition: opacity 1s;
  opacity: ${(props) => (props.loaded ? 0 : 1)};
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;
