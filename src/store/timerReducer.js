const timerIsCompletedDefaultState = {
    timerIsCompleted: false,
}
const timerIsActiveDefaultState = {
    timerIsActive: false,
}
const timerDurationDefault = {
    timerDuration: 30 * 1000,
}

const ActionTypes = {
    START_TIMER: "START_TIMER",
    STOP_TIMER: "STOP_TIMER",
    SET_IS_COMPLETED_TRUE: "SET_IS_COMPLETED_TRUE",
    SET_IS_COMPLETED_FALSE: "SET_IS_COMPLETED_FALSE",
    SET_TIMER_DURATION: "SET_TIMER_DURATION",
};

export const timerIsActive = (state = timerIsActiveDefaultState, action) => {
    switch (action.type) {
        case ActionTypes.START_TIMER:
            return {...state, timerIsActive: true}
        case ActionTypes.STOP_TIMER:
            return {...state, timerIsActive: false}
        default:
            return state;
    }
}

export const timerIsCompleted = (state = timerIsCompletedDefaultState, action) => {
    switch (action.type) {
        case ActionTypes.SET_IS_COMPLETED_TRUE:
            return {...state, timerIsCompleted: true}
        case ActionTypes.SET_IS_COMPLETED_FALSE:
            return {...state, timerIsCompleted: false}
        default:
            return state;
    }
}

export const timerDuration = (state = timerDurationDefault, action) => {
    switch (action.type) {
        case ActionTypes.SET_TIMER_DURATION:
            return {...state, timerDuration: action.payload}
        default:
            return state;
    }
}

export const startTimerAction = () => ({type: ActionTypes.START_TIMER})
export const stopTimerAction = () => ({type: ActionTypes.STOP_TIMER})

export const setTimerIsCompletedTrueAction = () => ({type: ActionTypes.SET_IS_COMPLETED_TRUE})
export const setTimerIsCompletedFalseAction = () => ({type: ActionTypes.SET_IS_COMPLETED_FALSE})

export const setTimerDuration = (payload) => ({type: ActionTypes.SET_TIMER_DURATION, payload})
