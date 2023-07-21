import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./slice/Todo.slice";

function App() {
  const todos = useSelector((state) => {
    state.todo.value;
  });
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add({ text: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type your order"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div>
        {todos.map((items) => {
          return <div key={items.text}>{items.text}</div>;
        })}
      </div>
      <button type="submit">Add</button>
      <button>Delete</button>
      <button>Edit</button>
    </form>
  );
}

export default App;
