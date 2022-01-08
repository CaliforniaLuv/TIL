### 1. 알고리즘

  ```js
  
  function solution(priorities, location) {
    let answer = 0;
    const position = priorities.map((a,i) => [a,i]);
    const arr = [];


    while(true) {
        const cur = position.shift();
        if(position.some((a) => cur[0]< a[0])) {
            position.push(cur);   
        } else {
            arr.push(cur);
            if(arr[answer][1] == location) {
                break;   
            } else {
                answer++;   
            }
        }
    }

    return answer+1;
  }
  
  ```

### 2. 기술 면접

   * Node.js 소개
   
