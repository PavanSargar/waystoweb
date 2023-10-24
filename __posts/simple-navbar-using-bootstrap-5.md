---
title: "Simple Responsive Navbar Using Bootstrap 5"
date: "2021-05-05"
categories:
  - "web-development"
coverImage: "https://ik.imagekit.io/waystoweb/waystoweb/04/Copy-of-for-thumbnail-2.png?updatedAt=1682356241498"
author: "Pavan Sargar"
---

![Simple Responsive Navbar Using Bootstrap 5](https://ik.imagekit.io/waystoweb/waystoweb/04/Copy-of-for-thumbnail-2.png?updatedAt=1682356241498)

Navbar is one of the important parts of your website, if it's not designed properly, not responsive, no proper color, etc. It can severely affect the user experience of your visitors. Also, Google prefers to rank sites that have a simple and user-friendly Navigation option.

Today, I've created a simple Navbar using [**Bootstrap**](https://getbootstrap.com/ "Bootstrap") 5 and some additional CSS. The benefit of this Navbar is that you can copy the snippet and reuse it for any projects and can customize it accordingly.

This is what we'll get in the end!

![Simple Navbar using Bootstrap](https://ik.imagekit.io/waystoweb/waystoweb/04/navbar-using-bootstrap-1024x161.png?updatedAt=1682356241542)

Responsive.

![Simple Navbar using Bootstrap](https://ik.imagekit.io/waystoweb/waystoweb/04/mobile-toggler-e1620230083874.png?updatedAt=1682356241492)

So, let's get started.

## **Simple Navbar using Bootstrap 5**

### index.html -

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio Website</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <section id="nav-section">
      <nav class="container navbar navbar-expand-md navbar-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="nav-elements collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav text-center ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js"
      integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

### index.css -

```
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');

body {
    font-family: "Roboto Condensed", sans-serif;
    background-color: #C3A9FF;
}
#nav-section{
    font-size: 1.5rem;
    margin: 5% 7%;
}
.navbar-brand {
    font-size: 2rem;
    transition: .2s ease-in-out;
}
.navbar-brand:hover {
    transform: scale(1.1);
}
.nav-link {

    margin-left: 25px;
    transition: .2s ease-in-out;
}
.nav-link:hover {
    transform: scale(1.1);
}
```

## Code Explanation

If you are familiar with bootstrap 4, then it's similar to it. But, if you don't have any idea about Bootstrap, or trying to learn bootstrap then this explanation is for you!

### Understanding "**Nav**" Element in Bootstrap -

```
<nav class="container navbar navbar-expand-md navbar-light">
<!-- code -->
</nav>
```

Using plain **nav** element, won't work, you have to add those bootstrap classes.

**Container** class will add bootstrap styles that have fixed padding and margin for a division. The **navbar,** will initialize the navbar styles and a responsive collapsing menu by using class: **navbar**\-**expand-md**.

Now, all of the code will go inside this section.

**_You might also like:_**

## Navbar Brand & Responsive Mobile Toggler -

```
<a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
<span class="navbar-toggler-icon"></span>
```

Creating a navbar brand is super easy, just add a class: **navbar-brand** to any element, it's preferred to use <**a href="#" />** tag.

Now, the most important is the responsiveness of the navbar, that's the most important right?

In Boostrap creating a responsive website is super easy. Create a button element, and the given classes and attributes. Class: **navbar-toggler** enables the toggle button, which is like a hamburger icon.

The bootstrap attributes, **data-bs-toggle="collapse"**, as the name suggests, enable the collapsing functionality, when we click on the button, it will expand or collapse the **nav-links**.

**data-bs-target="#navbarNav"**, is like a mark, and when we add this mark or the same **id="navbarNav"** to a **div** element that contains nav-items, then it will know what to display when clicked on toggler.

```
<div class="nav-elements collapse navbar-collapse" id="navbarNav">
```

The remaining attributes are important and need to be added to work this properly.

Finally, you can adjust the alignment of the items, change styles, and even more with some CSS and make your website not only interactive but also visually impeccable.

So, this was the simple responsive navbar using bootstrap and CSS, and I hope you liked it!

Thanks if you've scrolled this far, if you did then make sure to share this post with your friends,  
because "Sharing is Caring" right?
