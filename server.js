// loading environment variables
require('dotenv').config(); // config() loads the .env file contents into the process!

// import express package

const express = require('express');

// importing the router

const router = require('./routes/api/router.js')

// instantiate express application

const app = express();

// use express body parser middleware

app.use(express.json());

// use the router

app.use(router);

// listen to port number: 3000
const PORT = process.env.SERVER_PORT;

app.listen(
    PORT,
    () => {
        console.log(
            `Application is connected and listening to port ${PORT}`
        );
    })