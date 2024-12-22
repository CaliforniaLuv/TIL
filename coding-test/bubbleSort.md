### bubbleSort 

  ```js

  버블 정렬은 중첩 반복문으로 인해 시간 복잡도가 O(N^2)이 나온다.
  자바스크립트 상에서 제공하는 sort가 더 빨리 정렬을 처리한다.
  아래 각 방법에 따라 타이머 결과를 체크하였다.

  function bubbleSort(answer) {
      const ARRAY_LENGTH = arr.length

    for(let i = 0; i < ARRAY_LENGTH; i++) {
        for(let j = 0; j < ARRAY_LENGTH - 1 - i; j++) {
            if(arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
    }
    return arr
  }

  function sort(arr) {
    return arr.sort((a, b) => a - b)
  }

  const timer = (callback, arr) => {
    const start = Date.now()
    const result = callback(arr);
    const end = Date.now()
    
    return {
       timer: end - start,
       result: result
    }

  }

  const arr = Array.from({length: 10000}, (_, el) =>  el)

  const {timer: bubbleSortTimer} = timer(bubbleSort, arr)
  const {timer: sortTimer} = timer(sort, arr)
  
  console.log(`bubbleSortTimer ${bubbleSortTimer}ms`) // 96ms 경과
  console.log(`sortTimer ${sortTimer}ms`) // 0 ~ 1ms 경과


  ```
