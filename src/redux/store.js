import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducer/index";

export const store  = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))