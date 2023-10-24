---
title: JavaScript ES6 Map, Filter and Reduce Explained
excerpt: JavaScript ES6 new array methods map, filter & reduce simply explained
  so that you don’t need to use loops for every operations in an array.
coverImage: https://ik.imagekit.io/waystoweb/waystoweb/15/thumbnail.jpg?updatedAt=1682356600665
categories:
  - javascript
  - web-development
author: Pavan Sargar
date: 2021-09-02
---
Share:-

Before [JavaScript ES6](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjLpoSC5-DyAhWTbX0KHZFbDCQQFnoECAIQAQ&url=https%3A%2F%2Fwww.w3schools.com%2Fjs%2Fjs_es6.asp&usg=AOvVaw3hnSsGmu56cR37jgPBX8tB), it was a headache to handle [JavaScript Arrays](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiH9ZGR5-DyAhWWfH0KHSWqDvIQFnoECAYQAQ&url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FArray&usg=AOvVaw2IwucwJwhWZgT62WjziJNv). We were required to use loops all the time, which we all hate, right?

But, after ES6, many new Array methods cut us some slack for handling arrays. Thanks to ES6, we can perform complex operations on arrays with pretty little coding.

There are many array methods, but today we'll discuss only Map, Filter & Reduce. These three methods are so helpful in your daily JS programming. If you want to learn JavaScript Frameworks like React or Angular, you need to master these three methods.

So let's get started!

## Map -

This JavaScript Array method allows us to loop through the array and create a new array by performing some actions on each items in an array.

```javascript
var numbers = [7, 46, 9, 95, 32, 0];

function double(n) {
  return n * 2;
}
var newNumbers = numbers.map(double);

console.log(newNumbers);
//output:- [14, 92, 18, 190, 64, 0]
```

### Explanation :-

To call this method, we need to grab the array and call `.map()` on that array. Inside this map method, it expects a `function`. The function we'll pass in the map method will determine what to do with each item.

You can create a function outside and call or you can just create it inside the map it doesn't matter. Here we'll keep it simple. We've created a function called `double` which takes input n and simply returns the value multiplied by 2.

Now, if we pass the `double` function in the `map` method, it'll loop through the array, and for each numbers in there will be put as the input n and output a new array with doubled items.

## Filter -

As the name suggests, this filter method creates a new array by keeping only items that returns true to certain conditions.

```javascript
var numbers = [7, 46, 9, 95, 32, 0];

const newNumbers = numbers.filter(function(num) {
  return num > 30;
});

console.log(newNumbers);
//output:- [46, 95, 32]
```

### Explanation :-

Same as the map method, we'll hold the array and call the `.filter()` method. Now, again this method will require another `function`. This time instead of creating a new function outside, we'll create an anonymous function inside this method to keep it concise.

This filter function will look through each of the numbers in the numbers array and for each of these numbers, it will only return numbers that match particular criteria.

So here, our criteria is that we are looking for each item or number in that array that is greater than 30. If there are numbers that match the criteria, then it will add it to a new array which will be the output of this function.

## Reduce :-

Reduce function works by accumulating a value and doing something to each of the item in an array. It sounds a bit confusing, but it will look less confusing when we acutally see it in action.

```javascript
var numbers = [7, 46, 9, 95, 32, 0];

var newNumber = numbers.reduce(function (accumulator, currentNumber) {
  console.log("accumulator = " + accumulator);
  console.log("currentNumber = " + currentNumber);
    return accumulator + currentNumber;
});

console.log(newNumber);
//output:- 189
```

### Explanation :-

Let's say that we want to add and sum up all the items in the numbers array. Just like previous methods, we'll hold an array and call the reduce method. Inside the reduce, we'll call a new function with parameters `accumulator` & `currentNumber`.

In this case, an accumulator is an empty variable that will be populated by the current number for every iteration. The current number refers to the number for every iteration through the array.

Now, inside the reduce method, we'll return `accumulator + current number`. Here I've logged the values of the accumulator & the current number for every iteration. Thus, you'll see all the iteration steps and accumulator getting populated with current number and the value of current number chaning for every iteration, to understand reduce much better.

**ALSO CHECKOUT:- 
[How to Send Emails using Nodemailer using contact form](https://waystoweb.com/contact-form-using-nodemailer/ "Fully Functional Contact Form Using Nodemailer")**

If these methods are hard to understand, you can compare them with the forEach method. The only difference is that in the forEach method you need to create an empty array before calling the method.

This step is completely dropped in these 3 methods. Also, these methods are pretty concise and much required if you are going to learn JavaScript frameworks.

I hope this post was helpful, if it was make sure to share it on your blog, or social media, with friends, this will help us a lot. If you are facing any doubts or have content ideas feel free to drop them in the comments!