 ### 1. MongoDB
 
  - Document
    * Field - Value 쌍으로 저장된 데이터
  
  - Field
    * 데이터 포인트를 위한 고유한 식별자
  
  - Value
    * 주어진 식별자와 연결된 데이터

  - Collection
    * MongoDB의 도큐먼트로 구성된 저장소
    * 데이터베이스 당 많은 컬렉션이 있고, 컬렉션 당 많은 도큐먼트가 있음

 ```MongoDB
 {
  <field>: <value>
 }
 ```
 
 - JSON vs. BSON
  * JSON의 경우 ```{}``` 중괄호 사이 도큐먼트가 시작하여 Field : Value 구분 짓고 문자열은 ""로 처리
  * 컴퓨터의 중점에 맞춘 이진법을 기반으로 둔 표현법
  * BSON이 JSON보다 메모리 사용이 효율적이고 빠르지만 해석하기가 힘들다.

 - Importing & Exporting
  * JSON의 경우 mongoimfort, mongoexport
  * BSON의 경우 mongorestore, mongodump

