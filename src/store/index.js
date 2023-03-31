import {combineReducers, createStore} from "redux";
import {timerIsActive} from "./timerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import { currentLetterId,currentLetterState} from "./currentLetterReducer";
import {caretX, caretY} from "./caretReducer";

const rootReducer = combineReducers({
    timer: timerIsActive,
    currentLetterId: currentLetterId,
    currentLetterState: currentLetterState,
    caretX:caretX,
    caretY:caretY

})
export const store = createStore(rootReducer, composeWithDevTools());