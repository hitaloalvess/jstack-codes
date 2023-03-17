const express = require('express');
require('express-async-errors');

const router = require('./routes');

const app = express();

app.use(express.json()); // Middleware to enable body in the request

app.use(router);

app.use((error, req, res, next) => {
    console.log(error);
    res.sendStatus(500);
});

app.listen(3333, () => console.log('Server started at http://localhost:3333'));