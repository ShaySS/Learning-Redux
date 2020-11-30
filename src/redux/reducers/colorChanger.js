// import { COLORCHANGE } from "../actionTypes";
// above is the same as the below
import * as actions from "../actionTypes";

const initialState = "blue";

const colorChanger = (state = initialState, action) => {
  switch (actions.COLORCHANGE) {
    case true:
      return state;

    default:
      return state;
  }
};

export default colorChanger;
