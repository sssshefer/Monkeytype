import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {startTimerAction, stopTimerAction} from "../store/timerReducer";

let interval;
let timer;
export const useTimer = ( duration) => {
    const dispatch = useDispatch();
    const timerIsActive = useSelector(state=>state.timer.timerIsActive);

    const [currentTimerValueSec, setCurrentTimerValueSec] = useState(duration / 1000);
    const clearTimer = () => {
        setCurrentTimerValueSec(duration / 1000);
    }
    useEffect(() => {
        if (timerIsActive) {
            clearTimer()
            startTimer(duration)
        } else {
            stopTimer()
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
        }, duration)
    }
    const stopTimer = () => {
        clearInterval(interval);
        clearTimeout(timer)
    }

    const stopTimerWithEvent = () =>{
        stopTimer();
    }
    return currentTimerValueSec;

}