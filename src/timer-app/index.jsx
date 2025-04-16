import { useEffect, useState } from "react";
import CustomButton from "./custom-button";
import DisplayTimer from "./display-timer";

function TimerApp() {
  const [counter, setCounter] = useState(0);
  const [intervalInst, setIntervalInst] = useState(null);
  useEffect(() => {
    console.log("mount phase.........");
    handleStart();
    return () => {
      console.log("unmoiunt", intervalInst);
      handleStop();
    };
  }, []);

  useEffect(() => {
    console.log("change imn clout");
  }, [counter]);

  const handleStop = () => {
    // console.log("arg");
    if (intervalInst) {
      clearInterval(intervalInst);
      setIntervalInst(null);
    }
  };
  const handleStart = () => {
    const temp = setInterval(() => {
      console.log("interval", intervalInst);
      setCounter((prev) => prev + 1);
      //   setCounter((prevtOGGLE) =>!prevtOGGLE);
    }, 1000);
    setIntervalInst(temp);
  };
  return (
    <div className="container">
      <h3 className="fs-3 text-center">Counter APp</h3>
      <DisplayTimer counter={counter} />
      <div className="row mt-3 justify-content-around">
        <CustomButton
          styleName="col-4 btn-danger"
          title="Stop"
          handleClick={handleStop}
        />
        <CustomButton
          styleName="col-4 btn-primary"
          title="start"
          handleClick={handleStart}
          disabled={intervalInst}
        />
      </div>
    </div>
  );
}

export default TimerApp;
