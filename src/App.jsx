import { useState } from "react";
import Todo from "./todo";
import TimerApp from "./timer-app";
const fruits = ["APple", "mango", "pineapople", "test"];
function App() {
  // if(true){
  const [name, setName] = useState(true);
  // }
  // const renderList = () => {
  //   return fruits.map((fruit) => {
  //     return <h4>{fruit}</h4>;
  //   });
  // };
  return (
    <div>
      {/* <h1>WE;lcome to credoz</h1> */}
      <Todo />
      {/*{fruits.map((fruit) => {
        return <h4 key={fruit}>{fruit}</h4>;
      })} */}
      {/* {name && <TimerApp />}
      <button onClick={() => setName((prev) => !prev)}>TOggle</button> */}
    </div>
  );
}

export default App;
