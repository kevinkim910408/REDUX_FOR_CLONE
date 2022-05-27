/* 액션 타입 만들기 */
// 다른모듈과 이름 중복방지를 위해 이렇게 만든다
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/* 액션 생성함수 만들기 */
// 내가 밖에서 사용할 액션함수를 만든다. export빼먹지말기
export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

/* 초기 상태 선언 */
// 제일 처음 store가 가질 초기값이다
const initialState = {
  number: 0, // 화면에 보여줄 초기값
  diff: 1 // input에 띄워줄 초기값
};

/* 리듀서 선언 */
// 리듀서는 합치는애가 받아야하니 export를 잊지말자
// 파라미터에는 초기값이랑 어떤액션이 취해져야하는지가 들어간다.
export default function counter(state = initialState, action) {

  // action은 기본적으로 type이있다. 그걸로 switch case
  switch (action.type) {
 
  	// input에 띄워줄 값
    case SET_DIFF:
    	// state안의 객체에있는 diff key를 가진놈한테 데이터를 덮어씌운다
      return {...state, diff: action.diff}; 
    case INCREASE:
      return { ...state, number: state.number + state.diff};
    case DECREASE:
      return {...state, number: state.number - state.diff};
    default:
      return state;
  }
}