import { TODOLISTVALUES } from "../../constant/todolistValues";
import TodoItem from "../todo-item";

function TodoList() {
  const item = TODOLISTVALUES[0];

  return (
    <div className="row ">
      <div className="col-md-6 card p-3">
        <TodoItem {...item} />
        <TodoItem {...TODOLISTVALUES[1]} />
        <TodoItem {...TODOLISTVALUES[2]} />
        <TodoItem {...item} />
      </div>
    </div>
  );
}

export default TodoList;
