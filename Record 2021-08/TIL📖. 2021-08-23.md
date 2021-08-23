 ### 1. 알고리즘
 
  - rotateMatrix
    * 2차원 N x N 배열을 시계 방향으로 90도 회전시킨 배열

  ```js
  let rotateMatrix = function(matrix, rotateNum = 1) {
  
    const N = matrix.length;
    const M = matrx[]
  
    rotateNum = rotateNum % 4;
  
    if(rotateNum === 0) {
      return matrix; 
    }
    
    const rotated = [];
    
    const RC = rotateNum % 2 === 1 ? [M, N] : [N, M];
    
    for(let x = 0; x < RC[0]; x++) {
      rotated[x] = [];
      for(let y = 0; y < RC[1]; y++) {
        if(rotateNum === 1) rotated[x][y] = matrix[N - y][x];
        else if(rotateNum === 2) 
          rotated[x][y] = matrix[N - x - 1][M - y - 1];
        else rotated[x][y] = matrix[y][M - x - 1];
      }
    }
    return rotated
  }
   
 
  ```
  
 ### 2. CLI
 
   - 권한 
     * -: 디렉토리 폴더가 아닌 상태, d: 디렉토리 폴더인 상태
     * r: 읽기, w: 수정, x: 실행
     
   - ex) -rw-r--r--****  
     * rrw- 읽기, 수정이 가능한 파일 소유자 (User)
     * r-- 오로직 읽기만 가능한 그룹 (Group)
     * r-- 오로직 읽기만 가능한 다른 이용자 (Other
     
   - chmod: 권한을 변경하는 명령어
     * +: 접근 권한 추가, -: 접근 권한 삭제, = 접근 실행
 
