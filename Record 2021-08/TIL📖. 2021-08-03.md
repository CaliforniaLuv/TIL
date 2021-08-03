# TIL 📖 ✏️


 ### 1. 알고리즘
  
  - PowerSet
  
  ```js
  
    let powerSet = (str) => {

      let newStr = str.split('')
      newStr.sort()
    
      let rmStr = new Set(newStr)
      str = [...rmStr].join('')
    
      let result = []
      return isPower(0, '', str, result)
  
    }
     
    function isPower(idx, cur, str, arr) {
      
      if(idx === str.length) {
        arr.push(cur)
        return
      }
      
      isPower(idx+1, cur, str, arr)
      
      isPower(idx+1, cur + str[idx], str, arr)
      
      return arr.sort()
      
    }
  
     
   ```
   
 ### 2. json() vs JSON.parse()
 
  - Body.json()은 비동기식이며 PromiseJavaScript 객체로 확인되는 객체를 반환
  
  - JSON.parse()은 동기식으로 문자열을 구문 분석하고 반환된 JavaScript 객체를 변경
     

