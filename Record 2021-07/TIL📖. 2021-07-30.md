# TIL 📖 ✏️
     

 ### 1. 알고리즘
 
  
  - power
  
  
  ```js
  function power(num, exe) {

  if(exe === 0) {
    return 1
  }

  if(exe % 2 === 0) {
    let halfEven = power(num, exe / 2) % 94906249
    return (halfEven * halfEven) % 94906249
  } else {
    let halfOdd = power(num, parseInt(exe / 2)) % 94906249
    return (num * ((halfOdd * halfOdd) % 94906249 )) % 94906249
  }

  }
  
  ```

  * 거듭제곱을 분할제곱으로 변환한 다음 재귀함수를 통해 순회한다.
  * 결국 최종적으로 재귀 베이스 1을 만나게 되면 else 문 과정이 첫번째 도출 값이 됨
  
   ### 2. Rest API
   
  - “Representational State Transfer”의 약자로, 로이 필딩의 박사학위 논문에서 웹(http)의 장점을 최대한 활용할 수 있는 아키텍처
  - HTTP 메서드를 활용하여 요청 및 응답 상호작용
  - HTTP API와 비슷하지만 엄연히 다름, HTTP API 기준으로 제약 조건을 추가적으로 
