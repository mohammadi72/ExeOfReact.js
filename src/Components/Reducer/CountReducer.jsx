import { useReducer } from "react";
const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "addOne":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "addOne2":
      return state + action.value;
    case "decrement2":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const CountReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  // const [count, setCount] = useState(0);
  // const addOne = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };
  // const addFive = () => {
  //   setCount((prevCount) => prevCount + 5);
  // };
  // const decrement = () => {
  //   setCount((prevCount) => prevCount - 1);
  // };

  return (
    <div>
      <h2> count is:{count}</h2>
      <button onClick={() => dispatch({ type: "addOne", value: 1 })}>
        add One
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>

      <h2> count is:{countTwo}</h2>
      <button onClick={() => dispatchTwo({ type: "addOne2", value: 1 })}>
        add One2
      </button>
      <button onClick={() => dispatchTwo({ type: "decrement2", value: 1 })}>
        Decrement2
      </button>
      <button onClick={() => dispatchTwo({ type: "reset" })}>reset</button>
    </div>
  );
};

export default CountReducer;
