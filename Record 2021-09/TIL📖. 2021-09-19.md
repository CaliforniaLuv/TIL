 ### 1. Project
 

  - portfolio 방향 
    * swiper 기능 카피
    * www.swiperjs.com 6.5.8 version

    ![potifolio](https://user-images.githubusercontent.com/78064720/133930539-215de54f-999b-4e95-bd9a-db449767df86.gif)

    ```js
    
      let swiper = new Swiper(".portfolio__container", {
        cssMode: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
      },
      });
    
    ```
    
