# TIL 📖 ✏️
     

 ### 1. 알고리즘 (프로그래머스)
 
  - K번째수
    * 주어진 배열에 맞춰진 별도의 배열 정리
    * sort 메서드 응용하여 정렬 
    * slice 메서드를 통해 원하는 위치 정리
    * 그러나 slice는 시간 복잡도에 관련하여 성능 저하를 야기 시키므로 주의하여 쓸 것!!!!
  
  ```javascript
  
  function solution(array, commands) {
    var answer = [];
    // commands [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
    // sortArr  [1, 2, 3, 4, 5, 6, 7]
    
    for (let i = 0; i < commands.length; i++) {
        // 자르고
        let arrnew = array.slice(commands[i][0] - 1, commands[i][1])
        // 정렬해서
        arrnew.sort((x, y) => x - y)
        // k번째 자리 빈배열 할당해줘라
        answer.push(arrnew.slice(commands[i][2] - 1, commands[i][2]))
    }

    return answer.flat();
}
  ```
  
