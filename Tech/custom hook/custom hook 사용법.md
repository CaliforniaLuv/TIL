
# custom hook

## 1. 사용하는 이유

 - 리액트를 코드 작성하다 보면 중복되는 코드들이 많은 경우가 있다. 
  > ex 각 컴포넌트마다 Fetch 사용, input type에 따른 텍스트 입력 등등
 - 중복성을 줄이며, 작성된 코드를 경량화하여 가독성을 높여준다.
 - 필요할 때 마다 도구처럼 쓰는 만들어 나만의 Hooks이다.

## 2. 사용법

 - 커스텀 훅은 사용 시 use라는 키워드를 맨 앞에 꼭 붙이며 파일명을 생성해야한다.
  > ex useFetch useInput useScroll
 - 컴포넌트 jsx 문법처럼 return 문에 html 문법이 있으면 안되고, state 상태값 혹은 배열, 객체(자료형) 타입으로 반환해야한다.


## 3. Code


### App.js
```jsx

function App() {

  const days = useFetch("https://jsonplaceholder.typicode.com/posts");

  console.log(days)

  

  return (
    <div className="App">
      <h1>Fetch text</h1>
      <div>
        {days.map(el => (<h2>{el.title}</h2>))}
      </div>
    </div>
  );
}

export default App;

```

### Custom Hook

```jsx

import { useEffect, useState } from "react";


export default function useFetch(url) {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
         .then(res => {
             return res.json()
         })
         .then(data => {
            setData(data)
         })
         .catch((err) => console.error("Not Found!!", err))
    }, [])

    return data
}

```
