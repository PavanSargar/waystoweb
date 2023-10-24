---
title: "Web Scraping in Nodejs for Beginners"
date: "2021-10-13"
categories: 
  - "web-scraping"
coverImage: "https://ik.imagekit.io/waystoweb/waystoweb/18/Copy-of-thumbnail.jpg?updatedAt=1682356719266"
author: "Pavan Sargar"
excerpt: "Learn the basics of Web Scraping in Nodejs for beginners using Puppeteer Library by taking a screenshot and scraping the data from HTML Elements."
---

If you are wondering if only Python can do the web scraping then you are wrong. You can pretty much do everything in Nodejs too.

Today, in this post we'll learn how to do web scraping in Nodejs using the Library Puppeteer. Even if you are a beginner and don't know about web scraping, you don't have to worry about it. This post is completely beginner-friendly and will teach you the basics of web scraping by actually scraping some data.

_Prerequisites - You don't need to be an expert in web development, but a prior knowledge of the HTML Elements, CSS Classes, and how the browser works will be helpful._

## What is Puppeteer?

Puppeteer is a Nodejs library for web scraping. It is developed by chrome. It uses a headless browser called Chromium. With the help of Puppeteer, we can easily take screenshots, PDFs, navigate through web pages, and get the information of web pages.

_Check out [Puppeteer's](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi-_4rQ_MbzAhVEjOYKHX9sD_MQFnoECAMQAQ&url=https%3A%2F%2Fgithub.com%2Fpuppeteer%2Fpuppeteer&usg=AOvVaw1Hx-77yP7soeMyNgd7tRwC) official documentation to learn more._

## Getting Started with Puppeteer -

Head into your terminal and create a Nodejs project then type the below command in the terminal to install Puppeteer.

```bash
npm i --save puppeteer
```

The installation will take time as it will also install a browser called Chromium. After installation is completed, let's initialize the package.

```javascript
//initializing puppeteer
const puppeteer = require("puppeteer");

(async () => {
    //main code here
})();
```

The above syntax might be unfamiliar and you might have never used it. But it's actually just an Asynchronous function, which calls itself. As in a self-calling Asynchronous function. Using `async` will make sure that you wait until the website loads completely and fetch or scrape the data you want.

## Let's Scrape our First Data -

By default when your run your app, the browser will be launched in a Headless mode that is you won't be seeing the actions happening and you'll get the data behind the scene.

But, let's first do it without the Headless mode, it will be fun to see how it works. We will be taking a Screenshot of a website using Puppeteer.

Paste the below code into your code editor and run our app using `node app.js`

```javascript
(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://www.waystoweb.com");
    await page.screenshot({path: "myblog.png"});

    await browser.close();
})();
```

- So, in the above snippet, we are first launching the browser, and setting the headless mode as false.
- Next, we are opening a new tab in the browser.
- Visiting the website, in this case, I am going to my own blog.
- Then after the website is loaded completely, then we are taking a Screenshot and having it in the directory as `myblog.png` file name.
- At last, closing the browser.

**Also check out:- 
[Best Laptops for Programmers under 40000](https://waystoweb.com/best-laptops-for-programmers/ "Best Laptops for Programmers Under 40000 in 2021")**

## How to Access HTML Elements in Puppeteer?

Accessing HTML Elements in Puppeteer is just as simple as using plain old JavaScript DOM. But to use that built-in JavaScript functions, we need to use a function called `evaluate()`.

```javascript
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://pawansargar.herokuapp.com/");

  const grabDescription = await page.evaluate(() => {
    const description = document.querySelector(".about-details p");
    return description.innerText;
  });

  console.log(grabDescription);
  await browser.close();
})();
```

In the above snippet,

- First, we are creating a variable, which will call the evaluate function and we'll be using it on the website that needs to scrape.
- Then we can hold the element that we want to get, here I am getting a paragraph element inside a `div` which has a class of `about-details`.
- After successfully grabbing the element, we'll return it.
- We'll log that `grabDescription` which will give us the fetched data in the terminal.

![web scraping in nodejs for beginners](https://ik.imagekit.io/waystoweb/waystoweb/18/Capture.png?updatedAt=1682356719403)

And this is what we get in the terminal after running our app. So I am now scraping my own portfolio website and getting the description that I wrote.

If you want more posts on web scraping in Nodejs feel free to write it down in the comments below and also make sure to follow our newsletter to never miss such interesting posts.