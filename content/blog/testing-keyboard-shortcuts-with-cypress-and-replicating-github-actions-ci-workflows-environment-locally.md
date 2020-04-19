---
title: Testing Keyboard Shortcuts with Cypress, and replicating Github Actions
  CI workflows + environment locally
date: 2020-04-19T01:09:04.042Z
---
I recently [contributed a PR](https://github.com/netlify/netlify-cms/pull/3582) to Netlify CMS  where I added keyboard shortcuts to the editor (the one I'm using now to write this article!), so that you can quickly **bold** or *italicize* things! And adding them was pretty straightforward, but testing them got interesting! Here I'll walk through how I tested each one of the new keyboard shortcuts using Cypress, including how I reused some common test code to make the tests shorter and more readable, as well as something that tripped up the test code in Github Actions CI that I at first failed to consider (but in hindsight was fairly obvious).

One of the nice features of Cypress I used was [aliases](https://docs.cypress.io/guides/core-concepts/variables-and-aliases.html#Sharing-Context). Each test I made had the same code:

```
cy.focused()
  .type('foo')
  .setSelection('foo');
```

So in a beforeEach hook, I just aliased it to the variable `selection:`

```
beforeEach(() => {
  [...]
  cy.focused()
    .type('foo')
    .setSelection('foo').as('selection');
});
```

And then I could call `cy.get('@selection')` and Cypress would execute those commands without having to type them all out again.

## Tests Failing in CI but Passing Locally

My tests passed locally but failed in CI, and at first I wasn't sure why. Then I realized that it was *probably* the fact that CI was running in an Ubuntu environment, whereas my tests were running on Mac OS locally, and the implementation of the keyboard shortcuts actually detects the OS and switches between `{ctrl}` for Windows/Linux and `{cmd}` for Mac OS as the modifier key. This is a common paradigm, and something users expect, so that made sense. Now I suspected this was the issue, but I wanted to confirm it locally so I wasn't pushing up random commits trying to get CI to pass.

## Troubleshooting

To troubleshoot the issue, I wanted to be able to *roughly* replicate the CI environment locally. For that, I was able to set up <https://github.com/nektos/act>, an executable program that uses Docker to run Github Action workflows locally. After downloading Docker Desktop, I set up act but ran into a couple issues that took a bit of Github Issues scouring to find the fix for:

1. **['Unable to interpolate string' errors](https://github.com/nektos/act/issues/104)**: The parser used by `act` is not the same as the one used by Github Actions. The [node workflow in Netlify CMS](https://github.com/netlify/netlify-cms/blob/master/.github/workflows/nodejs.yml) uses hyphens in some of the variables. Act was throwing 'Unable to interpolate string' errors, causing the workflow to fail. The solution was to either change all hyphens to underscore if these hyphens were in your strategy and could be changed, or, if it was an third-party action, use the bracket property accessor notation `['hyphenated-property']` to avoid the error.
2. [Expected RUNNER_TEMP to be defined](https://github.com/nektos/act/issues/159): I ran into another issue where the node.js setup action would fail with error message 'Expected RUNNER_TEMP to be defined'. This can be fixed by adding: 

   ```
   env:
     RUNNER_TEMP: "/tmp/"
   ```

   to the setup-node step.

Finally, with those issues out of the way, I was able to pass the node set up phase in the build. But, I was using a minimal node.js Docker image as the container, whereas Cypress actually requires certain software to be pre-installed. So my tests weren't able to run just yet.

Cypress provides a repo with multiple Docker images for different versions of Node and different browsers pre-installed here: <https://github.com/cypress-io/cypress-docker-images>.

You want to find an image that matches the OS you are trying to replicate and is compatible with your Node version. The one I used was `cypress/base:ubuntu18-node12.14.1`. If you need a specific browser other than Electron, you will need to pick an image from the browsers directory.



With that out of the way, I targeted my specific test with --spec and ran it. It failed! I was able to replicate the issue from CI locally.

Now I just added: 

```
const isMac = Cypress.platform === 'darwin';
const modifierKey = isMac ? '{meta}' : '{ctrl}';
```

to switch modifier keys based on OS, and watched my [tests pass](https://github.com/netlify/netlify-cms/blob/master/cypress/integration/markdown_widget_hotkeys_spec.js).