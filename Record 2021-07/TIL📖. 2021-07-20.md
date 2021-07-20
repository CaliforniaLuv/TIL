# TIL 📖 ✏️
     

 ### 1. 재귀함수
 
  - 알고리즘 flattenArr

    ```javascript
    
     if (arr.length === 0) {
        return []
      }


      let [head, ...tail] = arr 

      if(Array.isArray(head)) {
        return flattenArr([...head, ...tail])
       } else {
        return [head].concat(flattenArr(tail))
      }
      
    
    ```


    * 구조 분해 할당으로 접근 [head, ...tail] = arr 
    * 객체 구조 분해 할당 특이점 발견 let { cat : tiger, size : large } = obj 할 경우 tiger, large로 값 출력 가능
    
    * 다른 로직을 통해 구현 

    ```javascript
    
       let result = [];

       for(let el of arr) {

          if(Array.isArray(el)) {
            result = result.concat(flattenArr(el))
          }
          else if(!Array.isArray(el)) {
           result = result.concat(el)
         }
        }

     return result;
    
    ```
     

