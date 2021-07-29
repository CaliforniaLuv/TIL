# TIL 📖 ✏️
     

 ### 1. 알고리즘

  - 폰켓몬

  ```js
  
  function solution(nums) {
    let num = nums.length / 2
    let arr = new Set(nums)
    let result = [...arr]
    

    
    if(result.length > num) {
        return num
    } else {
        return result.length
    }

  }

  ```
  
  - largestProductOfThree
  
  
  ```js
  let largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.

  arr.sort((a, b) => a - b)

  let result = []

  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] === undefined) {
        break;
      }
      for(let k = j + 1; k < arr.length; k++) {
        if(arr[k] === undefined) {
          break;
        }
        let num = arr[i] * arr[j] * arr[k]
        result.push(num)
      }
    }
  }
  return Math.max(...result)
}
  
  ```

  
   ### 2. 블로깅
   
  - CORS (Cross-Origin Resource Server)
