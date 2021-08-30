 ### 1. MySql
 
  - join 사용법
    * LEFT JOIN: A값의 전체와, A의 KEY 값과 B KEY 값이 같은 결과를 리턴 ex) A와 B의 교집합 추가 및 B의 Null 값 또한 삽입
    * LEFT JOIN(IS Null): where 메서드를 활용하여 B.id IS Null 작성할 경우 A와 B의 연결이 없는 Null 값만 삽입
    * INNER JOIN(JOIN으로 생략 가능): A와 B의 중복되는 값만 삽입

  - index
    * primary key: 해당 테이블의 고유 번호 지정 (만일 오름차순 자동 번호 기입을 원할 경우 AUTO_INCREMENT)
    
    ```mysql
    `id` int PRIMARY KEY AUTO_INCREMENT
    ```
    
    * foreign key: 외부키로써 타 테이블과 연결고리가 형성
    
    ```mysql
    `userId` int,
    FOREIGN KEY (`userId`) REFERENCES `user` (`id`) // user는 타 테이블에 해당
    ```
