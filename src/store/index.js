import {combineReducers, createStore} from "redux";
import {reducer} from "./cashReducer";
import {timerIsActive} from "./timerReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer   = combineReducers({
cash:reducer,
    timer:timerIsActive,
})
export const store = createStore(rootReducer, composeWithDevTools());