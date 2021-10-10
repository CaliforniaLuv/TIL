### 1. 알고리즘

  - 숫자 문자열과 영단어

  ```js
  
  function solution(s) {
   let num = {zero : "0", one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9}
   let word = ""
   let alpahbet = ""
   
   for(let i = 0; i < s.length; i++) {
       if(Number(s[i])) {
           word += s[i]
           continue;
       } else if(String(s[i])) {
           alpahbet += s[i]
           if(alpahbet === "0") {
               word += "0"
               alpahbet = ""
           }
       }
       
       if(num[alpahbet]) {
           word += num[alpahbet]
           alpahbet = ""
       }
   }
    
    return Number(word)
  }
  
  ```
  
  - 정수 제곱근 판별

  ```js
  function solution(n) {
    let num = Number.isInteger(Math.sqrt(n))
    
    if(num) {
       return (Math.sqrt(n) + 1) ** 2
    } else {
        return -1
    }
  }
  
  
  ```
