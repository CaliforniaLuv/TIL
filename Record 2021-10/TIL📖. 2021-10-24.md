### 1. OAuth 동작 원리

  - 순서도
  
    ![스크린샷 2021-10-24 오후 1 05 00](https://user-images.githubusercontent.com/78064720/138586752-c092ff93-b492-4ad1-8d35-2c15a5adfd44.png)
  
  - OAuth 용어 정리

    * Resource Owner: 액세스 상태인 리소스의 유저

    * Client: Resource Owner를 대신하여 보호된 리소스에 액세스하는 응용프로그램

    * Resource server: Client의 요청을 수락하고 응답하는 서버

    * Authorization server: Resource server에게 액세스 토큰을 발급해주는 서버

    * Authorization grant: 클라이언트가 액세스 토큰을 얻을 때 사용하는 자격 증명

    * Authorization code: access token을 발급받기 전에 필요한 코드

    * Access token: 보호된 리소스에 액세스하는데 사용되는 credentials

    * Scope: scope는 토큰의 권한을 정의하며 주어진 액세스 토큰을 사용하여 액세스할 수 있는 리소스 범위


  - Authorization code 특징
  
    * Access token을 바로 클라이언트에 전달하지 않아 정보 유출 관련 보안에 우수
    * Authorization server는 Cleint와 Resource server 사이 중재 역할 수행
    * 로그인할 경우 해당 페이지 URL은 response_type=code로 넘김
