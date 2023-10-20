const http = require('http');

http.createServer((request, response) => {
  if(request.method === 'GET' && request.url === '/') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('Hello world');
  }
}).listen(3000)