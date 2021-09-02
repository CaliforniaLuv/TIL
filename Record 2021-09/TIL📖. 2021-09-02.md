 ### 1. Node.js
 
  - require()
    * require(../src) 아무 파일 지정하지 않고 설정 맞출 경우 index.js로 자동경로 설정

  - exports
    * 타 파일에 접근을 이어주기 위해 내보내는 객체 형태의 메서드(캡슐화)

    ```js
      
     // 모듈 추출하기(exporting)
     // sub.js
      module.exports = {
      
        japan: function() {
          return "Gonnichiwa";
        },

        russia: function() {
          return "Sibasva";
        }
        
      };
      
     // 모듈 사용하기(importing)
     // main.js 
     
     const greetings = require("./greetings.js
     
     greetings.japan() // Gonnichiwa
     greetings.russia() // Sibasva

    ```
 

