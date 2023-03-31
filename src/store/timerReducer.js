const defaultState = {
    timerIsActive: false,
}

const ActionTypes = {
    START_TIMER: "START_TIMER",
    STOP_TIMER: "STOP_TIMER",
};

export const timerIsActive = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.START_TIMER:
            return {...state, timerIsActive: true}
        case ActionTypes.STOP_TIMER:
            return {...state, timerIsActive: false}
        default:
            return state;
    }
}

export const startTimerAction = () => ({type: ActionTypes.START_TIMER})
export const stopTimerAction = () => ({type: ActionTypes.STOP_TIMER})