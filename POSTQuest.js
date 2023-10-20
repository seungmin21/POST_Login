const http = require('http');

const server = http.createServer((request, response) => {
  let body = '';
  request.on('data', chunk => {
    body += chunk.tostring();
  })
})