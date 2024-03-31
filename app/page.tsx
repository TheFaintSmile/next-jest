'use client'
import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{display: "flex", flexDirection: "column", gap: "1em"}}>
      <h1>Counter App</h1>
      <div style={{display: "flex", gap: "1em"}}>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}
