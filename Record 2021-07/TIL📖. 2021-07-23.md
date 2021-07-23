# TIL 📖 ✏️
     

 ### 1. 알고리즘
 
  - bubbleSort

  ```js
     
    const bubbleSort = function (arr) { 
      for(let i = 0; i < arr.length; i++) {
          let count = 0;
        for(let j = 0; j < arr.length - i + 1; j++) {
          if(arr[j] > arr[j+1]) {
            count++
            arrSort(j, j + 1, arr)
          }
        }
           if(count === 0) {
        break;
      }
      }
      return arr
    }


    function arrSort(num1, num2, arr) {
      return [arr[num1], arr[num2]] = [arr[num2], arr[num1]]
    }
  ```
 
  * arrSort() 함수형 프로그래밍으로 구성하여 구조분해할당으로 배열 요소 변경
  
