# TIL 📖 ✏️


 ### 1. Node.js
  
  - Express 메서드
     * ‘www.google.com/post/1/jin?title=hello!’ 
     * req.query
     * ? 뒤를 기준으로 console.log(req.query) { title : 'hello!' }
     * req.params
     * id 숫자를 기준으로 console.log(req.params) // { id: '1', name: 'jin' }
     

 ### 2. 프로그래머스
 
  - 소수 만들기
     * 배열 요소 총합과 총합으로 모은 배열을 소수 판별하는 구도로 분리
     * 판별시 for (let i = 2; i*i <= sum; i++) i*i를 통해 중복으로 판별하는 기능 소거
