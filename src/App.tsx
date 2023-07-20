import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { useSelector, useDispatch } from "react-redux";
import { AddTodo, DeleteTodo } from "./todo";

function App() {
  const [eachtodo, setEachTodo] = useState("");
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.value);

  return (
    <>
      <div className="bg-red-300 flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">todo app</h1>
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Enter todo"
            onChange={(e) => {
              setEachTodo(e.target.value);
            }}
          />
          <button
            onClick={() => {
              dispatch(
                AddTodo({
                  id: todoList[todoList.length - 1].id + 1,
                  todo: eachtodo,
                })
              );
            }}>
            Add Task
          </button>
        </div>
        <div>
          {todoList.map((each) => {
            return (
              <div key={each.id}>
                <span>{each.todo}</span>

                <button
                  onClick={() => {
                    dispatch(DeleteTodo({ id: each.id }));
                  }}>
                  Delete
                </button>
                <button>Button </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
