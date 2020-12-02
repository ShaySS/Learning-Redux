// import { COLORCHANGE } from "../actionTypes";
// above is the same as the below
import * as actions from "../../actionTypes";

const initialColorState = "5d99d2";

const colorChanger = (state = initialColorState, action) => {
  switch (action.type) {
    case actions.COLORCHANGEASYNC:
      return action.payload.color;
    //if the COLORCHANGEASYNC action is dispatched,

    default:
      return state;
  }
};

export default colorChanger;
