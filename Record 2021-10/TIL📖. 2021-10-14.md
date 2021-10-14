### 1. Persnal-Potfolio

  - Scroll Up 기능 구현
    
    ![scroll](https://user-images.githubusercontent.com/78064720/137333640-791b8b78-d664-4f5c-8c57-63c2d1f4bfd4.gif)

    * scrollY 560 이상 좌표가 내려갔을 경우 Scroll Up 기능 렌더링되며 DOM 방식으로 add
    * 만일 클릭할 경우 다시 최상단 위치로 이동하며 DOM 방식으로 Remove

    ```js
    
    function scrollUp(){
      const scrollUp = document.getElementById('scroll-up');
      // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
      if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)
    
    ```
  - Dark-Light 기능 구현

    ![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/78064720/137334103-d64a9561-8467-49be-b7e6-ef3e8cd4d6b4.gif)


    * 클릭 On, Off에 따라 아이콘 자동 변경
    * Dark Mod, Nomal Mod에 대한 CSS 기능 실현을 DOM으로

    ```js
    
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'uil-sun'

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
      themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
    }
    
    ```
    
