import * as actions from "./actionTypes";

export const increment = () => ({
  type: actions.INCREMENT, //dispatches an action with type: "INCREMENT", reducer is passed this value
});

export const decrement = () => ({
  type: actions.DECREMENT,
});

export const changeColor = (color) => ({
  type: actions.COLORCHANGE,
  payload: {
    color: color,
  },
});

//further learning: try adding a payload?
