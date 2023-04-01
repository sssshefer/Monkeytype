import React, {useEffect, useRef} from 'react';
import {ArrowClockwise} from "react-bootstrap-icons";
import cl from './ReloadButton.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setNullAction} from "../../store/currentLetterReducer";
import {setTimerIsCompletedFalseAction, stopTimerAction} from "../../store/timerReducer";

const ReloadButton = ({fetchWords}) => {
    const reloadBtn = useRef();
    const dispatch = useDispatch();

    useEffect(()=>{
        reloadBtn.current.addEventListener('focus', function(e) {
            this.blur();
        })
    },[])

    const refreshTyping = async () =>{
        fetchWords(50);
        dispatch(setNullAction())
        dispatch(stopTimerAction())
        dispatch(setTimerIsCompletedFalseAction());
    }
    return (
        <button ref={reloadBtn} onClick={refreshTyping} className={cl.restartBtn}>
            <ArrowClockwise/>
        </button>
    );
};

export default ReloadButton;