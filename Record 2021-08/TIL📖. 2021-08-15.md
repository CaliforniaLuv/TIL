# TIL 📖 ✏️

   
 ### 1. 알고리즘
 
  - LPS

    
  ```js
  const LPS = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = ""

  for(let i = 0; i < parseInt(str.length / 2); i++) {
    let prefix = str.slice(0, i)
    let suffix = str.slice(str.length - i)

    if(prefix === suffix) {
      result = prefix
    }
  }

  return result.length
};

   
  ```
  
   ### 2. 블로깅
   
   - Redux
     * Redux 패턴도
     * actions - reducer - store - view 과정에 대한 코드 해석
