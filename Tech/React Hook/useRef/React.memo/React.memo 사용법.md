# React.memo 

## 사용 이유

부모 컴포넌트의 State 값이 변화가 일어날 경우 자식 컴포넌트들도 리렌더링이 발생한다.

자식 컴포넌트에 무거운 퍼포먼스가 관리되는 경우 성능에 문제가 일어날 수도 있는데, 이러한 성능 최적화를 React.memo 고차 컴포넌트를 통해 해결할 수 있다.

## 사용법

```jsx

const [countA, setCountA] = useState(1)
const [countB, setCountB] = useState(1)

const CountA = React.memo({countA}) => {
  console.log(countA)
  return <div>{countA}</div>
}


const CountB = React.memo({countB}) => {
  console.log(countB)
  return <div>{countB}</div>
}

return (
  <>
    <CountA countA={countA}/>
    <CountB countB={countB}/>
    <button onClick={() => setCount(countB + 1)}></button>
  </>

)


```


자식 컴포넌트에 React.memo 메서드를 최상위 기준으로 묶어주면 부모 컴포넌트의 countB 상태값이 변화해도 CountA 컴포넌트에는 리렌더링이 방지된다.

## 자료형 타입의 React.memo 사용법

```jsx

const [countA, setCountA] = useState(1)
const [obj, setObj] = useState({
  count: 1
})

const CountA = React.memo({countA}) => {
  console.log(countA)
  return <div>{countA}</div>
}


const CountB = ({obj}) => {
  console.log(obj.count)
  return <div>{obj.count}</div>
}

return (
  <>
    <CountA countA={countA}/>
    <button onClick={() => setCount(countA)}></button>
    <CountB obj={obj}/>
    <button onClick={() => setCount(obj)}></button>
  </>

)


const areEqual = (prevProps, nextProps) => { 
  if(prevProps.obj.count === nextProps.obj.count) {
    return true
  } 
  
  return false
}

const MemoizedCounterB = React.memo(CountB, areEqual)

```

양 쪽 다 버튼을 클릭하여도 상태값이 변화되지않고 그대로 유지되어 React.memo로 묶인 이상 console.log()가 찍히지는 않을 것이다. 

그러나 ```CountA```는 원시형 타입을 Props로 관리하여 위와 같이 리렌더링이 발생하지 않지만, ```CountB```의 경우 버튼을 클릭하면 리렌더링이 발생하게 된다. 

그 이유는 Props 형태가 자료형인 관계로 얇은 복사 현상이 일어나게 된다.

그러므로 리렌더링을 방지하기 위해선 ```const MemoizedCounterB = React.memo(CountB, areEqual)``` 방식이 필요하며,

areEqual을 통해 조건문으로 true일 경우 React.memo 효과가 발생한다.



