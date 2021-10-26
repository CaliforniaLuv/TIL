### 1. session

  - session 설정

  ```js
  let express = require('express');
  let app = express();
  let session = require('express-session');
  let router = express.Router();
  let dotenv = require('dotenv');
  dotenv.config();

  let port = process.env.port || 3000;

  /** express-session 미들웨어를 사용하기위해 app에 등록*/
  app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 24 * 6 * 60 * 10000,
        httpOnly: true,
        // 현재 http만 응용하기 때문에 secure 비활성화
        //secure: true,
      }
  }));

  app.use('/', router);
  
  app.listen(port, function () {
    console.log(`${port} server PORT start`);
  })
  
  ```
  ![스크린샷 2021-10-26 오후 2 56 25](https://user-images.githubusercontent.com/78064720/138877347-d2eacff8-3ddf-4316-98d3-0a9da6d245c7.png)

  * connet_sid가 session id이므로 사용자를 식별 가능하게됨.
    
    
  
  - session 정보 조회

  ```js
  router.route('/readSession').get(function (req, res) {
   
    if (req.session.user) {
        const infor = `Where: ${req.session.user.id} 
        \n city:${req.session.user.city} 
        \n CurrentTime : ${req.session.user.CurrentTime}`;
        res.send(infor)
    } else {
        res.send("Not Found!!");
    }
  });
  
  ```
  
  - session 정보 생성

  ```js
  
  router.route('/').get(function (req, res) {

    if(req.session.user){
        console.log(`Already have a session`);
    }else{
        req.session.user = {
            "place" : "california",
            "city" : 'Los Angeles',
            "CurrentTime" : new Date()
        }
    }
    res.redirect(`/readSession`);

  });
  
  ```
