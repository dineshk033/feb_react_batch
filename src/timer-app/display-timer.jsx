function DisplayTimer({ counter = 0 }) {
  return (
    <div className="border border-2 p-5">
      <h6 className="text-center">{counter}</h6>
    </div>
  );
}

export default DisplayTimer;
