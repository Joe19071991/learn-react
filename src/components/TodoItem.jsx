import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <li>
      {/* si c'est true on affiche le titre sinon on affiche rien (null) */}
      <p style={{ color: todo.completed ? "lime" : "red" }}>{todo.title}</p>
    </li>
  );
};

export default TodoItem;
