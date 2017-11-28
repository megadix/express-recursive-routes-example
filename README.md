# Automatically configure recursive routes in Express.js

Example Node + Express.js project that shows how to recursively configure all routes in a directoy.

The project was created with IntelliJ IDEA "Node Express App" wizard using
[express-generator](https://www.npmjs.com/package/express-generator) version 4.15.5

# Quickstart

**NOTE** you can use `npm` instead of `yarn` in the commands below.

## Build

```
yarn install
```

## Run

```
yarn start
```

You can now access application at:  
http://localhost:3000/

# Usage

Instead of manually requiring all routes, e.g.:

```js
var index = require('./routes/index');
var users = require('./routes/users');

app.use('/', index);
app.use('/users', users);
```

you can let `route-utils.js` function `mountRoutes()` do the magic:

```js
const routeUtils = require('./route-utils');
routeUtils.mountRoutes(app, './my-routes-folder', '/api');
```

If your routes are under `./routes` directory and you want to map them directly under root path you can skip the 2nd and
3rd parameters:

```js
routeUtils.mountRoutes(app);
```
