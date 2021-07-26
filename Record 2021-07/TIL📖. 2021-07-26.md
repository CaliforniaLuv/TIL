# TIL 📖 ✏️
     

 ### 1. 알고리즘

  - tiling
    * 차례가 지날수록 타일이 변형되지만, 기존의 타일 패턴과 비슷하게 혼합하여 활용하였다.
    * 이는 전의 타일들을 불러와서 사용하는 관계이므로 동적 계획법을 따른 메모이제이션을 응용한 셈이다
 
  ```js
   
   function tiling(n) {
    
    let memo = [0, 1, 2]
    
    let func = () => {
      if(n !== undefined) {
        return memo[n]
      }
      memo[n] = func(n - 2) + func(n - 1)
      return memo[n]
    }
     return func()
   }
  
  ```
  
     

 ### 2. 블로깅
 
  - 자료구조 Graph
    * 인접행렬과 인접리스트 차이
    * DFS, BFS 상황에 따른 활용
