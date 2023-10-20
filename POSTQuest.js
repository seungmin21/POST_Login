const http = require('http');
const querystring = require('querystring');

http.createServer((request, response) => {
  if(request.method === 'POST' && request.url === '/sub') {
    let body = '';
    request.on('data', chunk => {
      //  9번째 줄에 무언가 입력한게 아니기 때문에 console.log을 찍어도 아무것도 나오지 않는다.
      body += chunk.toString()
    })
    // 마찬가지 본문에 넣을 데이터는 아직 아무것도 넣은게 아니기 때문에 콘솔을 찍어도 아무것도 나오지 않는다.
    request.on('end', () => {
      querystring.parse(body);
    })
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(`hello`);
  }
  console.log(body);
})
