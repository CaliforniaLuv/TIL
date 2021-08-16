# TIL 📖 ✏️

   
 ### 1. 알고리즘
 
  - 소수 찾기
    * 에라토스테네스 2의 배수부터 시작하여 순차적으로 비교하여 진행함
    * 만일 소수를 발견될 경우 false로 처리
    * 계속 배수가 증가되어도 이미 지워진 숫자가 있으므로 시간 복잡도 효율성이 매우 올라감

    
  ```js
  
  function solution(n) { 
  
    let arr = Array(n + 1).fill(true)
    arr.splice(0, 2, false, false)
    
    for(let i = 0; i <= n; i++) {
      if(arr[i]) {
        for(let j = i * i; j <= n; j = j + i) {
          arr[j] = false;
        }
      }
    }
    
    return arr.filter((el) => el === true).length
    
  }  
 
  ```
  
