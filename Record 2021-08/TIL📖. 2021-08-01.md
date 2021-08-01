# TIL 📖 ✏️


 ### 1. binary search tree 
  
  - 시간복잡도 최소화에 따른 코드 리펙토링

     * 재귀함수를 통해 시간복잡소 최소화
  
  ```js
  
    let nums = [0, 2, 5, 8, 11, 15, 18, 19] 
    
    function binarySearch(array, target) {
      return binarySearchAdd(array, target, 0, array.length - 1)
    }
    
    function binarySearchAdd(array, target, left, right) {
      
      let mid = parseInt((left + right) / 2) 
      
      if(left > right) {
        return false
      } else if(target < array[mid]) {
        return binarySearchAdd(array, target, left, mid - 1)
      } else {
        return binarySearchAdd(array, target, mid + 1, right)
      }
    }
    
   ```
     

 ### 2. 블로깅
 
  - 자료구조 Tree 정리
