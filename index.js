const fs = require('fs');
const http = require('http');
const { Http2ServerRequest } = require('http2');

//////////////////////////////
// FILES

// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);

// console.log('Woooow, you did write the text to another file');

// Non-blocking, asynchronous
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//   });
// });

//////////////////////////////
// SERVER
const server = http.createServer((req, res) => {
  console.log(req);
  res.end('Hello');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Server Listening to requests on port 8000 ...');
});
