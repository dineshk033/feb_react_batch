import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [multipleOfFive, setMultipleOfFive] = useState(0);
  //   var count = 0;
  function handleClick() {
    // count += 1;
    setCount(count + 1); //async
    if ((count + 1) % 5 === 0) {
      setMultipleOfFive(multipleOfFive + 1);
    }
  }
  //const handleClick=()=>{}
  //   console.log(count);
  //   setCount(count + 1);
  return (
    <>
      <h4 className="p-4 fs-3">Counter:{count}</h4>
      <h4 className="p-4 fs-3">Multiple:{multipleOfFive}</h4>
      <button className="m-4 btn btn-primary" onClick={handleClick}>
        inctrement
      </button>
    </>
  );
}

export default Counter;
