const defaultState = {
    currentLetterState: 'untyped',
    currentLetterId: 0,
}

const ActionTypes = {
    SET_UNTYPED: "SET_UNTYPED",
    SET_INCORRECT:"SET_INCORRECT",
    SET_CORRECT:"SET_CORRECT",
    NEXT_ID: "NEXT_ID",
    SET_NULL:"SET_NULL",
};

export const currentLetterState = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.SET_UNTYPED:
            return {...state, currentLetterState: 'untyped'}
        case ActionTypes.SET_INCORRECT:
            return {...state, currentLetterState: 'incorrect'}
        case ActionTypes.SET_CORRECT:
            return {...state, currentLetterState: 'correct'}
        default:
            return state;
    }
}

export const currentLetterId = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.SET_NULL:
            return {...state, currentLetterId: 0}
        case ActionTypes.NEXT_ID:
            return {...state, currentLetterId: state.currentLetterId + 1}
        default:
            return state;
    }
}

export const setCurrentLetterUntypedAction = ()=>({type:ActionTypes.SET_UNTYPED})
export const setCurrentLetterIncorrectAction = ()=>({type:ActionTypes.SET_INCORRECT})
export const setCurrentLetterCorrectAction = ()=>({type:ActionTypes.SET_CORRECT})

export const setNextIdAction = ()=>({type:ActionTypes.NEXT_ID})
export const setNullAction = ()=>({type:ActionTypes.SET_NULL})