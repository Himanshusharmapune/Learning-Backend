//const { createServer } = require('node:http');
import http from "http"
import {a} from "./export.js"
console.log(a)
import {b} from "./export.js"
console.log(b)




const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Himanshu sharma</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});  
  