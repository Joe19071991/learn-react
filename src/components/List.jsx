import { useState } from "react";
import "../App.css";

export const List = () => {
  const [todos, setTodos] = useState([]);

  const fetchList = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await result.json();
    setTodos(data);
  };
  return (
    <div>
      <button onClick={() => fetchList()}>Fetch</button>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
};
