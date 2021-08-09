# TIL 📖 ✏️

   
 ### 1. 알고리즘
 
  - 3진법 뒤집기
    
  ```js

  function solution(n) {
    let number = ''
    let memo = []
    if (n < 11) {
        return 1
    }
    
    while(parseInt(n) !== 0) {
    
        if(n === 1) {
            memo.push(1)
            break;
        } else if(n === 0) {
            memo.push(2)
            break;
        }
        
        memo.unshift(parseInt(n % 3))
        n = n / 3        
    
    }
    
    let newMemo = memo.reverse()
    let result = 0
    let count = 0
    
    for(let i = newMemo.length - 1 ; i >= 0; i--) {
        if(newMemo[count] === 0) {
            count++
            continue;
        }
        result = result + (memo[count] * 3**i)
        count++
    }
    return result
  }  


  ```
  
 ### 2. Styled-Component
 
  
 ```js
  import styled from "styled-components";

// <h1> 태그를 렌더링 할 title component를 만듭니다.
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// <section> 태그를 렌더링 할 Wrapper component를 만듭니다.
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default function App() {
  // 일반적으로 컴포넌트를 사용하는 것처럼 Title과 Wrapper를 사용하시면 됩니다!
  return (
    <Wrapper>
      <Title>Hello World!</Title>
    </Wrapper>
  );
}

 ```
 
  - 3진법 뒤집기

    * <Button> 컴포넌트의 background 와 color 속성은 primary 라는 props 의 전달 여부에 따라 컬러값을 정의
