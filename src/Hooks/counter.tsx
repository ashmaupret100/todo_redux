import React from "react";
import useCounter from "./useCounter";

function counter() {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      <button onClick={increment}>+</button>
      {count}
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default counter;
