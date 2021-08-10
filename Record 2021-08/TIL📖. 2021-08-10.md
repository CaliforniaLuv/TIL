# TIL 📖 ✏️

   
 ### 1. 알고리즘
 
  - quickSort
    
  ```js

  function quickSort(arr, func = (item) => item) {
   let left = []
   let right = []
   let target = arr[0]
   
   for(let i = 1; i < arr.length; i++) {
      if(arr[i] < target) {
         left.push(arr[i])
      } else {
         right.push(arr[i])
      }
   }

   let leftSort = quickSort(left, func)
   let rightSort = quickSort(right, func)
   
   return [...leftSort, target, ...rightSort]
  }
  
  ```
 
   * 별도의 배열 left, right 공간을 생성하여 재귀함수로 접근
