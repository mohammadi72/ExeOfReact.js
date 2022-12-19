import { useCount, useCountActions } from "./CounterProvider";
const CounterOne = () => {
  const count = useCount();
  // const { addFive, addOne } = useCountActions();
  const dispatch = useCountActions();

  return (
    <div>
      <h2>counter is: {count}</h2>
      <button onClick={() => dispatch({ type: "add", value: 1 })}>
        Add one
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default CounterOne;
