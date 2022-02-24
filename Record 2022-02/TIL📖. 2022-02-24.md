### 1. dotenv

 ```js
  import dotenv from "dotenv" 
  dotenv.config() 
 ```
 해당 코드를 작성하면 아래와 같은 에러가 발생한다.
 
 ```
  ERROR in ./node_modules/dotenv/lib/main.js 24:11-24

  Module not found: Error: Can't resolve 'fs' in '/Users/yubyeong-gug/Desktop/product_server_admin_client/product_server_admin_client/node_modules/dotenv/lib'

  ERROR in ./node_modules/dotenv/lib/main.js 26:13-28

  Module not found: Error: Can't resolve 'path' in '/Users/yubyeong-gug/Desktop/product_server_admin_client/product_server_admin_client/node_modules/dotenv/lib'

  BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
  This is no longer the case. Verify if you need this module and configure a polyfill for it.

  If you want to include a polyfill, you need to:
	  - add a fallback 'resolve.fallback: { "path": require.resolve("path-browserify") }'
	  - install 'path-browserify'
  If you don't want to include a polyfill, you can use an empty module like this:
	resolve.fallback: { "path": false }


  ERROR in ./node_modules/dotenv/lib/main.js 28:11-24

  Module not found: Error: Can't resolve 'os' in '/Users/yubyeong-gug/Desktop/product_server_admin_client/product_server_admin_client/node_modules/dotenv/lib'

  BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
  This is no longer the case. Verify if you need this module and configure a polyfill for it.

  If you want to include a polyfill, you need to:
	  - add a fallback 'resolve.fallback: { "os": require.resolve("os-browserify/browser") }'
	  - install 'os-browserify'
  If you don't want to include a polyfill, you can use an empty module like this:
	resolve.fallback: { "os": false }
 
 ```
 
 - React에서는 dotenv가 내장되어 있음.
 - .env 파일은 무조건 src 폴더 밖에 있어야하며, 필히 REACT_APP_ 접두어가 필요
