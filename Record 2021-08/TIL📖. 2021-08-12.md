# TIL 📖 ✏️

   
 ### 1. 알고리즘
 
  - balancedBrackets
    
  ```js
  function solution(scores) {
    // 이거,, 인접행렬로 접근 해야하는가..
    let obj = {}
    let pointcheck = {}
    
    for(let i = 0; i < scores.length; i++) {
        obj[i] = []
    }
    
    for(let i = 0; i < scores.length; i++) {
        for(let j = 0; j < scores.length; j++) { 
            obj[i].push(scores[j][i])
        }
    }
    
    let count = -1

        for(let i = 0; i < Object.keys(obj).length; i++) {
            let max = Math.max(...obj[i]) 
            let min = Math.min(...obj[i])
            let key
            count++
            if(obj[i][count] === max) {
                obj[i][count] = -1  
                key = "max"
            } else if(obj[i][count] === min) {
                obj[i][count] = -1
                key = "min"
            }
            for(let j = 0; j < Object.keys(obj).length; j++) { 
                if(i === j) continue
                
                if(obj[i][j] === max && key === "max") {
                    obj[i][count] = max
                } else if(obj[i][j] === min && key === "min") {
                    obj[i][count] = min
                }
            }
        }
    
    for(let i = 0; i < Object.keys(obj).length; i++) { 
        for(let j = 0; j < Object.keys(obj).length; j++) {  
            if(obj[i][j] === -1) {
                obj[i].splice(j, 1)
            }
        }
    }
    
    let result = []
    
    for(let i = 0; i <Object.keys(obj).length; i++) {
        result.push(obj[i].reduce((x, y) => x + y))
    }
    
    let totalGrade = []
    
    for(let i = 0; i < result.length; i++) {
        totalGrade.push(result[i] / obj[i].length)
    }
    
    let grade = ''
    
    for(let i = 0; i < totalGrade.length; i++) {
        
        switch (true) {
            case (totalGrade[i] >= 90):
                 grade = grade + 'A'
                break;
            case (totalGrade[i] >= 80):
                grade = grade + 'B'
                break;
            case (totalGrade[i] >= 70):
                grade = grade + 'C'
                break;
            case (totalGrade[i] >= 50):
                grade = grade + 'D'
                break;
            default:
                grade = grade + 'F'
                break
        }
    }
    
    return grade
}

   
  ```
  
