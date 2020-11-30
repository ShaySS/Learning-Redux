//Root reducer
import { combineReducers } from "redux";
import counter from "./counter";
import colorChanger from "./colorChanger";

const rootReducer = combineReducers({
  countValue: counter,
  color: colorChanger,
});
// Can also just write 'counter' in the curly braces, it would be ES6 sugar for counter: counter. Using the
// name countValue is a custom name, it can be whatever you want
// Here we are saying that countValue has a state value that comes from the counter reducer

export default rootReducer;
