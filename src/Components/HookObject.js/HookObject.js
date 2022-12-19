import { useState } from "react";

const HookObject = () => {
  const [userData, setUserData] = useState({ firstName: "", lastName: "" });
  const changeHandler = (e) => {
    setUserData({ ...userData, firstName: e.target.value });
  };
  const changeHandlerLastN = (e) => {
    setUserData({ ...userData, lastName: e.target.value });
  };
  return (
    <form>
      <input type="text" value={userData.firstName} onChange={changeHandler} />

      <h2>my Name is: {userData.firstName} </h2>
      <input
        type="text"
        value={userData.lastName}
        onChange={changeHandlerLastN}
      ></input>
      <h2>my lastName is: {userData.lastName}</h2>
    </form>
  );
};

export default HookObject;
