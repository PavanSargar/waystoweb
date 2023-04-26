---
title: "React Conditional & Dynamic Styling  Tutorial"
date: "2021-10-11"
categories: 
  - "react"
  - "web-development"
coverImage: "https://ik.imagekit.io/waystoweb/waystoweb/17/thumbnail.jpg?updatedAt=1682356650323"
author: "Pavan Sargar"
---

Share:

If you are styling your React Components by creating a separate CSS file for every component, then this post is for you. Styling React Components with separated files is not ideal and can lead to errors and bugs.

Why? because there might be a class that you use twice in a component and that will definitely affect other components. Especially when your React app gets large enough that you lose track of your CSS Classes, then you need to change your Styling style.

Today, in this post we'll learn, how to use Conditional Styling & Dynamic CSS Classes for styling React components. Though this will not avoid the issue completely and React has many ways to style its components. Stay tuned on waystoweb I'll be posting more secure styling ways.

So, without any further ado, let's get started!

## Conditional Styling -

We can conditionally style any element in the React using Hooks, by setting the initial value as "`Boolean`" values. Then by using the ternary operator we can set inline styles as per the Boolean values, true or false.

```jsx
const todoInput= props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const todoInputHandler = event => {
    if(event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color: !isValid ? "red" : "#ccc"}}>Course Goal</label>
        <input style={{borderColor: !isValid ? "red" : "black", background: !isValid ? "salmon" : "transparent"}} type="text" onChange={todoInputHandler } />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
```

_Though this can be helpful in some cases, it's not recommended as the inline styles take the topmost priority over the elements and can override the external styles._

So, there's a solution to this problem and that is adding CSS Classes Dynamically. Let's learn that!

## Dynamic CSS Classes

We can add the CSS Classes dynamically by using the `isValid` hook that we created earlier. All we need to do is use a Template Literal string the `className` and add the default style, which is `form-control` while conditionally setting the `invalid` class.

Just like this,

`<div className={form-control ${!isValid ? "invalid" : ""}}>`

```jsx
const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const todoInputHandler = event => {
    if(event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input type="text" onChange={todoInputHandler } />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
```

And, in the CSS file, you can add the styling for invalid Class,

```css
.form-control.invalid input {
  border-color: red;
  background-color: #ffd7d7;
}
```

What is happening here is, if the `isValid` is false, then add the class `invalid` to it, else keep it empty, and that's it. I like this approach as it's much more cleaner and not as prone to style duplication as we did before.

Dynamic & Conditional styling in React is important, and we learned how to do that, but in another post, we'll do something else. We'll use a 3rd party library called Styled Components.

## Why use Styled Components?

As previously we were importing CSS Styles to the components, but those styles are not just for the components you are using. If in some other component if you used the class `form-control` it will affect that component.

You might say why do this matter, React apps will get bigger and larger that we'll lose the track of the classes we used and eventually use a class that was previously used. In that case, your component might break or don't give you the result you expected.

**Also, check out -**  
[**JavaScript ES6 Map, Filter, and Reduce Explained**](https://waystoweb.com/map-filter-reduce-explained/)

I hope this post was helpful, if it was make sure to share it with your friends who are just starting out their journey as React Developer. Also, make sure to follow our newsletter to never miss any web dev post updates!