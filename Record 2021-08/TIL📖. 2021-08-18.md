# TIL 📖 ✏️

   
 ### 1. 알고리즘
 
  - readVertically
    * 각 배열 최대 길이를 따로 추가
    * 중첩 반복문으로 가장 긴 길이를 상위 반복문으로 지정하여 만약 해당 배열이 undefind일 경우 continue 처리   

  ```js
  
    let maxWord = 0

  for(let el of arr) {
    if(maxWord < el.length) {
      maxWord = el.length
    }
  }

  let result = ''

  for(let i = 0; i < maxWord; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(arr[j][i] === undefined) continue;
      result = result + arr[j][i]
    }
  }

  return result

 
  ```
  

