const CheckStatus = ({ completed, name }) => {
  if (completed) {
    return <label className="text-decoration-line-through">{name}</label>;
  }
  return <label>{name}</label>;
};

export default CheckStatus;
