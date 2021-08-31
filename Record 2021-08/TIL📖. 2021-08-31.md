 ### 1. MySql
 
  - bulk insert
    * 여러 개의 레코드를 한번의 쿼리로 테이블에 저장
    * VALUES에서 각각의 데이터를 일일히 mysql 문법 상에 담아줄 필요 없이 javascript에서 처리
    * ?는 VALUES 데이터 정보 보안을 위해 넣은 임의의 변수
    * (?) => [[data]] 이중배열로 묶임, ? => data 순수 원시형 데이터
    
    ```js
    
      var sql = "INSERT INTO customers (name, address) VALUES ?";
      var params = [
        ["John", "Highway 71"],
        ["Peter", "Lowstreet 4"],
        ["Amy", "Apple st 652"],
        ["Hannah", "Mountain 21"],
        ["Michael", "Valley 345"],
        ["Sandy", "Ocean blvd 2"],
        ["Betty", "Green Grass 1"],
        ["Richard", "Sky st 331"],
        ["Susan", "One way 98"],
        ["Vicky", "Yellow Garden 2"],
        ["Ben", "Park Lane 38"],
      ];
    
    ```
    
  - insertId
    * value에 데이터를 작성하는데 삽입된 데이터(아래의 기준 ```result```)의 id를 얻는 방법


    ```js
        
        let sql = `INSERT INTO topic(title, description, created,author_id) VALUES(?,?,NOW(),?)`
        
        db.query(sql, [title, description, author], (err, result) => {
          if(err) {
            throw err;
          }
          else {
            response.writeHead(302, {Location: `/?id=${result.insertId}`});        
            response.end();
          }
         }
            
    ```
    
   - query()
     * node.js 상에서 데이터베이스 불러올 때 쓰이는 메소드
     * query(mysql 문법, bulk insert, 콜백 호출문)

     ```js
        
        let list = `INSERT INTO orders(user_id, total_price) VALUES (?, ?)`
        let valuse = [userId, totalPrice]

        db.query(list, valuse, (err, res) => {
          if(err) {
            callback(err, null)
          } else {
            callback(null, res)
          }
             
     ```
     
