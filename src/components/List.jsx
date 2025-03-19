import { useState } from "react";
import "../App.css";
import TodoItem from "./TodoItem";

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
      <ol>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ol>
    </div>
  );
};
