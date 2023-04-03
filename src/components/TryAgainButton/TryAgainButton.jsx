import React from 'react';
import cl from './TryAgainButton.module.css'
import {setTimerIsCompletedFalseAction} from "../../store/timerReducer";
import {useDispatch} from "react-redux";

const TryAgainButton = ({children}) => {
    const dispatch = useDispatch();
    const reload = () => {
        dispatch(setTimerIsCompletedFalseAction());
    }

    return (
        <div className={cl.buttonWrap}>
            <button className={cl.button} onClick={() => reload()}>
                {children}
            </button>
        </div>
    );
};

export default TryAgainButton;