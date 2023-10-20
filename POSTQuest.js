const http = require('http');
const querystring = require('querystring');

http.createServer((request, response) => {
  if(request.method === 'POST' && request.url === '/sub') {
    let body = '';
    request.on('data', chunk => {
      body += chunk.toString()
    })
    request.on('end', () => {
      querystring.parse(body);
    })
  }
})