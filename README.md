# Lec 1: Intro to React
So far, we've been using HTML, CSS, JS to build websites. What downsides of making websites with HTML, CSS, JS from scratch have you noticed along so far? One downside is that your codebase quickly gets disorganized. Another downside is that helping out other team may have been difficult because their code is all over the place in your perspective.

Lack of rules with plain JS is the reason why we use **frameworks** to build apps. Frameworks facilitate collaboration and organization that directly leads to better apps, which is what we want at BoG. For the next 4 weeks or so, we will be learning how to use one of many frontend frameworks, called [*React*](https://reactjs.org/).

## Why React over plain JS?
1. Plain JS separates UI element's logic (index.js) with its structure (index.html). React enforces users to combine both the structure and the logic within its construct called *components*.
2. React helps you to build a single page application (SPA), which means you don't have to send a new request to the server every time you want to route to new url. Instead, the server sends one HTML and one JS file. Every routing is handled by that single JS file, which reduces a lot of HTTP requests to the server.
3. React abstracts away DOM manipulation so that you don't have to write redundant code (how many times did you have to do `document.getElementByID...`?). This allows you to write neat code without worrying about changing the DOM directly.

If you ask why React over other frameworks, we have no definite answer to that question besides that it is the standard that BoG made a while back. No framework is better than the other, so feel free to do some exploring if you are curious.

## JSX
We used HTML to provide basic UI elements. If you wanted a div in HTML, you would declare `<div> Some Div! </div>`. React uses the exact same structure, except we call it JSX, which stands for JavaScript XML. It allows you to write HTML in JS! To render JSX, we use `ReactDOM.render(JSXelement, DOMElement)`.
```
const title = <h1> Welcome to the Frontend Track! </h1>
ReactDOM.render(title, document.getElementById('root'));
```
This is equivalent to just declaring `<h1> Welcome to the Frontend Track! </h1>` in your HTML.

### React Rendering
When you call `render()`, React will look at the current DOM and try to find which element needs to be updated. Only DOM elements that have changed will update, though this means that if an element is nested, [all of its children will be updated](https://alexsidorenko.com/blog/react-render-always-rerenders/). This causes some performance issues, which we'll look into later with React hooks.

## Components
React organizes UI with components. 

# Exercise: Build Reddit Clone

