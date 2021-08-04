# TIL 📖 ✏️

   
 ### 1. node.js
 
  - HTTP 트랜잭션 해부
    * request, response를 통해 서버 측 구성
     
     ```javascript
     const http = require('http');

    http.createServer((request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request.on('error', (err) => {
    console.error(err);
    }).on('data', (chunk) => {
    body.push(chunk);
    }).on('end', () => {
    body = Buffer.concat(body).toString();
    // 여기서부터 새로운 부분입니다.

    response.on('error', (err) => {
      console.error(err);
    });

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    // 주의: 위 두 줄은 다음 한 줄로 대체할 수도 있습니다.
    // response.writeHead(200, {'Content-Type': 'application/json'})

    const responseBody = { headers, method, url, body };

    response.write(JSON.stringify(responseBody));
    response.end();
    // 주의: 위 두 줄은 다음 한 줄로 대체할 수도 있습니다.
    // response.end(JSON.stringify(responseBody))

    // 새로운 부분이 끝났습니다.
    });
    }).listen(8080);
    
     ```
     
     * 만일 해당 서버 측의 디버깅을 원할 경우 ```node --inspect``` 활용하는것 추천 (클라이언트 측은 포스트맨)
     
     * cors preflight는 두번의 요청을 진행 함 (1번은 OPTIONS 메서드, 2번째 부터는 원하는 메서드 응용)
     

