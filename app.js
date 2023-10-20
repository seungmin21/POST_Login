const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer((request, response) => {
  if(request.method === 'GET' && request.url === '/') {
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        console.log("다시 작성");
      } else {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
      }
    })
  }
  if(request.method === 'POST' && request.url === '/sub') {
    let body = '';
    request.on('data', chunk => {
      body += chunk.toString()
    })
    request.on('end', () => {
      querystring.parse(body);
    })
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(`hello`);
  }
}).listen(3000)