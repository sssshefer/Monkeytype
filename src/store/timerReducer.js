const defaultState = {
    timerIsActive: false,
}
const START_TIMER = "START_TIMER";
const STOP_TIMER = "STOP_TIMER";

export const timerIsActive = (state = defaultState, action) => {
    switch (action.type) {
        case START_TIMER:
            return {...state, timerIsActive: true}
        case STOP_TIMER:
            return {...state, timerIsActive: false}
        default:
            return state;
    }
}

export const startTimerAction = () => ({type: START_TIMER})
export const stopTimerAction = () => ({type: STOP_TIMER})