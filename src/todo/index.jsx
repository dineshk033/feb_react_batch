import { useEffect, useState } from "react";
import TodoList from "./todo-list";
import { TODOLISTVALUES } from "../constant/todolistValues";
import styles from "./index.module.css";
// const person = { name: "mr.", age: 234, dob: "@#3" };
function Todo() {
  const [todoData, setTodoData] = useState([]);
  const [deleteData, setDeleteData] = useState(null);
  useEffect(() => {
    setTodoData(TODOLISTVALUES);
  }, []);
  useEffect(() => {
    if (deleteData) {
      const temp = todoData.filter((item) => item.name != deleteData);
      setTodoData(temp);
    }
  }, [deleteData]);
  const handleDelete = (arg) => {
    console.log(arg);
    setDeleteData(arg);
  };
  return (
    <div className="container">
      <h1 className={`fs-2 ${styles.todoTextPrimary}`}>Todo Application</h1>
      <TodoList todoData={todoData} handleDelete={handleDelete} />
    </div>
  );
}

export default Todo;
{
  /* <Todo/> */
}
