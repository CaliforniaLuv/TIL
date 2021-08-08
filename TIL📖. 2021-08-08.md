# TIL 📖 ✏️

   
 ### 1. node.js
 
 - www.example.com/post/1/jun?title=hello!

  ```js
 
    post.get("/:id/:name", function1);
  
  ```
 
 - params

   * routing을 보면 id와 name이 예약되어 있음
   * console.log(req.params); // { id: '1', name: 'jun' }


  - qurey 
   * title에는 hello라는 데이터를 담는다.
   * console.log(req.query); // { title : 'hello!' }
