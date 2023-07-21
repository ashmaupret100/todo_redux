import { createSlice } from "@reduxjs/toolkit";
import { todoData } from "./data";

// interface ITodoSlice({
//   name: string,
//   initialState:
// })
// const todoData = [
//   {
//     id: 0,
//     todo: "",
//   },
// ];
export const todoSlice = createSlice({
  name: "todo",
  initialState: { value: todoData },
  reducers: {
    AddTodo: (state, action) => {
      state.value.push(action.payload);
      return state;
    },
    DeleteTodo: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload.id);
    },
    UpdateTodo: (state, action) => {
      state.value.map((todos) => {
        if (todos.id === action.payload.id) {
          todos.todo = action.payload.todo;
        }
      });
    },
  },
});

export const { AddTodo, DeleteTodo, UpdateTodo } = todoSlice.actions;

export default todoSlice.reducer;
