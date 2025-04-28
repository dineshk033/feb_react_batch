const CheckStatus = ({ completed, name }) => {
  if (completed) {
    return <label className="text-decoration-line-through">{name}</label>;
  }
  return <label className="todo-text-primary">{name}</label>;
};

export default CheckStatus;
