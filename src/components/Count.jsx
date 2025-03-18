import { useState } from "react";

export const Count = () => {
  const [count, setCount] = useState(0);

  const changeCount = (value) => {
    setCount(count + value);
  };

  return (
    <div>
      <h1>Compte: {count}</h1>
      <button onClick={() => changeCount(-1)}>-</button>
      <button onClick={() => changeCount(+1)}>+</button>
    </div>
  );
};
