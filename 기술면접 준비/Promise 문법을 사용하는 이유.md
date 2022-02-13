```
 동기적 방식은 간혹 작업 도중 비효율적인 경우가 발생할 수 있는데, 예를 들어
 절차적으로 코드가 진행되다 수 많은 데이터를 받아 오는 과정을 겪게되면 뒤에 밀린 코드들이 계속 대기하고 있는 문제가 있다.
 이러한 직렬적 방식보다 병렬적으로 몇 부분은 우선적으로 처리하여 진행하는 방식이 웹에서는 더 필요한 경우가 있어 비동기 처리 방식을 선호하게 된다.


 그러나, 
 
 funcion func() {
  let a = 1
  let b = fetch("https://www.jsonDB.com/data")
  console.log(a)
  console.log(b)
 }
 
 위 코드의 결과는 1, undefined 결과로 비동기 진행은 특정 로직을 기다려주지 않고 나머지 코드를 먼저 실행하여 종료되는 문제가 있다.
 수 많은 데이터를 받아야 하는 AJAX 로직 문제를 해결하기 위해 생긴 것이 바로 Promise 문법이다.
 
 funcion func() {
  let a = 1
  let b = fetch("https://www.jsonDB.com/data").then(db => db.json)
  console.log(a)
  console.log(b)
 }

```
