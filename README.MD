# Web Forum Application

[Live Demo]()

## Technologies

React, Redux, Materialize.css, Node.js, Express.js, MongoDB

## implementation

####Simple Forum App:

A user can sign up/in and post/update/delete comments

Others can read and like all posts and search for specific user's posts

Implemented Session Authentication


## Install

For local test, I recommends to install tools below globally
```sh
npm install -g webpack webpack-dev-server babel nodemon cross-env
```

## Running Scripts

- `npm run clean` Cleans all production files
- `npm run build` Build Server and Client side code to production code
- `npm run start` running in production environment (http://localhost:3000)
Warning: production environment does not automatically re-run the server and webpack moduler and minimize debugging warning
- `npm run development` running in development environment (http://localhost:4000)

Warning: If you deploy in Cloud9 , Change webpack.dev.config.js, line 7 from http -> https.
