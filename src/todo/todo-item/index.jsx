import CheckStatus from "./check-status";

function TodoItem({ name, completed, handleDelete }) {
  //   const checkStatus = (completed) => {
  //     if (completed) {
  //       return <label className="text-decoration-line-through">{name}</label>;
  //     } else {
  //       return <label>{name}</label>;
  //     }
  //   };
  return (
    <div className="d-flex justify-content-between mb-2">
      <div>
        <input type="checkbox" checked={completed} className="me-3" />
        <CheckStatus completed={completed} name={name} />
        {/* {checkStatus(completed)} */}
        {/* {completed ? (
          <div>
            <label>test</label>
          </div>
        ) : (
          <label>some</label>
        )} */}
      </div>
      <button
        className="btn btn-sm todo-danger"
        onClick={() => handleDelete(name)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
