# Lecture 6: Dynamic Routing

We briefly covered last time that we use NextJS for three main reasons.
* Easy routing
* Server Side Rendering & Static Site Generation
* Easy deployment to Vercel

Today, we'll go more in detail what the first two bullet points mean. At the end of this workshop, you should be able to
* Know what dynamic routes are
* Implement dynamic routes to show blogposts in different routes
* Use `getServerSideProps()` to implement server side rendering

## Benefit 1: Easy Routing
Routes are important because they divide up the resources your user wants to view. Imagine wikipedia had one route. We would need a humongous HTML to include everything in Wikipedia. 

React is a framework for single page application, meaning it only has 1 route by default. You can't go to different routes (e.g. http://localhost:3000/about) in your React app right? 

It is possible to implement routes in react via `react-router-dom`, but it's very difficult set it up for beginners. 

Unlike React, NextJS makes routing very easy. 

### `/pages` directory
To implement a route in NextJS, all you have to do is create a file in `/pages` directory (`src/pages` for our repo). If you create a file called `/pages/about.js`, you can see that component being rendered in `http://localhost:3000/about`.

### Dynamic Routes
If you are building a blog, you might wonder if you have to write a new file for each blogpost you write (`pages/bog/retreat.jsx`,`pages/bog/year-in-review.jsx`). NextJS understands this issue, which is why they offer dynamic routes.

Dynamic routes are routes that are not directly implemented in `pages/` directory. Unlike normal pages where it is named like `pages/blog/vacation.jsx`, it would be titled `pages/blog/[query].jsx`. In your `[query].jsx`, you would have to read what the requested URL was. If the user requested `/blog/atl-foods`, you would have to fetch and render data for `atl-foods`. Dynamic routes saves us from hardcoding every single routes we want to show.

### Server Side Rendering
So how do we find out what `query` is in `localhost:3000/blog/[query]`? There are two ways to extract this information, which has to do with **server side rendering** and **static site generation**. 

Now that we have routes, we are not making just one request to the server as we did in React. For each routes, you make a request for a new HTML. 

// TODO: Finish server side rendering and ssg, compare pros and cons
// Describe how to use getServerSideProps()





