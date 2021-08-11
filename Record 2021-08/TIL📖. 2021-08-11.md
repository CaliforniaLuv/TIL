# TIL 📖 ✏️

   
 ### 1. 알고리즘
 
  - balancedBrackets
    
  ```js
   const balancedBrackets = function (str) {
   
    let objBr = {
      "[" : "]",
      "(" : ")",
      "{" : "}"
    }
    let stack = []
    let closer = "])}"
    
    
    for(let i = 0; i < str.length; i++) {
      if(str[i] in objBr) {
        stack.push(str[i])
      } else if(closer.includes(str[i])) {
        let top = stack.pop()
        let check = objBr[top]
          if(check !== str[i]) {
            return false;        
          }
      }
    }

    return stack.length === 0
   }
   
  ```
  
   * 열리고 닫히는 과정이 성립되면 자연스레 퇴장하도록 stack 자료구조를 응용한다.
   * 열리는 bracket은 objBr 객체로 저장, 닫히는 bracket은 closer 문자열로 저장
   * 반복문 과정에서 만일 해당 인덱스가 열리는 배열 요소의 경우 if(str[i] in objBr)
   * 닫히는 과정일 경우 closer.includes(str[i])로 분리 한다

 ### 2. React UI Component 정리

 - Modal
 - toggle
 - tap
 - tags
 - Autocomplete
 - ClickToEdit 
