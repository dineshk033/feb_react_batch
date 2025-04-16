import TodoItem from "../todo-item";

function TodoList(props) {
  console.log(props);
  return (
    <div className="row ">
      <div className="col-md-6 card p-3">
        {/* <TodoItem {...item} />
        <TodoItem {...TODOLISTVALUES[1]} />
        <TodoItem {...TODOLISTVALUES[2]} />
        <TodoItem {...item} /> */}
        {props.todoData.map((item) => (
          <TodoItem
            key={item.name}
            {...item}
            handleDelete={props.handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
