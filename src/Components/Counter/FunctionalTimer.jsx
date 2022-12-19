import React, { useState, useEffect } from "react";

const FunctionalTimer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const myTimer = setInterval(() => {
      console.log("hi zahra");
      setCount(count + 1);
      console.log(count);
    }, 1000);
    return clearInterval(myTimer);
  }, []);

  return <div>class interval</div>;
};
export default FunctionalTimer;
