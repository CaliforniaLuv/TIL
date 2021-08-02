# TIL 📖 ✏️


 ### 1. 알고리즘
  
  - 부족한 금액 계산하기
  
  ```js
  
    function solution(price, money, count) {
    
      let sum = price

      for(let i = 2; i <= count; i++) {
        sum = sum + (price * i)
      }
    
      return sum < money ? 0 : sum - money
     }
     
   ```
   
 ### 2. React
 
  - useEffect
    * 각 종속 배열의 차이 구별
      1. []: 한번만 useEffect 기능이 실행 (외부 리소스 접근할 경우)
      2. 지정안할 경우: 매 해당 컴포넌트 내에서 변화가 일어날 경우 useEffect 기능이 실행
      3. [value]: 해당 value에 대한 값이 변화가 일어날 경우가 useEffect 기능이 실행
     

