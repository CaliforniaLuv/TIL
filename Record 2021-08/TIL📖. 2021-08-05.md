# TIL 📖 ✏️

   
 ### 1. 
 
  - insertionSort
    * bubbleSort의 내림차순과 달리 insertionSort은 오름차순의 특징을 지님

```js
let insertionSort = function (arr, sortArr = (item) => item) {
  

  for(let i = 1; i < arr.length; i++) {
    let list = arr[i]
    let left = i - 1

    while(left >= 0) {
      if(sortArr(arr[left]) > sortArr(arr[left + 1])) {
        arr[left + 1] = arr[left]
        arr[left] = list
      }
      left--
    }
  
  }
    return arr
};


```

 ### 2. node.js
 
  - res.json()과 res.send()의 차이
    * res.json(obj)
      1. res.json 함수에 명시된 인자로는 obj
      2. obj는 JSON 문자열로 변환되서 body라는 변수에 저장
      3. Content-Type 헤더가 세팅되지 않았을 경우, Content-Type 으로 application/json을 세팅(결국 내부적으로 send() 호출

      ```javascript     
      
      res.json(object)
      res.send(string)
      
      ```
      
    * res.send(body)
      1. res.send 함수의 인자로는 body가 있고 body는 바로 chunk로 할당
      2. chunk가 object 타입이면 res.json을 호출
      3. 결국 두 개의 함수가 서로 호출하기 때문에 함수 호출 스택이 넘침

      ```javascript

      res.send(object)
      res.json(object)
      res.send(string)
      
      ```
