 ### 1. Project
 
  - 메뉴 오픈/클로즈 이벤트 효과

  ![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/78064720/132131048-6c0b11d7-835f-49f4-a76a-ba73bde91626.gif)


  * CSS 메뉴 hidden 코드 구현
  
  ```CSS
  @media screen and (max-width: 767px){
    .nav__menu{
        position: fixed;
        bottom: -100%;
        left: 0;
        width: 100%;
        background-color: var(--body-color);
        padding: 2rem 1.5rem 4rem;
        box-shadow: 0 -1px 4px rgba(0, 0, 0, .15);
        border-radius: 1.5rem 1.5rem 0 0;
        transition: .3s;
    }
  }
  
  .nav__toggle{
    color: var(--title-color);
    font-weight: var(--font-medium);
  }
  
  .nav__close{
    position: absolute;
    right: 1.3rem;
    bottom: .5rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--first-color);
  } 
  
  .nav__close:hover{
    color: var(--first-color-alt);
  }

  /* show menu */
  .show-menu{
    bottom: 0;
  }
  ```
  
 * JS 코드 구현 
   1. DOM 문법을 통해 ```getElementById``` id값 할당
   2. addEventListener 클릭이벤트 메서드 활용하여 클릭으로 동적 효과 부여
   3. navToggle 값이 있을 경우 ```add```, navClose 값이 있을 경우 ```remove```

  ```js
  
  /* ============== Menu show Y hidden =============== */ 
  const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


  /* ============== Menu show hidden Off=============== */ 
  /* 상수가 존재하는지 확인 */
  if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
  }


  /* ============== Menu show hidden On=============== */ 
  /* 상수가 존재하는지 확인 */
  if(navClose) {
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu');
    })
  }
  
  ```
  
