import { configureStore, createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment(state, action) {
      state.count++;
    },

    decrement(state, action) {
      if (state.count > 0) {
        state.count--;
      }
    },
    addby(state, action) {
      state.count += action.payload;
    },
    reset(state, action) {
        state.count = 0;
        }
  },
});
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
export const actions = counterSlice.actions;
export default store;
