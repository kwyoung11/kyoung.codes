import React, { useRef, useState } from 'react';
import styled from 'styled-components';

interface PictureProps extends React.HTMLProps<HTMLImageElement> {
  webPImagePath: any;
  imagePath: any;
}

export const Picture: React.FC<PictureProps> = (props) => {
  const { imagePath, webPImagePath, ...imgProps } = props;
  const [loaded, setLoaded] = useState(false);
  const image = useRef();

  const handleLoaded = () => {
    if (!loaded) {
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
      <TraceImg src={imagePath.trace} loaded={loaded} />
      <picture>
        <source srcSet={webPImagePath} type="image/webp" />
        <source srcSet={imagePath.src} type="image/png" />
        <Img src={imagePath.src} ref={image} onLoad={handleLoaded} />
      </picture>
    </PictureWrapper>
  );
};

const PictureWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const TraceImg = styled.img<{ loaded: boolean }>`
  width: 100%;
  height: 100%;
  z-index: 2;
  filter: blur(1px);
  transition: opacity 1s;
  opacity: ${(props) => (props.loaded ? 0 : 1)};
`;

const Img = styled.img<any>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;
