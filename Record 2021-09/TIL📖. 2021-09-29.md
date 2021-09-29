### 1. Token Toy-Project
 
  - server
    * Token 생성
    ```javascript
    
      const accessToken = sign(data,process.env.ACCESS_SECRET)
    
    ```
    * sign() 첫번쨰 인자는 payload, 두번쨰 인자는 비밀키로 생성하여 Base64 인코딩 문자열 암호화 출력
    

   ```javascript
    
      const accessVer = verify(cookie, process.env.ACCESS_SECRET);
    
   ```
    
    *  verify() 첫번쨰 인자는 인코딩 문자열된 데이터, 두번쨰 인자는 비밀키로 복호화 하여 원래 데이터 출력

  - client 
    * axios 데이터 요청

    ```javascript
    
      axios.post("https://localhost:4000/serch", {
        data: data,
        userName: name
      })
    
    ```
    
