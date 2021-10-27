### 1. Modal 기능 구현

  ![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/78064720/139086546-c61a0ea5-7cc5-4877-9506-f79ebf0a05ce.gif)

  - javscript 기능

  ```js
  const openButton = document.getElementById("open")
  const modal = document.querySelector(".modal")
  const overlay = modal.querySelector(".modal__overlay");
  const closeBtn = modal.querySelector('button');

  const oepenModal = () => {
      modal.classList.remove("hidden")
  }
  const closeModal = () => {
      modal.classList.add("hidden")
  }

  overlay.addEventListener('click', closeModal)
  closeBtn.addEventListener('click', closeModal)
  openButton.addEventListener('click',oepenModal)

  ```
  
  * DOM을 통해 HTML 버튼 조작
  * modal 변수는 모달 기능의 최상위 부모엘리먼트이므로 hidden on/off 역할 수행
  * openButton 변수는 모달창 실행. 즉, hidden off 상태로 변경
  * overlay, closeBtn는 모달창 종료. 즉, hidden on 상태로 변경

  
