import React, {useEffect, useRef} from 'react';
import MenuButton from "../../UI/MenuButton/MenuButton";
import cl from './DurationButtons.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setTimerDuration} from "../../store/timerReducer";
const DurationButtons = () => {
    const dispatch = useDispatch();
    const timerIsActive = useSelector(state => state.timerIsActive.timerIsActive);
    const buttonsElem = useRef();
    const buttonsWrapElem = useRef();
    useEffect(() => {
        if (timerIsActive && buttonsElem?.current && buttonsWrapElem?.current) {
            buttonsElem.current.classList.add(cl.buttonsHide)

            setTimeout(()=>{
                buttonsWrapElem.current.classList.add(cl.buttonsWrapHide)
            },700)
        } else {
            setTimeout(()=>{
                buttonsElem.current.classList.remove(cl.buttonsHide)
            },700)
            buttonsWrapElem.current.classList.remove(cl.buttonsWrapHide)
        }

    }, [timerIsActive])
    return (
        <div   ref={buttonsWrapElem} className={cl.wrap}>
            <div ref={buttonsElem} className={cl.buttons}>
                <MenuButton onClick={()=>dispatch(setTimerDuration(10*1000))}>10</MenuButton>
                <MenuButton onClick={()=>dispatch(setTimerDuration(15*1000))}>15</MenuButton>
                <MenuButton onClick={()=>dispatch(setTimerDuration(20*1000))}>20</MenuButton>
                <MenuButton onClick={()=>dispatch(setTimerDuration(30*1000))}>30</MenuButton>
            </div>
        </div>
    );
};

export default DurationButtons;