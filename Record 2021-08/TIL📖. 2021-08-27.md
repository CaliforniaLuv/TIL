 ### 1. 알고리즘: GCD 최대 공약수 접근
 
  - 유클리드 호제법
    * 수가 클수록 계산이 구하는 과정이 복잡하거나 약수 찾기가 어려운 수일 경우 활용
    * 큰수를 작은수로 나눔
    * SELECT 데이터셋에 포함될 특성
    * 나누는 수를, 나머지로 계속 나누고 나머지가 0이 나올 경우 해당 나누는 수가 최대 공약수

   ```
    ex 1)
    1512 / 1008 = 1 ... 504
    1008 / 504 = 2 ... 0
    
    504 최대 공약수
    
    ex 2)
    2304 / 1441 = 1 ... 864
    1440 / 864 = 1 ... 576
    864 / 576 = 1 ... 288
    576 / 288 = 1 ... 0
    
    288 최대 공약수
    
   ```
 
 ### 2. git 커밋할 경우 Mysql 보안
 
  ```js
  
  .env file
  DATABASE_USERNAME=root
  DATABASE_PASSWORD=@@@@
  DATABASE_NAME='learnmysql'
  
   위의 PASSWORD는 공개하면 안될 관계로 보안해야할 필요가 있음
   
   그러므로
   
   
   gitinore file
   node_modules/
   package-lock.json
   .env ==> 파일명을 추가한 것
   
   gitinore 파일을 통해 커밋에 제한 해놓을 파일을 각각 선언 하였는데,
   node_modules/, package-lock.json, .env 3개의 파일이 커밋 안됨
  ```
  
