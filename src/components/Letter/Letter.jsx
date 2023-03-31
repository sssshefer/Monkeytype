import React, {useEffect, useRef, useState} from 'react';
import cl from './Letter.module.css'

const Letter = ({id, children, currentId, currentLetterState, changeCaretLeft, changeCaretTop, ...props}) => {
    const letterElem = useRef();

    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);
    const [letterState, setLetterState] = useState('untyped');

    useEffect(() => {
        setPosX(letterElem.current.offsetLeft);
        setPosY(letterElem.current.offsetTop);
    }, [letterElem])

    useEffect(() => {
        if (id === 0) {
            setLetterState ('untyped');
        }
        if (id < currentId) {
            setLetterState('correct');
        }
        if (id === currentId) {
            setLetterState(currentLetterState);
            changeCaretLeft(posX)
            changeCaretTop(posY)
        }


    }, [currentId, currentLetterState])

    return (
        <div ref={letterElem} {...props} className={`${cl[letterState]}`}>
            {children}
        </div>
    );
};

export default Letter;