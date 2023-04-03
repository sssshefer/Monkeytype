const defaultState = {
    caretX: 0,
    caretY:0,
}

const ActionTypes = {
    SET_CARETX: "SET_CARETX",
    SET_CARETY:"SET_CARETY",
};

export const caretX = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.SET_CARETX:
            return {...state, caretX: action.payload}
        default:
            return state;
    }
}

export const caretY = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.SET_CARETY:
            return {...state, caretY: action.payload}

        default:
            return state;
    }
}

export const setCaretX = (payload)=>({type:ActionTypes.SET_CARETX, payload})
export const setCaretY = (payload)=>({type:ActionTypes.SET_CARETY, payload})
