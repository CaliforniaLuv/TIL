### 1. 알고리즘

  - 문자열 내림차순으로 배치하기
   
   ```js
   
    function solution(s) {
      return s.split('').sort().reverse().join('')
    }
    
   ```
   
  - 두 개 뽑아서 더하기

   ```js
   
   function solution(numbers) {
    let arr = []
    
    for (let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length; j++) {
            if(i === j) continue;
            arr.push(numbers[i] + numbers[j])
        }
    }
    
    let newArr = new Set(arr)
    let result = [...newArr]
    
    return result.sort((a, b) => a - b) 
   }
    
   ```
