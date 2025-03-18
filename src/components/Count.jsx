import { useState } from "react";

export const Count = () => {
  const [count, setCount] = useState(0);

  const incCount = () => {
    setCount(count + 1);
  };

  const desCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Compte: {count}</h1>
      <button onClick={() => desCount()}>-</button>
      <button onClick={() => incCount()}>+</button>
    </div>
  );
};
