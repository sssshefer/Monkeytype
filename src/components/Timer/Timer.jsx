import {useTimer} from "../../hooks/useTimer";
import {useEffect, useState} from "react";
import cl from './Timer.module.css'
import {useDispatch} from "react-redux";
import {setTimerDuration} from "../../store/timerReducer";

const Timer = () => {
   const currentTimerValue = useTimer();
    return (
        <div className={cl.timerValue}>
            {currentTimerValue}
        </div>
    );
};

export default Timer;