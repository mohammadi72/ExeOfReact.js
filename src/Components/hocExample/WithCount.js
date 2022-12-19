import React from "react";
import { useState } from "react";

const WithCount = (WrappedComponent, incrementValue) => {
  const UpdateComponent = (props) => {
    const [count, setCount] = useState(0);
    const addCount = () => {
      setCount(count + incrementValue);
    };
    return <WrappedComponent count={count} addCount={addCount} {...props} />;
  };
  return UpdateComponent;
};
export default WithCount;
