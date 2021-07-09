# TIL 📖 ✏️
     

 ### 1. Redux
 
  - 액션 생성함수 (Action Creator)
   * 액션 생성함수는, 액션을 만드는 함수. 단순히 파라미터를 받아와서 액션 객체 형태로 만듬
   
   ```javascript
  
    function addTodo(data) {
      return {
        type: "ADD_TODO",
        data
      };
    }
   ```
   
  - 리듀서 (Reducer)
   * 리듀서는 변화를 일으키는 함수. 리듀서는 두가지의 파라미터를 받아옴 (state은 현재 상태의 데이터 종합, action은 전달받은 데이터)

     ```javascript
    function reducer(state, action) {

    switch (action.type) {
      case ADD_TODO:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }
    }
     ```
   
   
  - 디스패치 (dispatch)
   * 디스패치는 스토어의 내장함수 중 하나임. 쉽게 액션을 발생 시키는 것이라고 보면 좋음.
   * dispatch 라는 함수에는 액션을 파라미터로 전달. ex) dispatch(action) 
   


