import { useState } from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { AddTodo, DeleteTodo, UpdateTodo } from "./todo";
import Modal from "./components/modal";
// const [editTodo, setEditTodo] = useState(false);

function App() {
  const [eachtodo, setEachTodo] = useState("");
  const [changetodo, setChangetodo] = useState("");
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.value);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="wrapper ">
        <h1>Todo App</h1>
        <div className="flex flex-col items-center">
          <input
            className="input"
            type="text"
            placeholder="Enter todo"
            onChange={(e) => {
              setEachTodo(e.target.value);
            }}
          />
          <button
            className="button add-button"
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
          {/* <button
            className="bg-white h-10 border-2 border-gray-600 hover:bg-white text-black font-bold py-2 px-4 rounded-lg"
            onClick={editTodo ? () => HandleUpdate(edit) : Addtask}>
            {editTodo ? "Update" : "Add To Do"}
          </button> */}
        </div>
        <div>
          {todoList.map((each) => {
            return (
              <div key={each.id}>
                <span className="todo-item">{each.todo}</span>
                <input
                  className="input"
                  type="text"
                  placeholder="Edit todo"
                  onChange={(e) => {
                    setChangetodo(e.target.value);
                  }}
                />

                <button
                  className=" button del-button"
                  onClick={() => {
                    dispatch(DeleteTodo({ id: each.id }));
                  }}>
                  Delete
                </button>
                <button
                  className=" button edit-button"
                  onClick={() => {
                    dispatch(UpdateTodo({ id: each.id, todo: changetodo }));
                  }}>
                  {/* onClick={() => {
                    setOpenModal(true);
                  }}> */}
                  Edit
                </button>
              </div>
            );
          })}
        </div>
        {/* {openModal && <Modal />} */}
      </div>
    </>
  );
}

export default App;
