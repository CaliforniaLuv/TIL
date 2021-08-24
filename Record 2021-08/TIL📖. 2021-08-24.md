 ### 1. 알고리즘
 
  - Greedy Algorithm 탐욕법
    * 최적의 상황만을 쫓아 최종적인 해답에 도달하는 방법
    
      1. 선택 절차(Selection Procedure): 현재 상태에서의 최적의 해답을 선택합니다.
      2. 적절성 검사(Feasibility Check): 선택된 해가 문제의 조건을 만족하는지 검사합니다.
      3. 해답 검사(Solution Check): 원래의 문제가 해결되었는지 검사하고, 해결되지 않았다면 선택 절차로 돌아가 위의 과정을 반복합니다.

    * 매 순간, 최적이라 생각되는 해답(locally optimal solution)을 찾으며, 이를 토대로 최종 문제의 해답(globally optimal solution)에 도달하는 문제 해결 방식 

  ```js
  function movingStuff(stuff, limit, count = 0) {
  // TODO: 여기에 코드를 작성합니다.
  let maxNum = Math.max(...stuff)
  let minNum = Math.min(...stuff)

  if(stuff.length === 0) {
    return count
  }

  if(maxNum + minNum > limit) {
    stuff.splice(stuff.indexOf(maxNum), 1)
    count++
  } else if (maxNum + minNum <= limit) {
    stuff.splice(stuff.indexOf(maxNum), 1)
    stuff.splice(stuff.indexOf(minNum), 1)
    count++
  }

  return movingStuff(stuff, limit, count)

}
   
 
  ```
  
  

