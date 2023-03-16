const express = require('express');
const router = require('./routes');

const app = express();

app.use(express.json()); // Middleware to enable body in the request

app.use(router);

app.listen(3333, () => console.log('Server started at http://localhost:3333'));
