const http = require('http');
const querystring = require('querystring');

const server = http.createServer((request, response) => {
  let body = '';
  request.on('data', chunk => {
    body += chunk.tostring();
  })
  request.on('end', () => {
    querystring.parse(body);
  })
})