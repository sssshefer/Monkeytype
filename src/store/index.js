import {combineReducers, createStore} from "redux";
import {timerIsActive, timerIsCompleted} from "./timerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import { currentLetterId,currentLetterState} from "./currentLetterReducer";
import {caretX, caretY} from "./caretReducer";

const rootReducer = combineReducers({
    timerIsActive: timerIsActive,
    timerIsCompleted: timerIsCompleted,
    currentLetterId: currentLetterId,
    currentLetterState: currentLetterState,
    caretX:caretX,
    caretY:caretY

})
export const store = createStore(rootReducer, composeWithDevTools());