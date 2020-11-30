import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/actions";
import Box from "./components/Box";

const App = () => {
  const myCount = useSelector((state) => state.countValue); //extract state.countValue and assign it to myCount
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment()); //reference to the action dispatch in actions.js
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <main>
      <h1> Count: {myCount} </h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <button>Change color</button>
      <Box color="blue" />
    </main>
  );
};

export default App;
