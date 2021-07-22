# TIL 📖 ✏️
     

 ### 1. 알고리즘
 
  - isSubsetOf

  ```js
     let isSubsetOf = function (base, sample) {

  // 그냥 sort() 해버리면 시간 복잡도에 따라 엄청 비효율적이므로 오름차순 조건 설정하기!!
  base.sort((a, b) => a - b)
  sample.sort((a, b) => a - b)


  let baseIdx = 0
  for(let i = 0; i < sample.length; i++) {
    baseIdx = currentIdx(sample[i], base, baseIdx)
    // 함수 돌고 왔는데 만약 같은게 없으면 더이상 비교할 가치가 없으므로 바로 false
    if(baseIdx === -1) {
      return false;
    }
  }
  return true
};


function currentIdx(sample, base, baseIdx) {
  for(let i = baseIdx; i < base.length; i++) {
    // 같으면 해당 i 바로 리턴
    if(sample === base[i]) {
      return i
    // 숫자 차이가 크게 나면 더이상 비교할 가치가 없으므로 바로 -1 리턴
    } else if (sample < base[i]) {
      return -1
    }
  }
    return -1
}

  ```
 
