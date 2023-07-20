import { createSlice } from "@reduxjs/toolkit";

export const Todoslice = createSlice({
  name: "todo",
  initialState: [
    {
      text: "",
      // initial value is empty string
    },
  ],

  reducers: {
    add: (state, action) => {
      //this will update the state
      const newText = { text: action.payload.text };
      state.push(newText);
    },
    delete: (state) => {},
  },
});

const TodoReducer = Todoslice.reducer;

export const { add } = Todoslice.actions;
export default TodoReducer;
