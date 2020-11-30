import * as actions from "../actionTypes";

const initialState = 5;

const counter = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return state + 1;

    case actions.DECREMENT:
      return state - 1;

    default:
      return state;
  }
};

export default counter;
