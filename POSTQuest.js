const http = require('http');

http.createServer((request, response) => {
  if(request.method === 'POST' && request.url === '/sub') {
    let body = '';
    request.on('data', chunk => {
      body += chunk.toString()
    })
  }
})