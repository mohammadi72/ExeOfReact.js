import React from "react";
import WithCount from "./WithCount";

const ClickCounter = ({ count, addCount, ...props }) => {
  return (
    <div>
      <h2 onClick={addCount}>clicked {count} times!!</h2>
    </div>
  );
};
export default WithCount(ClickCounter, 5);
