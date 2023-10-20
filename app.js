const http = require('http');
const fs = require('fs');

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
}).listen(3000)