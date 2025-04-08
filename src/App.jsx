import { useState } from "react";
import Todo from "./todo";
const fruits = ["APple", "mango", "pineapople", "test"];
function App() {
  // if(true){
  const [name, setName] = useState(null);
  // }
  // const renderList = () => {
  //   return fruits.map((fruit) => {
  //     return <h4>{fruit}</h4>;
  //   });
  // };
  console.log(name, setName(""));
  return (
    <div>
      {/* <h1>WE;lcome to credoz</h1> */}
      <Todo />
      {fruits.map((fruit) => {
        return <h4 key={fruit}>{fruit}</h4>;
      })}
    </div>
  );
}

export default App;
