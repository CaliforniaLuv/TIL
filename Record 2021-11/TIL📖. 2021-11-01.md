### 1. scroll Up DOM

  - CHANGE BACKGROUND HEADER

    ```js
 
    function scrollHeader(){
      const nav = document.getElementById('header')
      // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
      if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)

 
    ```
 
  - CHANGE BACKGROUND HEADER

    ```js
  
    function scrollUp(){
      const scrollUp = document.getElementById('scroll-up');
      // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
      if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)
  
    ```
  
    * scrollY를 통해 해당 스코롤 수직 간격이 내려가면 Class가 추가(add)되며 다시 올라갈 경우 삭제(remove)됨
  
