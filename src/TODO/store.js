import { createStore } from "redux";
import todoReducer from "../TODO/TodoReducer";

const store = createStore(todoReducer);

export default store;
