import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0); //Initialization
  console.log("component is render!");
  console.log(`count = ${count}`);
 
  let inCount = () => {
    setCount(count+1);
  };

   return (
    <div>
        <h3>Count = {count}</h3>
        <button onClick={inCount}>Increase Count</button>
    </div>
   );
}