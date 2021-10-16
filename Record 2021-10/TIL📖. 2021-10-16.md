### 1. 알고리즘

  - 문자열 내 마음대로 정렬하기
    
    ```js
    function solution(strings, n) {
      return strings.sort((a, b) => {
        if(a[n] === b[n]){
          return a > b ? 1 : -1
        }
          return a[n] > b[n] ? 1 : -1
      })
      }
    
    ```

### 2. 블로깅

  - MySQL JOIN 쿼리문 
