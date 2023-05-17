import rootReducer from "./Reducers/index";
// import { createStore } from "redux";
import { legacy_createStore } from "redux";

const store = legacy_createStore(rootReducer);

export default store;