# TIL 📖 ✏️

   
 ### 1. 알고리즘
 
  - quickSort
    * 정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬
    * 평균적으로 매우 빠른 수행 속도를 자랑하는 정렬 방법
    * worst case: O(n^2)
    * best case: O(nlog₂n)

  ```js
  

  function quicksort (arr) {
    if(arr.length <= 1) {
        return arr
    }

    let cur = arr[0]
    let left = []
    let rigth = []

    for(let i = 1; i < arr.length; i++) {

        if(arr[i] < cur) {
            left.push(arr[i])
        } else {
            rigth.push(arr[i])
        }
    }

    let leftsort = quicksort(left)
    let rigthsort = quicksort(rigth)

    return [...leftsort, cur, ...rigthsort]
  }
 
  ```
  
   ### 2. 블로깅
   
   
    - bubbleSort, selcetSort, insertionSort, quickSort 정렬 
  
  
