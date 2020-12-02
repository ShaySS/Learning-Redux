import { all } from "redux-saga/effects";
import watchColorChange from "./colorChangeSaga";

export default function* rootSaga() {
  yield all([watchColorChange()]);
}
