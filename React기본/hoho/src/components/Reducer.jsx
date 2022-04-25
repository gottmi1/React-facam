import React, { useReducer } from 'react'

// reducer => state를 변경하는 로직이 담겨있는 함 수
const reducer = (state,action) => {
  if(action.type === 'plus') {
    return {count : state.count + 1};
  }
  if(action.type === 'minus') {
    return {count : state.count - 1};
  }
  return state;
}
// dispatch => action 객체를 넣어서 실행시킴
// action = 객체이고 필수 프로퍼티로 type을 가짐

export default function Reducer() {

  const [state,dispatch] = useReducer(reducer, {count : 0})

  return (
    <div>
      <p>클릭 {state.count} 번 함</p>
      <button onClick={click}>클릭</button>
      <button onClick={min}>클릭</button>
    </div>
  )
  function click() {
    dispatch({type : 'plus'})
  }
  function min() {
    dispatch({type : 'minus'})
  }
}
