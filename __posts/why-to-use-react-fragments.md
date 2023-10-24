---
title: "Why do you need to use React Fragments?"
date: "2021-10-19"
categories: 
  - "react"
  - "web-development"
coverImage: "https://ik.imagekit.io/waystoweb/waystoweb/20/Copy-of-thumbnail-1.jpg?updatedAt=1682356741746"
author: "Pavan Sargar"
excerpt: "Why do you need to use React Fragments? What are the benefits of using fragments over divs? & Why not to use HTML elements?"
---

Share:

Whenever creating new components, we need to wrap each and every element inside a parent element, precisely a `div`.

But, when our app gets large, there are now too many components, and too many `divs`, this can cause a div soup.

It's not considered a better practice, as per the performance perspective, because, React will render these `divs`. We might not see the problem, but behind the scenes, there's a big issue that you might want to fix & can affect your site performance.

Then you might say, in what parent element should we wrap all the child elements? And that is a valid question.

So, now let me introduce the solution to you. There are two solutions for this problem, the 1st one is just for an explanation of how it works, and the 2nd one is the actual solution.

## #1 Custom Wrapper Component -

What we can do is, we can create a simple JavaScript component, just to wrap all of the child elements. How does it sound? Let me show you in practice.

We'll create a Helper folder inside our component folder and there we'll create a file called `Wrapper.jsx`.

Add these codes inside the Wrapper component,

```javascript
const Wrapper = (props) => {
  return props.children;
};

export default Wrapper;
```

here, we are just creating a simple Wrapper component, not even importing React as we are not going to use any JSX code.

What we are returning here is all the elements that we'll wrap this component around. So the `props.children` means all the children elements in this component, that we'll wrap around.

```jsx
import React from "react";
import Wrapper from "../Helpers/Wrapper;

const Navbar = () => {
  return (
      <Wrapper>
		<div></div>
		<div></div>
		<div></div>
      </Wrapper>
);
};

export default Wrapper;
```

here, we are just creating a simple Wrapper component, not even importing React as we are not going to use any JSX code.

What we are returning here is all the elements that we'll wrap this component around. So the `props.children` means all the children elements in this component, that we'll wrap around.

**Also, Check out,  
**[**React Styled Components for Beginners**](https://waystoweb.com/react-styled-components-beginners-guide/)

## #2 React Fragments -

Sure you might have heard of React Fragments already, or you might've used it. But there's something that you need to know about them.

There are two ways that you can use React Fragments,

1. This will always work and it also supports `keys`

```jsx
const Navbar = () => {
  return (
    <React.Fragment>
	   <div></div>
	   <div></div>
	   <div></div>
    </React.Fragment>
);
};
```

With `Keys`,

```jsx
function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        // Without the `key`, React will fire a key warning
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
```

2\. This one needs to be supported by our Project Workflow & it does not support keys

```jsx
const Navbar = () => {
  return (
  <>
	<div></div>
	<div></div>
	<div></div>
  </>
);
};
```

The benefit of using React Fragments is that it allows us to write cleaner JSX code, and also helps us to avoid the rendering of unnecessary HTML elements and most important the div soup.

You can learn more about React Fragments on [React official documentation.](https://reactjs.org/docs/fragments.html)

Do you use React Fragments in your Projects? Do let us know in the comments below. Also, share this post if it was helpful.