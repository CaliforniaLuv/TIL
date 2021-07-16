# TIL 📖 ✏️
     

 ### 1. 알고리즘
 
  - 프로그래머스 2016년
    * getDay() 메서드를 통해 요일 값 추적 가능
    * new Date('해당년도 및 월, 일') 작성 시 검색 가능
    * switch문으로 나눠서 진행
    * [] 배열로 나누어 로직 구현도 


     ```javascript

          function solution(a, b) {
    // new Date("2016-05-26").getDay() // 4
    // 0부터 토요일 
    let month = a
    let day = b
    let _2016_day = new Date(`2016-${a}-${b}`).getDay()
    
    
    switch(_2016_day) {
    case 0:
    return "SUN"
    case 1:
    return "MON"
    case 2:
    return "TUE"
    case 3:
    return "WED"
    case 4:
    return "THU"
    case 5:
    return "FRI"
    default :
    return "SAT"
    }
}

     ```
