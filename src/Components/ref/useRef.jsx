import React from "react";
import { useState } from "react";
import { useRef, useEffect } from "react";

const UseRefExample = () => {
  const [inputValue, setInputValue] = useState(" ");
  const resetHandler = () => {
    setInputValue("");
    inputRef.current.focus();
  };
  const inputRef = useRef();
  const previousValue = useRef();
  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);
  const changeHandler = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };
  useEffect(() => {
    previousValue.current = inputValue;
  }, [inputValue]);
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={changeHandler}
        ref={inputRef}
      ></input>
      <button onClick={resetHandler}>Reset</button>
      <p>
        my name is {inputValue} and it used be{previousValue.current}
      </p>
    </div>
  );
};
export default UseRefExample;
