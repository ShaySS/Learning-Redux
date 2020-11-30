// import { COLORCHANGE } from "../actionTypes";
// above is the same as the below
import * as actions from "../actionTypes";

const initialState = "red";

const colorChanger = (state = initialState, action) => {
  switch (actions.COLORCHANGE) {
    case true:
      return state; //if the COLORCHANGE action is dispatched,

    default:
      return state;
  }
};

export default colorChanger;
