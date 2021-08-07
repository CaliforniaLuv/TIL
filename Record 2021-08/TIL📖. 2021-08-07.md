# TIL 📖 ✏️

   
 ### 1. 알고리즘
 
  - rotatedArraySearch
    * binarySeach와 달리 mid 중앙 기준으로 왼쪽 오른쪽이 정렬되지 않은채 탐색
    
  ```js

  let rotatedArraySearch = (rotated, target) => {
    return sortArraySearch(rotated, target, 0, rotated.length - 1)
  }
  
  function sortArraySearch(rotated, target, left, right) {
    
    let mid = parseInt((left + right) / 2)
    
    if(left > right) {
      return -1
    }
    
    if(rotated[mid] === target) {
      return mid
    }
    
    if(rotated[left] < rotated[mid]) {
      if(target < rotated[mid] && rotated[left] <= target) {
        return sortArraySearch(rotated, target, left, mid - 1)
      } else {
        return sortArraySearch(rotated, target, mid + 1, right)
      }
    } else {
      if(target > rotated[mid] && rotated[right] <= target) { 
        return sortArraySearch(rotated, target, mid + 1, right)
      } else {
        return sortArraySearch(rotated, target, left, mid - 1)
      }
    }
    
    
  }
  


  ```
