//액션 타입을 정의해준다
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

//액션 생성 함수를 만듭니다.
//이 함수들은 나중에 다른 파일에서 불러와야 하므로 내보내줍니다.
export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});

//모듈의 초기 상태를 정의합니다.
const initialState = {
  number: 0
};

//리듀서를 만들어서 내보내줍니다.
export default function reducer(state = initialState, action) {
  //리듀서 함수에서는 액션의 타입에 따라 변화된 상태를 정의하여 반환합니다.
  switch (action.type) {
    case INCREMENT:
      return {
        number: state.number + 1
      };
    case DECREMENT:
      return {
        number: state.number - 1
      };

    default:
      return state;
  }
}
