# TIL 📖 ✏️
     

 ### 1. 동적계획법
 
  - 동적계획법에 따른 메모이제이션 활용하여 피보나치 응용하기

  ```js

    function fibonachi(n) {
      
      let memo = [0, 1];
      
      let fibo = () => { 
        if(memo[n] !== unedfined) {
          return memo[n]
        }
        memo[n] = fibo(n - 1) - fibo(n - 2)
        return memo[n]
      }
       return fibo()
    }

  ```
  * 동적 계획법: 저장한 값들을 재활용하여 사용하는 알고리즘
  * 메모이제이션: 도출한 값을 계산하고 그 값을 메모에 저장하여 필요할 때마다 응용 
 
 
  ### 2. 블로깅
  
    - 동적계획법에 따른 피보나치 수열 
     

