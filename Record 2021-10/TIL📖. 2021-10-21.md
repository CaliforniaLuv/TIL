### 1. Token 

  - Header
    * Header 영역에는 두가지 옵션 존재
      1. typ: 토큰의 타입을 지정하는데 JWT를 의미
      2. alg: 해싱 알고리즘이며 토큰을 검증할 경우 signature 영역에서 사용

  ```js
  
  const header = {
    "typ": "JWT",
    "alg": "HS256"
  };
  
  ```
  
  - Payload
    * Payload 영역에는 토큰에 담아야할 정보를 입력해야 하며 옵션 존재
      1. iss: 토큰 발급자
      2. aud: 토큰 대상자
      3. sub: 토큰 제목
      4. nbf: Not Before 이라는 단어를 의미로 토큰 활성 날짜를 뜻함
      5. exp: 토큰의 만료시간
      6. iat: 토큰이 발급된 시간, 이 값을 통해 토큰의 age가 얼마나 남았는지 판단
      7. jti: JWT의 고유 식별자이며, 중복적인 처리를 방지하기 위해 사용되어 주로 일회용 토큰에 사용

  ```js
  
  const payload = {
    "email": "caifornialove.96@gmail.com",
    "userName": "Lee",
    "iss": "CaliforniaLuv.com",
    "exp": "1800000000000",
  };
  
  ```
  
  - signature
    * JWT 최종 구간으로 생성한 header의 인코딩값과 payload의 인코딩값을 결합한 후 비밀키(Salt)에 해쉬 알고리즘 가동

  ```javascript

  HMACSHA256(
    base64UrlEncode(header) + "." +
    base64UrlEncode(payload),
    secret)

  ```
  
 ### 2. 블로깅
 
  - 토큰(Token)
