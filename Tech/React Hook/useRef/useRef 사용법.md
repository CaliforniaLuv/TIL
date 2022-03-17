# useRef란 


한마디로 요약하자면, 

```
Ref는 render 메서드에서 생성된 DOM 노드 혹은 React Element에 접근하는 방법
```

즉, Vanilla Javascript에서는 DOM 객체에 접근하기 위해 querySelector나 getElementById API를 사용해야 하지만,

React에서는 DOM API를 마구 사용하면 디버깅, 코드 해석이 복잡해지므로 컴포넌트 제어를 ref라는 기능이 대신 수행해준다.

<br/>
<br/>

React 상에서 부모 컴포넌트와 자식 컴포넌트가 있을 경우 간혹 자식 컴포넌트의 함수를 직접 제어할 필요가 있다.

ex) 부모 컴포넌트인 Page와 자식 컴포넌트인 Modal에서 Modal의 내용을 직접 수정이 필요할 경우

또한 Ref라는 속성을 통해 엘리먼트 노드의 내부를 제어할 수 있다. (대표적으로 style을 통한 css 기능 관리)

<br/>

# 코드 작성법

```jsx

import "./styles.css";
import { createRef, useRef, useState } from "react";

// useRef는 dom을 변경할 때 사용

export default function App() {
  const myRef = useRef(null);

  const [list, setList] = useState([
    { id: 1, name: "길동" },
    { id: 2, name: "꺽정" }
  ]);

  // 동적으로 ref를 생성
  const myRefs = Array.from({ length: list.length }).map(() => createRef());

  return (
    <>
      <button
        onClick={() => {
          console.log(myRef);
          console.log(myRef.current);
          myRef.current.style.backgroundColor = "red";
          myRefs[1].current.style.backgroundColor = "blue";
        }}
      >
        색변경
      </button>
      <div className="App">
        <div ref={myRef}>박스</div>
        {list.map((el, idx) => (
          <h1 ref={myRefs[idx]}>{el.name}</h1>
        ))}
      </div>
    </>
  );
}

```

여기서 ```CreateRef()```는 함수형 컴포넌트가 등장 전 클래스형 컴포넌트에서 Ref 속성을 참조할 필요가 있을떄 활용하였다.

클래스형 컴포넌트는 인스턴스를 생성하여 render 코드 블록 쪽만 리랜더링 후 다시 실행 하지만,
함수형 컴포넌트는 함수 블록 안에 있는 모든 것을 리랜더링시 마다 매번 실행한다.

그러므로 함수형에서 CreateRef를 사용할 경우 ref값이 초기화되어 원하는 이벤트를 발생시키지 못 할수도 있기에 useRef를 사용하는 것을(기존 값을 저장) 추천한다.

useState 상태값이 리렌더링되면 연쇄적으로 useRef의 ref값도 리렌더링이 발생되는 셈이다.
