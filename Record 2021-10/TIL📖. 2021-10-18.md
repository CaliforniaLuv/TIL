### 1. CSS

  - text-align과 align-item
  
    * text-align: span,a,label,image,normal text 등 각종 비 정형화/텍스트 객체에 적용 가능
    * align-item: div,table 등의 정형화 및 공간 객체에 적용 가능

  - @media screen and (Layout Size)

    ![ezgif com-gif-maker](https://user-images.githubusercontent.com/78064720/137637179-93ed4d47-0f1b-426f-8676-d8bdc494d5d6.gif)


    ```CSS
    @media screen and (max-width: 780px) {
  
  
    }
  
    ```
  
    * 해당 페이지의 크기가 줄어질 경우 자동적으로 CSS가 상황에 맞는 레이아웃이 짜여짐
    * 이를 반응형 웹사이트라고 부름
    * 스마트폰 및 태블릿 디바이스에 알맞은 규격을 맞춰줌

  - 순수 CSS 변수 선언하기
  
    * 한 가지 색깔을 여러 class, id에 적용할 경우 모두 변경해야할 경우가 생길 시 불편한 관계로 변수 지정
  
    ```CSS
   
    :root {
      --text-color: white;
    }
   
    div {
      color: var(--text-color)
    }
   
    ```
