### 1. 알고리즘

  - 직사각형 별찍기
   
   ```js
   
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', data => {
    const n = data.split(" ");
    let result = ''
    for(let i = 0; i < n[1]; i++) {
        for(let j = 0; j < n[0]; j++) {
            result += '*'
        }
        result += '\n'
    }
    
    console.log(result)
    });
    
   ```
