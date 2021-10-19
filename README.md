# Lec 2: State Management
We've been using vanilla JS to keep track of the variables. For instance, if you wanted to implement a counter website, you would do something like this 
```
<html>
  <body>
    <p id="value"> 0 </p>
    <button id="increment-btn"> increment </button>
  </body>
</html>
```
```
let counter = 0;
document.getElementById('increment-button')
  .addEventListener((event) => {
    counter += 1;
    document.getElementById('value').innerText = counter;
  });
```

So the natural assumption is that we can use normal JS variables just fine with React too!
```
const Component = (props) => {
  let counter = 0;
  return (
    <div>
      <p> {counter} </p>
      { /* When a button is clicked, increment counter */}
      <button onClick={(e) => counter += 1}> increment </button> 
    </div>
  )
}
```

But unfortunately, this doesn't work because React rendering reloads the component when the component gets updated. Since we initialize the `counter` to 0, whenever we update the component, counter is set to 0. **This is why we need a special variable that can keep track of previous value.**

## State Variables
We call such variables state variables, and we don't declare them like how we declare normal variables. To use state variables, we use the `useState()` hook. 

```
import React, {useState} from 'react'

const Component = (props) => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p> {counter} </p>
      <button onClick={(e) => setCounter(counter + 1)}> increment </button> 
    </div>
  )
} 
```
The argument you pass into `useState()` is the initial value of the state variable. `useState()` returns an array with two values: `state and setState()`. You use `state` to read the state value while `setState(newValue)` to update the state value to a new state value. Note that you don't have to name it `state and setState()`. Name it accordingly to your usage!

Also note that useState can work with any data type, not just primitives. So you could pass in an array or objects. This is useful when you want to keep track of a list of todo items and sort them in specific orders.

# Exercise: Add a like button to Reddit post
