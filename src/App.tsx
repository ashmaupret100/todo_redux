import "./App.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./slice/Todo.slice";

function App() {
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
      <button type="submit">Add</button>
      <button>Delete</button>
      <button>Edit</button>
    </form>
  );
}

export default App;
