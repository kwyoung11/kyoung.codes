---
title: Use absolute paths with your ES6 imports with this webpack config
date: 2020-04-25T22:41:57.012Z
---
In `webpack.config.js` add the following to your module.exports:

```
resolve: {
  alias: {
    '@app': path.resolve(__dirname, 'src/'),
  }
}
```

If you are using Next.js you can add the following instead to your webpack config in next.config.js:

```
config.resolve.alias = {
  ...config.resolve.alias,
  '@app': path.resolve(__dirname, 'src/'),
};
```

And if you are using typescript, add the following in your tsconfig.json, assuming `src` is your base directory:

```
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@app/*": [
        "*"
      ]
    },
    [...] // rest of your config
  }
}
```