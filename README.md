# JavaScript 'this' Keyword Bug

This repository demonstrates a common confusion with JavaScript's `this` keyword. The value of `this` is dynamic and depends on how a function is called, not where it's defined.

## Bug Description
The `bug.js` file contains a function `myFunc` that logs the value of `this`. When called directly, `this` refers to the global object (window in browsers, undefined in strict mode). However, when called as a method of an object, `this` refers to that object.

## Solution
The `bugSolution.js` file provides a better understanding of this behavior and shows how to manage the context of 'this' in different scenarios.  It also emphasizes the importance of understanding how the context of 'this' changes depending on how the function is called.