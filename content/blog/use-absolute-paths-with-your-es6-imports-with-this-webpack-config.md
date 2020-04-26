---
title: Use absolute paths with your ES6 imports with this webpack config
date: 2020-04-25T22:41:57.012Z
---
It's often nice to avoid the ugliness of relative import paths, with long chains of `../../../`. Instead you can use absolute paths with an alias such as `@app`, which webpack will resolve to the directory you specify in the config. 

In `webpack.config.js` add the following to your `module.exports`:

```javascript
resolve: {
  alias: {
    '@app': path.resolve(__dirname, 'src/'),
  }
}
```

If you are using Next.js you can add the following instead to your webpack config in `next.config.js`:

```javascript
config.resolve.alias = {
  ...config.resolve.alias,
  '@app': path.resolve(__dirname, 'src/'),
};
```

And if you are using typescript, add the following in your `tsconfig.json`, assuming `src` is your base directory:

```javascript
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

Now you can have succinct absolute imports without the ugly relative paths!