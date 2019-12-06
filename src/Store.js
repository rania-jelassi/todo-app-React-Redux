import { createStore } from "redux";
import countReducer from "./CountReducer";
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(countReducer, reduxDevTools);

export default store;
