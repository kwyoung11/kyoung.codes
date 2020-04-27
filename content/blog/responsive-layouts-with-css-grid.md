---
title: Responsive Layouts with CSS Grid
date: 2020-04-19T20:58:49.434Z
---
Responsive layouts in the past have often necessitated bulky media queries that quickly get unwieldy and unmaintainable. With the introduction of flex box and grid, this technical debt has been amortized greatly. For complex layouts, though, CSS Grid has several distinct advantages over flexbox:

1. **Less Nesting of your HTML.** Using `grid-template-areas` we can write very expressive code for complex layouts and can rearrange the `grid-areas` easily with a concise media query. In flexbox, the syntax is not as expressive, and media queries are more convoluted because you might need to alter the `order` of child elements in a flex container, nest elements to achieve a span across two rows of a layout, etc.

   Take for example [this very simple grid layout](https://codepen.io/kyoung18/pen/BaoLBZV?editors=1100) and compare it to the [same layout in flex box](https://codepen.io/kyoung18/pen/wvKzwbN). They are roughly the same amount of CSS, but you can see how much cleaner and less nested the HTML is with the grid layout.
2. **Support for gap property.** In Flexbox, we have to [resort to a "hack" to achieve consistent gaps between flex items](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items/#Creating_gutters_between_items), since the gap property of the box object model is not yet supported for flexbox. In grid, we can just specify the `gap` property, without affecting the margin of the container element. For complex, responsive layouts this leads to having to specify a margin property on many of the containers in your layout, complicating the code. Here are the two previous examples but with "gaps" added between the containers: [The flexbox one](https://codepen.io/kyoung18/pen/dyYWemd) and [the grid one](https://codepen.io/kyoung18/pen/xxwdjBP). I've purposely left a bug in the flexbox layout to further illustrate how, oftentimes, you'll also need to adjust your margins when changing the `flex-direction` at a given breakpoint: go ahead and resize the flexbox example to below a 768px width, and you'll see that because the flex-direction changed, you'll now need to adjust the margins of the `.cards` div. We had to add 12+ lines of css to adjust the margins on a flex layout to achieve our desired "gaps", whereas with the grid layout it required just a single line of css, without any need to adjust it at your breakpoints.
3. **Quickly re-arrange the order of grid items.** If you want to change the layout for a specific device width, all you need to do is define `grid-template-areas` again with your new ordering. With flexbox, you would need to define the `order` property on each of your flex items and change them in your media query. Sometimes, the re-arrangement of the layout you want is not possible in flexbox due to the additional nesting mentioned in point 1 (barring hiding/displaying additional elements, which is a cumbersome and harder-to-maintain solution). Consider the [layout on the home page of this site](https://github.com/kwyoung11/kyoung.codes/blob/master/src/components/Layout/Home/HomeLayout.tsx#L22-L50): the Sidebar element is second in the source order, but with grid you are able to re-arrange it to appear first by specifying the layout of the grid areas in `grid-template-areas`. This powerful re-arranging of child items is generally much harder or sometimes not possible with a flex box layout.

## Conclusion

Grid layout is often a better choice for:

* High-level, overall page layouts
* Layouts where child elements need to be re-ordered in such a way that takes them out of their source order
* Complex layouts that typically require 2-dimensional control to achieve the desired UI.

Conversely, flex layout is often a better choice for:

* Simpler, one-dimensional layouts (e.g. nav bars, single column layouts)

For more complex layouts, I prefer CSS Grid as I find the syntax to be more expressive, and therefore easier to maintain, compared to flex box. That said, CSS Grid and Flex box work great together, and I use both on this website!