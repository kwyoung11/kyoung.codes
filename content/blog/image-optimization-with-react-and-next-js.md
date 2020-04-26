---
title: Image Optimization with React and Next.js
date: 2020-04-25T19:57:55.878Z
---
In this post, we are going to make use of the [`next-optimized-images`](https://github.com/cyrilwanner/next-optimized-images)package, as well as a Picture component I wrote in React, to compress images, convert them to next-gen formats such as webp, and render a placeholder image until the real image has loaded. This can drastically improve page load speed and the user experience on your website.

## Step 1: Install required dependencies

```javascript
yarn add next-compose-plugins next-optimized-images webp-loader image-trace-loader imagemin-gifsicle imagemin-mozjpeg imagemin-optipng imagemin-svgo -D
```

## Step 2: Add the Picture component

This component uses the HTML5 `<picture>` element to optimally render images in webp format and, if the browser does not support webp, fallback to png or jpg images. Additionally, it uses [`image-trace-loader`](https://github.com/EmilTholin/image-trace-loader) to first render *inline* a very lightweight svg outline of the original image as a placeholder. Once the original image has loaded, it uses the css `transition` property to create a smooth transition from the placeholder to the real image. This technique was inspired by [this codepen](https://twitter.com/mikaelainalem/status/918213244954861569).

```javascript
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

interface PictureProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  webPImagePath: any;
  imagePath: any;
}

export const Picture: React.FC<PictureProps> = (props: PictureProps) => {
  const { imagePath, webPImagePath, ...imgProps } = props;
  const [loaded, setLoaded] = useState(false);
  const image: React.Ref<HTMLImageElement> = useRef();

  const handleLoaded = () => {
    if (!loaded) {
      setLoaded(true);
    }
  };

  React.useEffect(() => {
    if (image.current?.complete) {
      handleLoaded();
    }
  }, []);

  return (
    <PictureWrapper className="picture">
      <TraceImg src={imagePath.trace} loaded={loaded} className="picture__trace" />
      <picture>
        <source srcSet={webPImagePath} type="image/webp" />
        <source srcSet={imagePath.src} type="image/png" />
        <Img
          src={imagePath.src}
          ref={image}
          onLoad={handleLoaded}
          className="picture__img"
          {...imgProps}
        />
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

const Img = styled.img<React.HTMLAttributes<HTMLImageElement>>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;
```

## Step 3: Set the media_folder property in your Netlify CMS config

If you are using Netlify CMS (if you are not, skip this step), set the media_folder property to a directory inside the source of your application and not from the `public/` folder. This will give you shorter relative paths when requiring your images and ensure [things play well together](https://github.com/cyrilwanner/next-optimized-images/issues/130) with next-optimized-images. I set mine to `src/assets/images`, which I think is a good convention.

You will also want to remove the `public_folder` property if it is set. From the Netlify CMS docs:

> *While `media_folder`specifies where uploaded files are saved in the repo, `public_folder`indicates where they are found in the published site. Image `src`attributes use this path, which is relative to the file where it's called. For this reason, we usually start the path at the* *site root, using the opening`/`.*
>
> *If `public_folder `is not set, Netlify CMS defaults to the same value as `media_folder`, adding an opening `/ `if one is not included.*

Now, this means that you'll need to do a find and replace on the value of your image field when passing into the Picture component. I use the following helper in a `helpers.tsx` file under `src/util`: 

```javascript
export const assetPath = (path) => {
  if (!path) {
    return undefined;
  }
  return path.replace('/src/assets/images', '');
};

// usage (e.g., assuming you are in a directory two levels deeper than your assets directory):
// <Picture imagePath={require(`../../assets/images${assetPath(imageSrc)}`)}
```

This way assetPath returns the filename prepended with a / and then you can use relative imports as usual. Alternatively, [avoid relative imports altogether by using a webpack alias](https://kyoung.codes/use-absolute-paths-with-your-es6-imports-with-this-webpack-config).

## Step 4: Update next.config.js

```javascript
const path = require('path');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  // your current next.config.js
};

module.exports = withPlugins([
    [
      optimizedImages,
    ],
  // your other plugins here
  ],
  nextConfig
);
```

Finally, replace all of your `<img>` tags with `<Picture>` tags, and you're all set!

> *Note: If you have a large number of images, this will significantly increase the duration of your first build after making the change. However, subsequent builds will use the already cached version of the images and will be much quicker.*