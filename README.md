# Angular Node Express Stripe Test

### Technologies used:

```
- HTML
- SCSS
- ANGULAR.JS
- ANGULAR-UI-ROUTER
- WEBPACK.JS
- BABEL/ES6
- NODE.JS
- EXPRESS.JS
- KNEX.JS
- PostgreSQL
- STRIPE.JS
```

### Setup Instructions:

#### Prerequisites:
- 1: postgreSQL ($ brew install pg - for mac users)
- 2: node ($ brew install node - for mac users)

- Initial Setup:

```
- FORK/CLONE
- $ npm install
- $ touch .env
- Configure your .env file according to the configuration of the .env.example
- $ createdb stripe_test_db
- $ npm install -g knex
- $ knex migrate:latest
- $ npm install -g nodemon
- $ cd dist && bower install
```

- Running the server in development(needs to be running in it's own tab while the front-end runs in another tab):

```
- $ nodemon (from the root of the application)
```

- Running the front-end in development(needs to be running in it's own tab while the server runs in another tab):

```
- $ npm run dev (from the root of the application, then go to localhost:8080 - this runs webpack dev server)
```

### Building to bundle.js file if you want to push changes:

```
- $ npm run build
- $ git add .
- $ git commit -m"Some Message"
- Confirm that front-end and server work together on localhost 3000: $ nodemon
- $ git push [--remote] [--branch]
```
