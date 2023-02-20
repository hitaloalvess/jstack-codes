const http = require('http');
const { URL } = require('url');
const bodyParser = require('./helpers/bodyParser.js');

const routes = require('./routes.js');

const server = http.createServer((req, res) => {

    let { pathname, searchParams } = new URL(`https://localhost:3333${req.url}`);

    const pathnameSplit = pathname.split('/').filter(Boolean);
    let id = null;

    if (pathnameSplit.length > 1) {
        pathname = `/${pathnameSplit[0]}/:id`;
        id = pathnameSplit[1];
    }

    const route = routes.find(route => pathname === route.endpoint && req.method === route.method);

    if (route) {
        res.send = (statusCode, body) => {
            res.writeHead(statusCode, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(body));
        }

        req.query = Object.fromEntries(searchParams);
        req.params = { id };

        if (['POST', 'PUT', 'PATCH'].includes(route.method)) {
            bodyParser(req, () => route.handler(req, res));
        } else {
            route.handler(req, res);
        }

    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(JSON.stringify({ "error": "User not found!" }));
    }


});

server.listen(3333, () => console.log(`Server listen in port 3333`));


// Criar helper bodyParser

// Criar controllers de usuário