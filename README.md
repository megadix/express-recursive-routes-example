# Automatically configure recursive routes in Express.js

Examples for [express-recursive-routes](https://github.com/megadix/express-recursive-routes), a small library to
recursively configure Express.js routes in a folder.

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

There are different scenarios available, each showing a different feature of `express-recursive-routes`.

To activate them you need to define the `SCENARIO` environment variable, e.g.:

```
SCENARIO=custom-dir node bin/www
```

For available scenarios see `app.js` source code.
