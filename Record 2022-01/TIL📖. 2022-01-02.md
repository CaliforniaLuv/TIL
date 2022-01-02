### 1. 알고리즘

  - 기능개발

  ```js
  
  function solution(progresses, speeds) {
    const result = [];
    let day = 1;
    // 현재 작업량
    let cur = 0;
    // 작업 완료 갯수
    let count = 0
    
    while(progresses[0]) {
        cur = progresses[0] + (speeds[0] * day)
        if(cur >= 100) {
            count++
            progresses.shift()
            speeds.shift()
        } else {
            if(count > 0) {
                result.push(count)
            }
            day++
            count = 0
        }
    }
    
    result.push(count)
    return result
  }
  
  ```
 
 
