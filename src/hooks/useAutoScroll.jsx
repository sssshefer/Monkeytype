import {useEffect} from "react";

import React from 'react';
import {useDispatch, useSelector} from "react-redux";

export const useAutoScroll = ( caret, wordsElem) => {
    const dispatch = useDispatch();
    const caretY = useSelector(state=>state.caretY.caretY)

    useEffect(() => {
        if(caret.current){
            caret.current.style.top = 7 + caretY + 'px';
        }

    if (caretY >= 50) {
        const top = wordsElem.current.style.top;
        wordsElem.current.style.top = (top.substr(0, top.length - 2) - 40) + 'px'
    }
}, [caretY])

};


