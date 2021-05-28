# TIL 📖 ✏️


 ### 1. Computer Science
 
  - Call Stack과 Memory Heap
    * Call Stack : 함수의 호출 시 지역 변수와 매개 변수가 저장되는 되는 임시 메모리 영역
      (Javascript에선 heap은 객체, 배열, 함수와 같이 크기가 동적으로 변할 수 있는 참조타입 값을 저장)
    * Memory Heap : 사용자 프로그래머가 직접 할당/해제 하는 메모리 영역
      (Javascript에선 call stack은 정적으로 간단히 값들만 할당된 변수들도 저장)
  - 웹 브라우저의 콘솔창 Call Stack
    * 한번에 하나의 일만 처리할 수 있기때문에(싱글 쓰레드) 함수의 호출과 같은 동작들을 차례대로 실행하기 위해 기록하는 곳 
    * 변수의 할당과 선언 같은 일까지는 Call Stack frame에 확인 불가능
