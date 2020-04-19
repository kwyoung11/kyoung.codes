---
title: Responsive Layouts with CSS Grid
date: 2020-04-19T20:58:49.434Z
---
Responsive layouts in the past have often necessitated bulky media queries that quickly get unwieldy and unmaintainable. With the introduction of flex box and grid, this technical debt has been amortized greatly. For complex layouts, though, CSS Grid has several distinct advantages over flexbox:



1. **Less Nesting of your HTML.** Using `grid-template-areas` we can write very expressive code for complex layouts and can rearrange the `grid-areas` easily with a concise media query. In flexbox, the syntax is not as expressive, and media queries are more convoluted because you might need to alter the `order` of child elements in a flex container, nest elements to achieve a span across two rows of a layout, etc.

   Take for example this grid layout:

   <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="kyoung18" data-slug-hash="BaoLBZV" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="BaoLBZV">
     <span>See the Pen <a href="https://codepen.io/kyoung18/pen/BaoLBZV">
     BaoLBZV</a> by Kevin Young (<a href="https://codepen.io/kyoung18">@kyoung18</a>)
     on <a href="https://codepen.io">CodePen</a>.</span>
   </p>
   <script async src="https://static.codepen.io/assets/embed/ei.js"></script>

   and compare to the same layout in flex box:

   <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="kyoung18" data-slug-hash="wvKzwbN" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="wvKzwbN">
     <span>See the Pen <a href="https://codepen.io/kyoung18/pen/wvKzwbN">
     wvKzwbN</a> by Kevin Young (<a href="https://codepen.io/kyoung18">@kyoung18</a>)
     on <a href="https://codepen.io">CodePen</a>.</span>
   </p>
   <script async src="https://static.codepen.io/assets/embed/ei.js"></script>

   Roughly the same amount of CSS, but you can see the HTML is more nested.
2. **Support for gap property.** In Flexbox, we have to [resort to a "hack" to achieve consistent gaps between flex items](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items/#Creating_gutters_between_items), since the gap property of the box object model is not yet supported for flexbox. In grid, we can just specify the `gap` property, without affecting the margin of the container element.
3. **Quickly re-arrange the order of grid items.** If you want to change the layout for a specific device width, all you need to do is define `grid-template-areas` again with your new ordering. With flexbox, you would need to define the `order` property on each of your flex items and change them in your media query. Sometimes, the re-arrangement of the layout you want is not possible in flexbox due to the additional nesting mentioned in point 1 (barring hiding/displaying additional elements, which is not a good solution). Consider the [layout on the home page of this site](https://github.com/kwyoung11/kyoung.codes/blob/master/src/components/Layout/Home/HomeLayout.tsx#L22-L50): the Sidebar element is second in the source order, but with grid you are able to re-arrange it to appear first by specifying the layout of the grid-areas in grid-template-areas. This powerful re-arranging of child items is generally much harder or sometimes not possible with a flex box layout.

## Conclusion

For more complex layouts with child elements that need to be re-ordered in a way that does not naturally flow with the source order of the elements, CSS Grid is often times the more expressive, concise and mantainable solution to use over flex box. That said, CSS Grid and Flex box work great together! When you have simpler, one-dimensional layouts such as horizontal nav bars or vertical single column layouts, flexbox is a great tool to have in your arsenal.