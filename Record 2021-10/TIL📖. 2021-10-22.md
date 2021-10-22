### 1. axios 문법 차이

  ```js
  
    const send = await axios(
      {
        method: 'post',
        url: `https://github.com/login/oauth/access_token`,
        headers: {
          accept: 'application/json',
        },
        data: {
          client_id: clientID,
          client_secret: clientSecret,
          code: req.body.authorizationCode
        }
     })
  
  ```
  
  
  ```js
  
   const send = await axios.post(
    `https://github.com/login/oauth/access_token`, 
    {
      client_id: clientID,
      client_secret: clientSecret,
      code: req.body.authorizationCode
    }, {
    accept: 'application/json',
    })
  
  
  ```
