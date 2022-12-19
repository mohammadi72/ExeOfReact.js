import { useState } from "react";
import "./App";

const HookCounter = () => {
  const [count, setCount] = useState(0);
  const addOneHandler = () => {
    return setCount(count + 1);
  };
  const addTwoHandler = () => {
    return setCount(count + 2);
  };
  const addFiveHandler = () => {
    return setCount(count + 5);
  };

  return (
    <div>
      <h2>count-{count}</h2>
      <button onClick={addOneHandler}>add one</button>
      <button onClick={addTwoHandler}>add two</button>
      <button onClick={addFiveHandler}>add five</button>
    </div>
  );
};

export default HookCounter;
