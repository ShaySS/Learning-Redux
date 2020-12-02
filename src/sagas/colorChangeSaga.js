import { put, takeEvery, call } from "redux-saga/effects";
import * as actions from "../redux/actionTypes";
import axios from "axios";

function* colorChangeAsync() {
  try {
    console.log("called API");
    const response = yield call(
      axios.get,
      "http://www.colr.org/json/color/random"
    );
    console.log("response", response.data.new_color);
    yield put({
      type: actions.COLORCHANGEASYNC,
      payload: {
        color: response.data.new_color,
      },
    });
    //   .then((res) => console.log(`#${res.data.new_color}`));
    // axios.get(url)
    //   .then((res) =>
    //     put({
    //       type: actions.COLORCHANGEASYNC,
    //       color: res.data.new_color,
    //     })
    //   );
  } catch (e) {
    console.log("error", e);
  }
}

export default function* watchColorChange() {
  yield takeEvery(actions.COLORCHANGE, colorChangeAsync);
  //watch for the action actions.COLORCHANGE, and run colorChangeAsync. This intercepts the action from App.js
}
