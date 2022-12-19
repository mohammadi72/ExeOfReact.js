import React, { useContext, useReducer } from "react";
const CounterContext = React.createContext();
const CounterContextDispatcher = React.createContext();
const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrement":
      return state - action.value;

    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterProvider = ({ children }) => {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={dispatch}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;

export const useCount = () => useContext(CounterContext);

export const useCountActions = () => {
  return useContext(CounterContextDispatcher);

  // const setCount = useContext(CounterContextDispatcher);
  // console.log(setCount);
  // const addOne = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };
  // const addFive = () => {
  //   setCount((prevCount) => prevCount + 5);
  // };
  // return { addFive, addOne };
};
