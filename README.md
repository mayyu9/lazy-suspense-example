Memoization is one of the ways to optimize performance. In this article, we’ll explore how it works in React.

What is memoization?
In simple terms, memoization is a process that allows us to cache the values of recursive/expensive function calls so that the next time the function is called with the same argument(s), the cached value is returned rather than having to re-compute the function.

This ensures that our applications run faster because we avoid the time it would usually take to re-execute the function by returning a value that’s already stored in memory.

Why use memoization in React?
In React functional components, when props within a component change, the entire component re-renders by default. In other words, if any value within a component updates, the entire component will re-render, including functions/components that have not had their values/props altered.

Let’s look at a simple example where this happens. We’ll build a basic app that tells users what wine goes best with the cheese they’ve selected.

We’ll start by setting up two components. The first component will allow the user to select a cheese. It’ll then display the name of the wine that goes best with that cheese. The second component will be a child of the first component. In this component, nothing changes. We’ll use this component to keep track of how many times React re-renders.

lazy-loading suspense:
https://github.com/mayyu9/react-lazy-memoize/blob/master/src/App.js
