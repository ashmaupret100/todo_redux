import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { todoData } from "./data";
// interface ITodoSlice({
//   name: string,
//   initialState:
// })

export const todoSlice = createSlice({
  name: "todo",
  initialState: { value: todoData },
  reducers: {
    AddTodo: (state, action) => {
      state.value.push(action.payload);
    },
    DeleteTodo: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { AddTodo, DeleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
