 ### 1. 알고리즘
 
  - 순열
    * 순서를 지키며 나열하는 알고리즘
    * 중복순열 [1,1,5], [2,2,2] [3,2,3] 해당 배열에 각 요소들마다 중복된 값을 소유해도 상관 없음
    * 순열 [1,2,3] [2,1,3] [1,5,8,2] 해당 배열에 각 요소들마다 고유의 값을 갖고 있어야함.
   
  ```js
  
  중복순열 코드 
  
  function rockPaperScissors() {
    
    n = n || 3
    let arr = ['rock', 'paper', 'scissors']
    let result = []
    
    let func = (count, basket) => {
      if(count === 0) {
        result.push(basket)
        return;
      }
      
      for(let i = 0; i < arr.length; i++) {
        let str = arr[i]
        
        func(count - 1, basket.concat(str))
      }
    }
    
    func(n, [])
    
    return result;
    
  }
 
  ```
  
  ```js
  
  순열 코드
  
  function newChickenRecipe(stuffArr, choiceNum) { 
    let result = []
    
    let stuffArr = stuffArr.filter((el) => String(el).slice(-3) !=== "000")
    if(choiceNum === 1) {
      stuffArr.map((el) => stuffArr.map((val) => [val]) )
    }
    
    stuffArr.forEach((value, index, curArr) => {
      const rest = [...curArr.slice(0, index), ...curArr.slice(index + 1)]
      const another = newChickenRecipe(rest, choiceNum - 1)
      const attached = permutations.map((el) => [value, ...el])
      results.push(...attached);
    })
    
    return result
  }
   
  
  ```
  
  * for 반복문이 중첩으로 진행해야할 경우가 있는데 이를 방지하고자 재귀함수가 필히 필요
  * 재귀함수의 인수에 빼거나 혹은 더해서 탈출하는 재귀 베이스 영역에 성립되면 탈출하도록 설계
