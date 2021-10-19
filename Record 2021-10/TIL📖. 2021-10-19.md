### 1. ORM-sequelize

  - ORM

    * 객체와 관계 간의 설정
    * 객체는 우리가 흔히 쓰는 OOP(Object Oriented Programming)의 개념에 해당
    * 관계는 관계형 데이터베이스의 기반인 MySQL, MariaDB를 의미

  - Sequelize 구성
    
    * config: 데이터베이스 연결을 위한 정보(DB이름, 사용자 이름, 비밀번호)가 있음
    * models: ORM 쿼리문이 내장된 메서드(index.js)와 테이블 데이터 타입(table.js)을 객체로 종합
    * migrations: 실제 MySQL상의 데이터베이스 CRUD 작업을 기록하는 구간이며, git과 비슷한 특성을 보유
    * seeders: 해당 테이블의 기본 데이터 삽입을 할 경우 사용


### 2. 블로깅

  - Sequelize ORM 프레임워크
