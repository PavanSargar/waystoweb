---
title: "Simple Weather App Using Nodejs HTTP Request"
date: "2021-08-09"
categories: 
  - "nodejs"
  - "web-development"
coverImage: "https://ik.imagekit.io/waystoweb/waystoweb/14/Copy-of-for-thumbnail-1.jpg?updatedAt=1682356571330"
author: "Pavan Sargar"
---

Today we'll create a simple weather app in Node.js, Express using Openweather API. If you are new to Node.js then creating this simple weather app can really help you to learn how to handle APIs, make HTTP requests & handling the data & rendering it onto the front end.

## Final Output -

You can visit [](https://openweathermap.org/)[https://openweathermap.org/](https://openweathermap.org/), website and get your free API key. If you have ever worked with JavaScript's Fetch API method then it's not pretty much different.

![make a weather app using nodejs & expressjs](https://ik.imagekit.io/waystoweb/waystoweb/14/current-weather-data.jpg?updatedAt=1682356571321)

So, without any further delay let's get started!

_Note: scroll down to get the complete source code link._

## Environment Setup -

If you know [how to set up a Node, Express](https://waystoweb.com/web-server-using-nodejs/ "How to Create a Web Server Using Nodejs 2021?") server go ahead and create it, you don't have to follow everything with this post, you can just follow the major API parts.

### NPM Packages We'll Use -

- Express
- EJS
- Body Parser
- Dot env (optional)

```bash
npm i express ejs body-parser dotenv
```

### Folder Structure -

- Folder
    - Public
        - styles.css
    - views
        - partials
            - header.ejs
        - home.ejs
        - result.ejs
        - error.ejs
    - app.js

You can also create this app without creating these many files, as it's not a large app, but I like to organize them in the case worked on them in the future.

## Basic Server Setup -

```javascript
require("dotenv").config();

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

const tempInfo = [];

//getting routes
app.get("/", (req, res) => {
  res.render("home", {results: tempInfo});
});

app.get("/result", (req, res) => {
  res.render("result", {results: tempInfo});
});

app.get("/error", (req, res) => {
  res.render("error");
});

//continue here

app.listen(3000, function() {
  console.log("Server is running on 3000");
});
```

Nothing too fancy, here we are just creating a basic Express server and initializing some packages like dotenv, Express, HTTP, body-parser, [EJS](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwijxevx_KPyAhUp4zgGHVkEAPoQFnoECAQQAw&url=https%3A%2F%2Fejs.co%2F&usg=AOvVaw3PQSKjYhIOxK90w7Qjbpnu).

`app.set("view engine", "ejs");` This Express function lets us use a third-party template engine, here we are using EJS. `app.use(express.static("public"));` This middleware function will set our default static file location as the public folder, which will help us to serve more static files like CSS or HTML.

You can ignore `const tempInfo = [];` for now, it's just an empty array that will help us to pass the weather data onto the frontend.

Lastly, there are just the app methods, where we will get home, result & error route and listen to the port 3000.

## Getting the Data using HTTP Request Method -

```javascript
app.post("/", function(req, res) {

  const query = req.body.cityName;
  const apiKey = process.env.API_KEY;
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey + "&units=" + unit;

  https.get(url, (response) => {
    let data = ""
    response.on("data", (chunk) => {
      data += chunk;
      if (response.statusCode === 404 || response.statusCode === 400) {
        res.redirect("/error");
      } else {
        const weatherData = JSON.parse(data);
        console.log(weatherData);
        const temp = weatherData.main.temp;
        const description = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const iconURL = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";
        const result = {
          query: query,
          temp: temp,
          description: description,
          iconURL: iconURL,
         }
        tempInfo.unshift(result);
        res.redirect("/result");
      }
    });
  }).on("error", (err) => {
    console.log("Error:" + err.message);
  });
});
```

Now, we'll make a post request on the root route or the home route. I am using environment variables to hide my API key, you can also use them if you are going to deploy on the web.

Getting the user input data, which will be the name of the place or city as `query`. Setting the unit as metric, you can also check [openweathermap](https://openweathermap.org/current) API docs for more info on the URL & parameters.

### HTTP Request Method -

**HTTP** is the native Nodejs module or standard library, so you don't need to install any third party package to use this method. **HTTP Request** method let us request any **URL** and get the response (data) back.

You can read more about HTTP at [Nodejs official docs](https://nodejs.org/api/http.html#http_http).

`https.get` method takes two parameters,

- URL to be requested &
- Callback (response data)

It's a good practice to hold the `data` received in a variable before using it directly to avoid any futher errors. Now, we'll use `reponse.on` method which also has two parameters,

- `"data"` (if there's data)
- Callback (chunk or the data recieved)

Now, if we parsed the received data and console logged it, we'll get a JSON object which can be used to grab the required data.

![Simple weather app using nodejs & express](https://ik.imagekit.io/waystoweb/waystoweb/14/data-recieved.jpg?updatedAt=1682356571329)

We will grab the data which is required in a variable, and store them inside an object called `result` and `unshift` that object on to an array `tempInfo`.

Finally, passing the data to the result page using `res.render` EJS method.

## EJS files -

home.ejs

```markup
 <body>
    <div class="container center">
      <h1 class="center">🌥Weather Data Search!</h1>
      <div class="search">
        <form action="/" method="post">
          <input
            id="cityInput"
            placeholder="ENTER CITY NAME"
            type="text"
            name="cityName"
          />
          <button class="waves-effect waves-light btn-large" type="submit">
            Get Data
          </button>
        </form>
      </div>
    </div>
  </body>
```

result.ejs

```markup
<div class="result">
  <% let result = results[0]; %>
        <div class="row">
                <div class="col s12 m12">
                  <div class="card blue-grey darken-1 z-depth-3">
                    <div class="card-content white-text">
                    <h1 class="card-title"><%= result.query %></h1>
                      <h1><span><%= result.temp %> &#8451;</span> </h1>
                      <p><%= result.description %></p>
                      <img src=<%= result.iconURL %> alt="">
                    </div>
                  </div>
                </div>
        </div>
  <a href="/"><button class="waves-effect btn-large">Check Other Location</button></a>
</div>
```

error.ejs

```markup
<div class="error card blue-grey darken-1 z-depth-3">
    <div class="card-content white-text">
        <div class="card-title">
            <h1>opps!! something went wrong please try again!</h1>
        </div>
    </div>
    
</div>
   
    <a href="/" role="button"><button class="waves-effect btn-large">go to home page</button></a>
```

[Download Source Code](https://github.com/PavanSargar/simple-weather-app.git)

I hope this post was helpful, if you are facing any issues make sure to checkout the complete source code. If issue still persists, drop down in the comments.

Also, share this post with your friends who are struggling to handle APIs.