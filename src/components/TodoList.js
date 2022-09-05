import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

const TodoList = ({ todos, handleToggle, handleRemove }) => {
  return (
    <div className="TodoList">
      {todos &&
        todos.map((todo) => (
          <TodoListItem
            todo={todo}
            key={todo.id}
            onRemove={handleRemove}
            onToggle={handleToggle}
          />
        ))}
    </div>
  );
};

export default React.memo(TodoList);
