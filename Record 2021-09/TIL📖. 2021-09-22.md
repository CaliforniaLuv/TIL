### 1. 알고리즘
 
  - spiralTraversal
  
  ```js
  let spiralTraversal = function (matrix) {
  // TODO: 여기에 코드를 작성합니다.
  // 나선형이면 달팽이처럼 묶이는 형식이다.
  // 오른 밑 왼 위 ->  오른 밑 왼 위 이렇게 반복 순환되어 matrix.length가 0이되면 나선형이 완료 된다. (mutable)
  // 우선 함수형 프로그래밍을 통해 각 방향에 대한 설정을 맞추자
  
  let result = ''
  
    while(true) {
      result = upArr(matrix, result)
      if(matrix.length === 0) break
      result = rightArr(matrix, result)
      result = downArr(matrix, result)
      if(matrix.length === 0) break
      result = leftArr(matrix, result)
      if(matrix.length === 0) break
    }
    


    return result
    };


  // 윗면 제거 (성공)
  let upArr = (matrix, result) => {
    for(let el of matrix[0]) {
      result += el
    }
    matrix.shift()
    return result
  }

// 우측면 제거 (성공)
let rightArr = (matrix, result) => {
  for(let i = 0; i < matrix.length; i++) {
    result += matrix[i][matrix[i].length - 1]
    matrix[i].splice(matrix[i].length - 1, 1)
  }
  return result
}

// 밑면 제거 (성공)
let downArr = (matrix, result) => {
  matrix[matrix.length - 1].reverse()
  for(let el of matrix[matrix.length - 1]) {
    result += el
  }

  matrix.pop()
  return result
}


// 좌측면 제거
let leftArr = (matrix, result) => {
  for(let i = 1; i <= matrix.length; i++) {
    result += matrix[matrix.length - i][0]
    matrix[matrix.length - i].splice(0, 1)
  }
  return result
}




  
  ```



### 2. 블로깅
 
  - AWS 배포하기
    * S3, EC2, RSD 정리
