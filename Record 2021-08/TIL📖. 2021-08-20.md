# TIL 📖 ✏️

   
 ### 1. 알고리즘
 
  - bubbleSort
    * 해당 요소가 연쇄적으로 오른쪽 요소와 비교하여 크면 이동 작으면 비교 대상 요소가 바뀌는 특징
    * worst case: O(n^2)
    * best case: O(n)

  ```js
  
function bubbleSort (arr) {

  for(let i = 0; i < arr.length; i++) {
  	for(let j = 0; j < arr.length -1 - i; j++) {
    	if(arr[j] > arr[j + 1]) {
        	let swap = arr[j]
            arr[j] = arr[j + 1]
          	arr[j + 1] = swap
        }
    }
  }
  return arr
}

 
  ```
  
  - Selection Sort
    * 선택 정렬은 매커니즘이 진행될 자리는 정해져 있으며, 첫번째 자리에 배열의 최소값을 할당하여 진행
    * worst case: O(n^2)
    * best case: O(n^2)
  
   ```js
 
   function selectionSort (arr) {
      for (let i = 0; i < arr.length; i++) {
         let minIndex = i;
         for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
               minIndex = j;
            }
         }
         if (minIndex !== i) {
            let swap = arr[minIndex];
            array[minIndex] = arr[i];
            arr[i] = swap;
         }

      }
      return arr;
   }

  ```
  
  - Insertion Sort
    * 배열의 한 원소인 key라는 값을 우선 가지고 있으며, 해당 key를 알맞은 자리에 삽입
    * worst case: O(n^2)
    * best case: O(n)

   ```js
 
   
   function insertionSort (arr) {
      
      for (let i = 1; i < arr.length; i++) {
         let cur = arr[i];
         let left = i - 1;
         
         while (left >= 0 && arr[left] > cur) {
            arr[left + 1] = arr[left];
            arr[left] = cur;
            cur = arr[left];
            left--;
         }
      }
      return arr;
   }

   ```
  

