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
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            {/* si c'est true on affiche le titre sinon on affiche rien (null) */}
            <p style={{ color: todo.completed ? "lime" : "red" }}>
              {todo.title}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};
