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
    fs.readFile('post.html', 'utf8', (err, data) =>{
      if (err) {
        console.log("post readFile 작성단락이 틀렸다.")
      } else {
        // text/plain(있는 그대로)
        // text/html로 Content-Type을 지정하면 작성했던 html이 html 내용으로 응답한다.
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
      }
    })
  }
}).listen(3000)