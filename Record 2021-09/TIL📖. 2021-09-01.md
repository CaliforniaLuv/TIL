 ### 1. MVC
 
  - Model <=> Controller <=> View 각 UI, 비즈니스 로직을 분리하여 개발하는 소프트웨어 공학 방법론
 
  - Model
    * 데이터베이스에 속한 테이블의 필드 데이터 타입을 객체로 구현하여 영역
    * Data와 가장 접근되어 있음
  
  - Controller
    * 프로그램을 통해서 어떻게 풀어 나갈 것인가에 대한 비즈니스 로직을 통해 기능을 구현하는 영역
    * 라우터로 연결된 구간

  - View
    * 클라이언트 최전선에 위치되어 렌더링을 책임지는 영역

 ### 2. ORM
 
  - Model을 기술하는 도구로써 데이터베이스 세계와 프로그래밍 언어 사이의 장벽을 넘어 통역해주는 역할
  - SQL 쿼리문을 굳이 작성하지 않아도 데이터베이스 엔티티를 객체로 저장


 ### 3. sequelize ORM
 
  - sequelize ORM은 DB - node.js를 연결해주는 대표적인 라이브러리
  - Migration 
    * 실제 DB 프로그램(MySQL)에 데이터를 전송하는 구간
    * Model과 똑같은 필드 데이터 타입 객체를 지니고 있는데, Model 하우스는 일종의 모델하우스와 같이 실제 내부 환경(MySQL)을 보여주는 건물 내부도 역할인 셈

  ```
  ** Migration 생성 명령문 **
  npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
  ```
  * Users라는 테이블에 firstName:string,lastName:string,email:string 형태의 데이터 타입을 
