### 1. express
 
  - cookie
    * req 요청인 경우 cookie```s``` 
     - req.cookies.[cookie name] 쿠키를 확인 하는 방법
    * res 응답인 경우 cookie
     - res.cookie(‘cookie name’, ‘cookie value’, option) 쿠키를 저장하는 방법
      1. maxAge: 쿠키의 만료 시간을 밀리초 단위로 설정
      2. expires: 쿠키의 만료 시간을 표준 시간 으로 설정
      3. path: 쿠키의 경로 (default: /)
      4. domain: 쿠키의 도메인 이름 (default: loaded)
      5. secure: HTTPS 프로토콜만 쿠키 사용 가능
      6. httpOnly: HTTP 프로토콜만 쿠키 사용 가능
      7. signed: 쿠키의 서명 여부를 결정
  
  
  
