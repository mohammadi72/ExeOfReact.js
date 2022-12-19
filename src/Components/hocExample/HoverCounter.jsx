import React from "react";
import WithCount from "./WithCount";

const HoverCounter = ({ count, addCount, name, ...props }) => {
  console.log(name);
  return (
    <div>
      <h2 onMouseOver={addCount}>Hovered {count} times!!</h2>
    </div>
  );
};

export default WithCount(HoverCounter, 10);
