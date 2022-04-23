import { createSlice } from "@reduxjs/toolkit";

// const a = createSlice({name : "a" , initalState { value(Counter.js의 useSelectior의 값과 연관있다 )} , reducer: { 여기 안에 actions들이 들어간다}})
export const counterSlice = createSlice({
  name: "jinwonCounter",
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      // 현재 상태 뿐만 아니라 action을 받기 때문에 위의 두 개는 dispatch(increment())로 실행만 시켜주면 되지만 얘를 쓸 땐 dispatch(incrementByAmount(5))와 같이 값을 줘야함
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// reducer안에 있는 얘네들은 actions라는 변수로 이미 지정되어있다.

export default counterSlice.reducer;
