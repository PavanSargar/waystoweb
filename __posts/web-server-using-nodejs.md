---
title: "How to Create a Web Server Using Nodejs 2021?"
date: "2021-05-02"
categories: 
  - "nodejs"
  - "web-development"
coverImage: "https://ik.imagekit.io/waystoweb/waystoweb/03/Copy-of-for-thumbnail-1.png?updatedAt=1682356216708"
author: "Pavan Sargar"
---

![Web Server Using Nodejs ](https://ik.imagekit.io/waystoweb/waystoweb/03/Copy-of-for-thumbnail-1.png?updatedAt=1682356216708)

Have you done creating static websites using HTML, CSS & JavaScript? also, running them using VS Code Live Server extension?

Now, it's time to take a step ahead and serve your static files to a real web server. Using your own created web server will help you to understand the fundamentals of backend programming. This will also start your journey in becoming the full stack web developer.

To create webserver we are using NodeJs & Express js, which will help us to create a webserver in just a few lines of code.

**But, what is NodeJs?**

Nodejs is a JavaScript runtime environment, based on chromes V8 engine. NodeJs enable us to use the power of JavaScript on the server-side. NodeJs is also one of the fastest at execution, making your website serve even faster.

### Why NodeJs?

- Based on JavaScript, so no need to learn any other programming languages.
- Faster execution, light-weight and flexible.
- NPM package manager which makes NodeJs one of the BEST!
- Netflix, Linkedin, Paypal, Medium, etc. these top companies prefer Nodejs.

## How To Install NodeJs?

![How to create a web server using nodejs](https://ik.imagekit.io/waystoweb/waystoweb/03/nodejs-min-1024x414.jpg?updatedAt=1682356216703)

- Visit [NodeJs.org](https://nodejs.org/ "NodeJs"), download the **LTS** version.
- Double click and install the **MSI** package.
- Click **next** on every step and hit **install**.
- You can uncheck **Chocolatey** as it is not required.
- After installation is finished, we are good to go.

![how to create a webserver using nodejs](https://ik.imagekit.io/waystoweb/waystoweb/03/nodejs-setup-min.png?updatedAt=1682356216705)

keep this uncheck

We can check if NodeJs is installed successfully using [**cmd**](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj58pT6r6vwAhXP4XMBHdndDOAQFjAJegQIGhAD&url=https%3A%2F%2Fwww.ionos.com%2Fdigitalguide%2Fserver%2Ftools%2Fopen-command-prompt%2F&usg=AOvVaw1Yn710NYzpSrt9NV8zhx08 "CMD") or **command prompt** with this simple command.

```powershell
$ node --version   //hit enter
//output:  v14.15.4
```

If you get the version name, then installation is successful.

## **Creating a Web Server Using NodeJs & Express**

#### Step 1 -

- Create a new folder, open it in Visual Studio Code.
- Create 2 files "index.js" & "index.html"

#### Step 2 -

- Open **TERMINAL** in VS Code.
- Now, type the below code and hit **ENTER**.

```powershell
> npm init -y
```

- This code will initialize the **NPM** package, and create a **package.json** file.
- Now type the below code and install the **Express** framework using **NPM**.

```powershell
> npm install express
```

- Check if **Express** is installed using this command.

```powershell
> npm list epxress
```

- If you get the version number, then express is installed successfully.

#### Step 3 -

- In index.js, paste the below code and save the file.

```javascript
const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function() {
    console.log("server is running on port 3000");
});
```

- In index.html paste the below code and save the file.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Server Using Nodejs</title>
</head>
<body>
    <h1>Successfully Created Server!</h1>
    
</body>
</html>
```

#### Step 4 -

- Now, in the terminal type below code and hit enter.

```powershell
> node index.js  //hit enter

//output: server is running on port 3000
```

- If you see the "server is running on port 3000", then congratulations, you've successfully created your first web server using Nodejs and Express!
- You can access your server using, "localhost: 3000", inside any browser in URL.

```http
localhost:3000
```

![How to create a webserver using nodejs 2021](https://ik.imagekit.io/waystoweb/waystoweb/03/sucsss-min.png?updatedAt=1682356216687)

## Code Explanation

```javascript
const express = require("express");
const app = express();
```

After installing the express, we need to **require** it. Requiring is like getting it in the "index.js". Now, as we've got the express, it's time to call it.

If you are familiar with the JavaScript Function call, it's just like that. We call or initialize the express to use it to access all of its features.

```javascript
app.listen(3000, function() {
    console.log("server is running on port 3000");
});
```

Here, we are using express to listen our server on a particular port which in this case is "3000" and as second method using a anonymous function to check whether our server is running or not.

```javascript
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});
```

Finally, we are getting a route, in this case, it's **Root Route**, which is also called the home route. Then passing a function with two parameters **request** & **response**.

Further, in the function, we can use these two-parameter, either to get the data or to request the data and to send the data or to give some response. In this case, we've sent a static "index.html" file using "res.sendFile" method to serve on the browser.

Also, checkout:

We have successfully created a Web Server using NodeJs with just simple lines of code. I hope that you got your answer and got to learn something new today.

If you liked my content till here and thanks for reading by the way, please make sure to share it with your friends!

Because, "Sharing is Caring"!