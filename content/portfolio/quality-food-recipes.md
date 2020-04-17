---
title: Quality Food Recipes
date: 2020-04-17T06:02:06.169Z
description: Quality Food Recipes is a food blog that I built and designed from
  scratch using Next.js, React and Firebase.
link: https://qualityfoodrecipes.com
---
## Design Details

The site is styled with Styled Components and Material UI.

## Technical Details

I built the blog using Next.js, using getStaticProps and exportPathMap (static HTML export) to have a fully pre-rendered site. I used Next's built-in router with dynamic routing, as well as integrated Styled Components and Material UI to have the styles be server side rendered.

The backend uses Netlify CMS with git-gateway, so the content is stored as Markdown in a Github repo as .en.md and .es.md files.

One interesting challenge with this blog was the need for multilingual content, to be able to write recipes/posts in both English and Spanish and for the site to auto-detect the locale from the user's browser and direct them to the correct language version of the page, as well as for the user to be able to switch between languages manually. Moreover, common labels throughout the site needed to have their translation defined.

![A dropdown in the top right corner, using react-select, lets the user switch between languages.](/img/screen-shot-2020-03-30-at-2.42.40-am.png "A dropdown in the top right corner, using react-select, lets the user switch between languages.")

Another interesting challenge was implementing user comments on recipes. I decided to implement this functionality from scratch, both for fun and because the user experience with Disqus or Facebook comments does not integrate with the style of the blog well. I chose to use Firebase as the back-end and use Anonymous Firebase Auth to keep track of users. This way user's don't need to create an account to comment, but they can still delete or edit their comments after they submit them, which many other blogs do not allow.

![Image of a test comment with the option to delete comments after submitting by using anonymous Firebase Auth.](/img/screen-shot-2020-04-01-at-8.12.59-pm.png "Image of a test comment with the option to delete comments after submitting by using anonymous Firebase Auth.")



Finally, I used Jest and react-testing-library to test Firebase comments, which involved a considerable amount of mocking, as well as to test the common pathways through the rest of the app.