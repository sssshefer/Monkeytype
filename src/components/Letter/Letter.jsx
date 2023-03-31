import React, {useEffect, useRef, useState} from 'react';
import cl from './Letter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setCaretX, setCaretY} from "../../store/caretReducer";

const Letter = ({id, children}) => {
    const dispatch = useDispatch();
    const currentLetterId = useSelector(state=>state.currentLetterId.currentLetterId)
    const currentLetterState = useSelector(state=>state.currentLetterState.currentLetterState)

    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);
    const letterElem = useRef();
    useEffect(() => {
        setPosX(letterElem.current.offsetLeft);
        setPosY(letterElem.current.offsetTop);
    }, [letterElem])

    const [letterState, setLetterState] = useState('untyped');
    useEffect(() => {
        if (id === 0) {
            setLetterState('untyped')
        }
        if (id < currentLetterId) {
            setLetterState('correct')
        }
        if (id === currentLetterId) {
            setLetterState(currentLetterState);
            dispatch(setCaretX(posX))
            dispatch(setCaretY(posY))
        }
    }, [currentLetterId, currentLetterState])

    return (
        <div ref={letterElem} className={`${cl[letterState]}`}>
            {children}
        </div>
    );
};

export default Letter;