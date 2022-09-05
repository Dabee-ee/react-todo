import { useCallback, useState } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import TodoMockData from "./mock/TodosMock.json";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState(TodoMockData);

  const handleInsert = (text) => {
    const todo = {
      id: uuidv4(),
      text,
      checked: false,
    };
    setTodos(todos.concat(todo)); // spread 연산자를 사용해도 됨.
  };

  const handleToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);

  const handleRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <>
      <TodoTemplate>
        <TodoInsert handleInsert={handleInsert} />
        <TodoList
          todos={todos}
          handleToggle={handleToggle}
          handleRemove={handleRemove}
        />
      </TodoTemplate>
    </>
  );
}

export default App;
