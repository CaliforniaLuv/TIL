# TIL 📖 ✏️


 ### 1. 객체지향언어 OOP
 
  - 자바스크립트 Object.prototype
    * 원형 객체의 특징인 관계로 생성 객체에 복제
    
    ```javascript
      var student = {
  		name: 'Lee',
  		score: 90
	    };

	  console.dir(student)
	  // __proto__ 부모 객체에 상속된 것을 뜻한다.

	  console.log(student.__proto__ === Object.prototype); // true
	  // Object.prototype 자바스크립트의 부모 객체를 의미
    ```
     

 ### 2. 프로그래머스
 
  - 완주하지 못한 선수
  
   ```javascript
      function solution(participant, completion) {

    participant.sort()
    completion.sort()
    
    for (let i = 0; i < participant.length; i++) {
        if(participant[i] !== completion[i]) {
           let result = participant[i]      
            return result;
        }
    }
    
    }
   ``` 

   * sort()로 각 도전자, 완주자 정렬하여 짝이 없는 경우 완주 못한 선수로 판단
