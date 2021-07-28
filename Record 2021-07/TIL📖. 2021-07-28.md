# TIL 📖 ✏️
     

 ### 1. fetch를 이용한 네트워크 요청

  - fetch()
    * 비동기 요청의 대표적인 사례로 네트워크 요청이며, 네트워크를 이용하여 이뤄지는 URL 요청
    * 대개 Promise의 형식으로 구성되어 있음

  ```js
  
  let los_angeles = "https://api.weather.com/cailfornia/LA"
  let new_york = "https://api.weather.com/newyork/NY"
  let sanfrancisco = "https://api.weather.com/cailfornia/SF"

  let total = [
  				      fetch(los_angeles), 
  				      fetch(new_york), 
  				      fetch(sanfrancisco)
			        ]
              
  Promise.all(total)
    .then((response) => Promise.all(response.map((el) => { return el.json() }))
    .then((json) => console.log(json))
    .catch((error) => console.log(error));

  ```
  
   ### 2. 블로깅
   
  - 비동기 호출 처리
