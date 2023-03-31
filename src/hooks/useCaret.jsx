import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCaretX, setCaretY} from "../store/caretReducer";

export const useCaret = (caretElem) => {
    const dispatch = useDispatch();
    const caretX = useSelector(state=>state.caretX.caretX)
    const caretY = useSelector(state=>state.caretY.caretY)


    useEffect(() => {
        if(caretElem?.current){
            caretElem.current.style.left = caretX - 1 + 'px';
        }

    }, [caretX])
};

