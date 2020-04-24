---
title: React Selectable
date: 2020-04-17T06:12:34.338Z
thumbnail: /img/screen-shot-2019-03-19-at-1.53.47-am.png
description: Enable rectangular selection for any element in React by wrapping
  it in a <Selectable> component.
link: http://github.com/kwyoung11/react-selectable-simple
tags:
  - React
  - Cypress
---
#### Why I built this

I had a need for being able to select a subset of exercises on the[routines page](https://www.strengthify.com/routines)for[Strengthify.com](https://www.strengthify.com/), in order to combine exercises to make either a pair or triplet .Combining exercises in this way means that you can do, for example, Set 1 of exercise A, then Set 1 of exercise B, and continue alternating until all sets are complete, instead of doing all sets of exercise A, then all sets of exercise B. This works well to give your muscles a break while reducing rest time as you are working different muscle groups on each set. For example, Push Ups and Pull Ups work well together as a pair since they work opposing muscles groups.

#### What I learned

I spent a significant portion of time researching the best way to publish a package to npm, as well as the best way to test the React component. After a while of discovery I came across nwb, which has sensible defaults for not only creating react apps but also for creating react components ready to publish. The main documentation for configuring this build tool can be found[here](https://github.com/insin/nwb/blob/master/docs/guides/ReactComponents.md#developing-react-components-and-libraries-with-nwb).

### All about build tooling

It defaults to creating a CommonJS build in lib/ and points package.json main config to lib/index.js. You can also generate an ES Modules build so end users using bundlers like Webpack can eliminate exports not used from your package from the final bundle. This creates an es/index.js build file and adds the "module" config to package.json. Finally, you can also create a UMD build to be able to use the module as a browser global. This is most useful for easily creating demos of the package using JS Fiddle or Codepen.

### Testing

NWB defaults to "using Karma to run tests written with Mocha and Expect in the headless PhantomJS browser". This is great for unit testing, but in my case an integration test was much more useful. I opted to use[Cypress](http://cypress.io/)as the testing framework, and I was pretty blown away with the testing experience.

Further Reading:

[Javascript Module Primer](https://developers.google.com/web/fundamentals/primers/modules?utm_source=ESnextNews.com&utm_medium=Weekly+Newsletter&utm_campaign=2018-06-19)