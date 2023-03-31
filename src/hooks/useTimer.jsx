import {useEffect, useState} from "react";

let interval;
let timer;
export const useTimer = (timerIsOn, duration) => {
    const [currentTimerValueSec, setCurrentTimerValueSec] = useState(duration / 1000);
    const clearTimer = () => {
        setCurrentTimerValueSec(duration / 1000);
    }
    useEffect(() => {
        if (timerIsOn) {
            clearTimer()
            startTimer(duration);
        } else {
            stopTimer();
        }
    }, [timerIsOn])
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