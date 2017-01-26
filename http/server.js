const http = require('http');
const qs = require('querystring');
const makeGreeting = require('../lib/make-greeting');

http.createServer((req, res) => {
    const split = req.url.split('?');
    const name = split[0].slice(1);
    const plain = split[1] ? qs.parse(split[1]).plain === 'true' : false;
    
    const greeting = makeGreeting({ name, plain });
    res.write(greeting);
    res.end();
    
}).listen(8080);