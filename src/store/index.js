import {combineReducers, createStore} from "redux";
import {timerDuration, timerIsActive, timerIsCompleted} from "./timerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import { currentLetterId,currentLetterState} from "./currentLetterReducer";
import {caretX, caretY} from "./caretReducer";

const rootReducer = combineReducers({
    timerIsActive: timerIsActive,
    timerIsCompleted: timerIsCompleted,
    currentLetterId: currentLetterId,
    currentLetterState: currentLetterState,
    caretX:caretX,
    caretY:caretY,
    timerDuration:timerDuration,

})
export const store = createStore(rootReducer, composeWithDevTools());