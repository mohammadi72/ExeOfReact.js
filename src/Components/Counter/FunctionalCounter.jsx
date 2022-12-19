import React, { Component, useState } from "react";
import { useEffect } from "react";
import style from "./ClassCounter.module.css";
const FunctionalCounter = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const addCountHandler = () => {
    setCount(count + 1);
  };
  const onChangeHandler = (event) => {
    setName(event.target.value);
  };
  useEffect(() => {
    console.log("document title updating!");
    document.title = `clicked: ${count} times`;
  }, [count]);

  return (
    <div className={style.ClassCounter}>
      <div>
        <button onClick={addCountHandler}>Add Count</button>
        <p>count: {count}</p>
      </div>
      <div>
        <input type="text" onChange={onChangeHandler}></input>
        <p>name: {name}</p>
      </div>
    </div>
  );
};
export default FunctionalCounter;
