import {useTimer} from "../../hooks/useTimer";
import {useState} from "react";
import cl from './Timer.module.css'
const Timer = ({duration}) => {
   const currentTimerValue = useTimer(duration);
    return (
        <div className={cl.timerValue}>
            {currentTimerValue}
        </div>
    );
};

export default Timer;