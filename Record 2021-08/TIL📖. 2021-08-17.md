# TIL 📖 ✏️

   
 ### 1. 알고리즘
 
  - mergeSort
    * 병합 정렬을 구현
    * 반복적 접근, 재귀적 접근 중 재귀 접근으로 코드 구현
    
  ```js
  
 const mergeSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 합병정렬은 분할, 합병이 나눠 이루어지는 정렬 방법이다.


  // last. 재귀적 접근: 재귀 베이스 최종 부분 정립
  if(arr.length < 2) {
    return arr
  }

  // 1. 재귀적 접근: 절반을 나눈다.
  let mid = parseInt(arr.length / 2)

  // 2. 재귀적 접근: 나눈 부분을 왼쪽 오른쪽 정리
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
};

function merge(left, right) {

  let result = []

  while(left.length !== 0 && right.length !== 0) {

    if(left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }

  }

  return [...result, ...left, ...right]
}
 
  ```
  
  
   ### 2. 블로깅
   
   - 에라토스테네스의 체를 통한 소수 찾기
    
    
   ![Sieve_of_Eratosthenes_animation](https://user-images.githubusercontent.com/78064720/129744559-a1cf161f-708b-4273-a113-23e672d9afdb.gif)

