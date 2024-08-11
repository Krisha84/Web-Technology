const http = require('http');
const fs = require('fs');
const path = require('path');
const { Server } = require('https');

const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 111;
    res.setHeader('Content-type','text/html');
    res.end('Hello World !!/n');
});

// server.listen(2000 , () => {
//     console.log('Server running at http://127.0.0.1:2000/');
// });

server.listen(port, () => {
    console.log(`Srever running at http://localhost:${port}/`);
});
