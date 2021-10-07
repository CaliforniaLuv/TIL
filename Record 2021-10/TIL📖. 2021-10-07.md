### 1. 순열

  - 순서에 의존하는 알고리즘 ([a, b] !== [b, a])
  
  ```js
  
    function permutation(count) {
      count = count || 3;
      let result = [];
      let arr = [1, 2, 3]
    
      let func = (newArr, bucket, num) => {
        if(num === 0) {
          result.push(bucket)
        }
      
        for(let i = 0; i < newArr.length; i++) {
          let clone = newArr.slice();
          let cur = clone.splice(i, 1)
        
          func(clone, bucket.concat(cur), num - 1)
        }
      }
    
      func(arr, [], count)
      return result;
    }
  
  
  ```
  
  
### 2. 중복 순열
  
   - 순열과 달리 중복 요소가 있어도 상관 없음
    
    
   ```js
    
      function permutation(count) {
        count = count || 3;
        let result = [];
        let arr = [1, 2, 3]
    
        let func = (newArr, bucket, num) => {
          if(num === 0) {
            result.push(bucket)
          }
      
        for(let i = 0; i < newArr.length; i++) {
          let clone = newArr.slice();
          let cur = newArr[i]
        
          func(clone, bucket.concat(cur), num - 1)
        }
      }
    
      func(arr, [], count)
      return result;
      }
    
   ```
  
 
 
### 3. 조합
  
   - 순서에 의존하지 않는 알고리즘 ([a, b] === [b, a])
    
   ```js
  
      function permutation(count) {
        count = count || 3;
        let result = [];
        let arr = [1, 2, 3]
    
        let func = (newArr, bucket, num) => {
          if(num === 0) {
            result.push(bucket)
          }
      
          for(let i = 0; i < newArr.length; i++) {
            let clone = newArr.slice();
            let cur = newArr[i]
        
            func(clone.slice(i + 1), bucket.concat(cur), num - 1)
          }
        }
    
        func(arr, [], count)
        return result;
      }
  
   ```
