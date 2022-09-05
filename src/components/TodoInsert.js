import { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

const TodoInsert = ({ handleInsert }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = useCallback((e) => {
    setNewTodo(e.target.value);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleInsert(newTodo);
    setNewTodo("");
  };

  return (
    <form className="TodoInsert" onSubmit={handleSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={newTodo}
        onChange={handleChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
