import React from 'react';

export const Picture = (props) => {
  const { imageUrl, webPImageUrl } = props;

  return (
    <>
      <picture>
        <source srcSet={webPImageUrl} type="image/webp" />
        <source srcSet={imageUrl} type="image/png" />
        <img src={imageUrl} />
      </picture>
    </>
  );
};
