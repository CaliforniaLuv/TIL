### 1. cookie

  - Node.js 활용
  
    ```js
    var http = require('http');

    http.createServer(function(request, response){
      response.writeHead(200, {
        'Set-Cookie':[
            'aespa_calling=Naevis', 
            'where_cookie=Kwangya',
            `Max-Age=${60*60*24*30}`,
            'Secure=true;',
            'HttpOnly=true',
            'Path=/'
            ]
        });
    response.end('Cookie!');
    }).listen(3300);
    
    ```
    
  - 쿠키 사용 용도
    * 개인화(Personalization) - 사용자가 원하는 테마 및 별도 기능 세팅
    * 세션 관리(Personalization) - 서버에 저장해야할 로그인, 장바구니, 광고 팝업창 등 정보 관리
    * 트랙킹(Tracking) - 사용자 행동을 기록 및 분석 후 맞는 맞춘 광고 렌더링

  - 쿠키 특징
    * 쿠키(cookie)는 클라이언트와 서버 간의 stateless(무상태성)을 보완
    * javascript를 통해 쿠키 전송 내역을 탈취할 수 있기에 패스워드 및 중요 정보는담아주지 말아야 할 것

### 2. 블로깅

  - 쿠키(Cookie)
