import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector(
    (state) => state.count,
    (prevCount, nextCount) => prevCount === nextCount
  );
  const dispatch = useDispatch();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
    </div>
  );
};
