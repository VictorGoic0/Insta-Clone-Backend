# Insta-Clone Backend

## Dependencies Used

- Node
- Express
- PostgreSQL (Production)
- SQLite (Development)
- Knex
- Knex Cleaner
- Bcryptjs
- Jsonwebtoken
- Cors
- Helmet
- Dotenv
- Nodemon (Development)

## Running The Project

If you would like to run this project locally, `cd` into the repository and run `yarn`. This will install the needed dependencies. Next you can run either `yarn start` to run the server using node or `yarn server` to run the server using nodemon. The purpose of using nodemon is to restart the server any time you make a change and save.

## Restrictions

If you would like to make a request to the profiles endpoint, a valid **JSON web token** is required in your request headers.authorization. For posts and comments, making a **GET** request does not require a **JSON web token**, but **POST, DEL,** and **PUT** requests do.

## Description

This project is a RESTful API built using Node and Express. The purpose of this project is to provide a Backend for my Insta-Clone client. User registration, login, post and comment creation, deletion, fetching, or editing, are all handled here. This project was deployed on `Heroku`.

- The server is run using Node.
- Express is a minimalist Node web application framework for building APIs.
- PostgreSQL is the database used for production. I used SQLite for development.
- Knex is a SQL query builder for JavaScript.
- Knex Cleaner is a Knex dependency for cleaning up seed data.
- Jsonwebtoken is used for authenticating users.
- Bcrypt is used for hashing passwords.
- Helmet adds a base layer of security by hiding basic info about the API when interacting with it.
- Dotenv allows the server to interact with environment variables.
- Cors is a dependency used to allow Cross Origin Resource Sharing. This allows my Frontend client to interact with the Backend.
