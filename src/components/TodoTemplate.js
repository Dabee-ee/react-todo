import "./TodoTemplate.scss";

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">오늘의 할 일</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
