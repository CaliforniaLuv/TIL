 ### 1. 알고리즘
 
  - 빼빼로 데이
    
    * 최대 인원을 뽑기 위해선 최대 공약수를 구해야 하며, 유클리드 호제법을 응용하여 진행
    * 시간복잡도에 의해 최대공약수의 제곱근을 반복문 탈출 조건으로 둠
    * 최대 공약수가 만일 36이라면 제곱근은 6
    * 36의 약수는 총 1, 2, 3, 4, 6, 9, 12, 18, 36
    * 1의 제곱은 제곱근 6보다 작으므로 최대 공약수와 나누어 한번 더 진행하면 36이 저장
    * 2의 제곱 또한 제곱근 6보다 작으므로 최대 공약수와 나누어 한번 더 진행하면 18이 저장
    * 위의 방식으로 진행하면 하나씩 약수를 구하는 과정보다 시간 복잡도가 더 효율적으로 최소화  

   ```js
   function divideChocolateStick(M, N) {
  // TODO: 여기에 코드를 작성합니다.
  // M: 아몬드, N: 누드

  // [출근 인원, 아몬드 갯수, 누드 갯수]
  // 출근 인원을 어떻게 뽑을 것인가..?
  // 아몬드, 누드의 각각 나누어 나온 최대 공약수가 출근 인원이 된다.
  // 최대 공약수를 가장 효율적이게 풀 수있는 방법은 '유클리드 호제법'
  // 4와 8의 빼빼로가 있다고 가정하자.
  // 가장 큰수 / 가장 작은수로 나눈다. ex) 8 / 4
  // 만일 나머지가 0이 나올 경우 나눈 수가 최대 공약수가 된다.  ex) 8 / 4 = 2...0 
  
  // step 1: 출근 인원은 몇명인가(유클리드 호제법으로 구하라) success!!
  let employee = uclid(M, N)


  let result = []
  const sqrt = Math.floor(Math.sqrt(employee));

  for(let left = 1; left <= sqrt; left++) {
      if (employee % left === 0) {
      // 최대공약수의 약수인 경우 중 제곱근 보다 작은 약수의 경우
      result.push([left, M / left, N / left]);
        if (left * left < employee) {
        // 제곱근이 아닌 경우(제곱근 보다 작은)
          right = employee / left; // 최대 공약수를 제곱근이 아닌 수로 나누면 제곱근 보다 큰 약수를 구할 수 있다.
          result.push([right, M / right, N / right]);
        }
      } 
  }
  
  result.sort((x, y) => x[0] - y[0])
  return result
}



// step2: 최대값 / 최소값으로 재귀함수 응용 드디어... 재귀함수 제대로 활용..!
function uclid(M, N) {
  let arr = [M, N]
  let result = Math.max(...arr) % Math.min(...arr)

  let newM = Math.min(...arr)
  let newN = Math.max(...arr) % Math.min(...arr)

  if(result === 0) {
    return newM
  } 

  return uclid(newM, newN)
}

    
   ```
