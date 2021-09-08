 ### 1. 인증 보안
 
  - 인증 vs 권한
    * 인증: ex) 버스 티켓을 소지했다는 가정하여 버스를 탑승할 수 있음
    * 권한: ex) 권한에 따라 임산부석, 경로석, 장애인석 착석할 수 있음.

  - 세션 토큰의 차이
    * 세션: ex) 아파트 출입 시 경비 아저씨가(서버 역할) 주민 체크하여 통행
    * 토큰: ex) 주민이 직접 아파트 출입 카드로 통행

  - access token And refresh token
    * access token: 권한 획득하기 위한 토큰 (사용 기간 낮음)
    * refresh token: access token을 리뉴얼하기 위한 토큰 (사용 기간 높음)
    * 토큰을 두개로 나눈 이유는 access token을 만약 악의적인 해커가 탈취하여 아무 요청을 할수 있으므로 사용 기간을 낮추고 refresh token을 통해 

  - 각 보안 방법론 정리
    
    ![스크린샷 2021-09-08 오후 5 18 59](https://user-images.githubusercontent.com/78064720/132518578-c5540df0-e58b-42eb-a1b7-01eff477b03f.png)

