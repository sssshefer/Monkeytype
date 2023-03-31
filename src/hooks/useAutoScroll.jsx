import {useEffect} from "react";

import React from 'react';

export const useAutoScroll = (caretY, caret, wordsElem) => {
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


