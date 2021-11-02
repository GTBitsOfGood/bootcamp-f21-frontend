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
If you are building a blog, you might wonder if you have to write a new file for each blogpost you write (`pages/bog/retreat.jsx`,`pages/bog/year-in-review.jsx`). Thankfully, you don't have to because NextJS offers dynamic routes.

Dynamic routes are routes that are not directly implemented in `pages/` directory. Unlike normal pages where it is named like `pages/blog/vacation.jsx`, it would be titled `pages/blog/[query].jsx`. By creating a file surrounded by angle brackets, we can now route to `localhost:3000/blog/123`, `localhost:3000/blog/eating-apples`, and any routes ending in the format of `/blog/[insert-your-text]`. 

How does NextJS understand what content we should render on that page? In your component in `[query].jsx`, you would have to read what the requested URL was. If the user requested `/blog/atl-foods`, you would have to fetch and render data for `atl-foods`. If it was React, we would have used `useEffect` to fetch on initial render. You can do it like that in NextJS, but you can optimize it further. 

There are two ways to extract  what `query` is in `localhost:3000/blog/[query]`, which has to do with **server side rendering** and **static site generation**. 

## Benefit 2: Server Side Rendering


# Exercise: Display animals in the animal shelter app
## Getting Set Up
First, checkout this branch and open vs code.
```
cd [path to this repository folder in your computer]
git fetch
git checkout lec-6-dynamic-routing
code .
```
Once you have opened VS Code, open up a new terminal in VS Code and install dependencies first. Then start the app.
```
npm install      // installs dependencies, this is a comment btw
npm run dev      // starts our app. Open up your browser and navigate to http://localhost:3000
```
Your `localhost:3000` should display this page.

<img width="500" alt="image" src="https://user-images.githubusercontent.com/39681900/139949270-fbc7c8b1-d8dc-408a-af18-730dd2e7330c.png">

## Goal: Display a list of animals when you click the 'Browse' tab
Notice that we have two tabs on the navbar: About and Browse. About is the first url you visit `localhost:3000`. Try clicking on 'browse' to navigate to `localhost:3000/browse`. You should see an empty page on that tab. Your job is to display a list of animals using NextJS's server side rendering feature!


The final outcome should look like this. When you click on Browse tab, you should display a list of animals in some fashion, meaning it doesn't have to be a grid. Minimum requirement is to have the animal's name included along with its picture.

<img width="500" alt="image" src="https://user-images.githubusercontent.com/39681900/139958042-590d62fe-06ee-4609-9852-e1f89894276b.png">

When you click on one of the animals, you should display a new page detailing about that specific animal. This page should be displayed on a new route!

<img width="500" alt="image" src="https://user-images.githubusercontent.com/39681900/139958183-7bcae8bb-b5fd-4e87-97a7-47c35e1ad82f.png">



