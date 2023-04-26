---
title: "How to Host your first React App for Free!"
date: "2022-04-25"
categories:
  - "react"
  - "web-development"
coverImage: "https://ik.imagekit.io/waystoweb/waystoweb/23/How-to-host-your-Reac-app.png?updatedAt=1682356896899"
author: "Pavan Sargar"
---

How to host your React website for free? what are the best free hosting platforms for React and static websites?

Well, in today's post we’ll learn to host a React website for absolutely free of cost, and that too at a fast and secure server with a free SSL certificate.

So, let's get started!

## #Step 1 - Setting up React App

Have you already created your React app and are ready to deploy it? Or even if you don’t have a React website, you don’t have to worry, we’ve got you covered.

If you have it ready feel free to skip over to step 2.

Head over to this [**Code Sandbox**](https://codesandbox.io/s/dark-mode-tutorial-forked-ilnbhm?file=/src/App.js), I’ve created a small project, just download the files from the top left down arrow.

![How to host React website for free!](https://ik.imagekit.io/waystoweb/waystoweb/23/Screenshot-2022-04-25-200508.jpg?updatedAt=1682356896903)

After downloading, extract the zip files and head into the folder. Now, open the terminal inside that folder, and now let’s install the dependencies using the below command.

```bash
npm install

#or

yarn install
```

_Note - Just in case the above command doesn’t work, try `npm install --force` and after that run `npm audit fix --force`._

## #Step 2 - Let’s make React app Deploy Ready!

Now, as we have all the files we need, let’s build our application so that we can deploy it. Head over to the terminal and enter the below command and hit enter.

```bash
npm run build

#or

yarn run build
```

These commands will build your React application to the chunk of JavaScript and HTML files, it’s an optimized build of React app, which is a lot lighter than the enviornment we code in.

After the build is completed, you will get a new folder at the root of your project named `_build_`. Head over to the path and open the files in a file explorer and select the build folder.

**Also check out,**  
**[React Styled Components for Beginners](https://waystoweb.com/react-styled-components-beginners-guide/ "React Styled Components: Beginners Guide")**

## #Step 3 - Let’s Deploy your first React Application!

There are many free platforms where you can host your React application for free. I will discuss and compare other platforms in later posts. Today, we’ll use [**Netlify**](https://www.netlify.com/) to host our React application.

- Visit Netlify, sign up and create an account if you don’t have one.
- After creating an account, setup the Netlify and when you arrive at the page below,

![How to host React website for free](https://ik.imagekit.io/waystoweb/waystoweb/23/deploy2.jpg?updatedAt=1682356896993)

you’ll get multiple options to deploy your project, here we’ll choose manual deploy method.

- Now, get the build folder that you’ve already selected.
- Drag and drop the build folder to that upload box below.
- Your project now will be deployed in just couple of seconds.

![How to deploy React app for free](https://ik.imagekit.io/waystoweb/waystoweb/23/deployed3-1024x341.jpg?updatedAt=1682356896915)

As you can see our project is now deployed to the URL coloured in blue. I know your URL might look gibberish, but you can change the website domain name.

To do that,

- Go to the **Domain settings.**
- Select the **Options** next to your domain name.
- Edit and save, that’s it.

Your web app is now deployed, that’s easy it is to deploy React applications. Though there are many methods to do so, and we’ll learn more about them in the future.

Just like Netlify, there is Vercel, Github Pages, Cloudflare Pages, etc. You can use same method or deploy it using Github or any version control service to automatically update your website or web app.

I hope this post was helpful, if it was make sure to hit that bell icon at bottom left corner to never miss latest posts!
