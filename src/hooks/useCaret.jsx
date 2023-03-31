import React, {useEffect, useRef, useState} from 'react';

export const useCaret = (caretElem) => {
    const [caretX, setCaretX] = useState(0)
    const [caretY, setCaretY] = useState(8)


    useEffect(() => {
        if(caretElem?.current){
            caretElem.current.style.left = caretX - 1 + 'px';
        }

    }, [caretX])

    const changeCaretTop = (top) => {
        setCaretY(top)
    }
    const changeCaretLeft = (left) => {
        setCaretX(left)
    }

    return {caretX, caretY, changeCaretLeft, changeCaretTop};
};

