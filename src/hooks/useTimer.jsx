import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    setTimerIsCompletedFalseAction, setTimerIsCompletedTrueAction,

    stopTimerAction
} from "../store/timerReducer";

let interval;
let timer;
export const useTimer = () => {
    const dispatch = useDispatch();
    const timerIsActive = useSelector(state=>state.timerIsActive.timerIsActive);
    const duration = useSelector(state=>state.timerDuration.timerDuration);

    const [currentTimerValueSec, setCurrentTimerValueSec] = useState(duration / 1000);
    const clearTimer = () => {
        setCurrentTimerValueSec(duration / 1000);
    }
    useEffect(() => {
        if (timerIsActive) {
            clearTimer()
            startTimer(duration)
            dispatch(setTimerIsCompletedFalseAction());
        } else {
            stopTimer();

            setCurrentTimerValueSec(duration/1000)

        }
    }, [timerIsActive])
    useEffect(() => {
        setCurrentTimerValueSec(duration/1000);
        stopTimer();
    }, [duration])

    const startTimer = async (duration) => {
        interval = setInterval(() => {
            setCurrentTimerValueSec(currentTimerValueSec => currentTimerValueSec - 1 >= 0 ? currentTimerValueSec - 1 : 0)
        }, 1000);
        timer = setTimeout(() => {
            stopTimerWithEvent();
            dispatch(setTimerIsCompletedTrueAction());
        }, duration)
    }
    const stopTimer = () => {
        clearInterval(interval);
        clearTimeout(timer)
        dispatch(stopTimerAction())
    }

    const stopTimerWithEvent = () =>{
        stopTimer();
    }
    return currentTimerValueSec;

}