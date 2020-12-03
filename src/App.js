import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { changeColor, decrement, increment } from "./redux/actions";
import Box from "./components/Box";

const App = () => {
  const myCount = useSelector((state) => state.countValue); //extract state.countValue and assign it to myCount
  const boxColor = useSelector((state) => state.color);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment()); //reference to the action dispatch in actions.js
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleColorChange = () => {
    dispatch(changeColor());
  };
  console.log("box color", boxColor);

  return (
    <main>
      <h1> Count: {myCount} </h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleColorChange}>Change color </button>
      <Box color={`#${boxColor}`} />
    </main>
  );
};

export default App;
