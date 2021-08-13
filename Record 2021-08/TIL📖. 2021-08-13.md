# TIL 📖 ✏️

   
 ### 1. 알고리즘
 
  - 실패율

    
  ```js
  function solution(N, stages) {
    
    let record = []
    let fail = []
    let person = []
    let total = []
    let challenger = stages.length
    
    
    
    // step.1 각 스테이지 당 실패자 파악   
    // 결과: 각 라운드 실패자 [1, 3, 2, 1, 0] 
    // 결과: 각 라운드 살아남은 도전자 [8, 7, 4, 2, 1]
    for(let i = 1; i <= N; i++) {
        let count = 0
        for(let j = 0; j < stages.length; j++) {
            if(i == stages[j]) {
                count++
     
            }  
        }
        fail.push(count)
        person.push(challenger)
        challenger = challenger - count
    } 

    
    
    // step.2 실패율 종합
    // 결과: 각 라운드 실패자 [1, 3, 2, 1, 0] 
    // 결과: 각 라운드 살아남은 도전자 [8, 7, 4, 2, 1]
    
     for(let i = 0; i < N; i++) { 
        total.push({type : i + 1})
        total[i]["value"] = fail[i] / person[i]
    }
    
    
    
    // step.3 실패율 최종 순위 종합  
    // 각 스테이지 실패율 최종 순위(높은 확률부터 낮은 확률까지)   
    let result = []
    let valueSort = total.sort((x, y) => y.value - x.value  )
   
    valueSort.map((el, idx) => {
        result.push(valueSort[idx]["type"])
    })
        
 
    return result;
}

   
  ```
  
   ### 2. Redux
   
   -  Redux는 컴포넌트와 상태를 분리하는 패턴
   -  Redux 순서도에 따른 코드 구현 정리
  
