import React, {useEffect, useRef, useState} from 'react';
import Word from "../Word/Word";
import cl from './Words.module.css'
import Letter from "../Letter/Letter";
import {useCaret} from "../../hooks/useCaret";
import {useAutoScroll} from "../../hooks/useAutoScroll";
import {useKeyboardListener} from "../../hooks/useKeyboardListener";
import Caret from "../Caret/Caret";
import {useDispatch, useSelector} from "react-redux";
import {startTimerAction, stopTimerAction} from "../../store/timerReducer";
import {setNullAction} from "../../store/currentLetterReducer";


const Words = ({words}) => {
    const dispatch = useDispatch();
    const currentLetterId = useSelector(state=>state.currentLetterId.currentLetterId)

    const [wordsString, setWordsString] = useState('');

    const caretElem = useRef();
    const wordsElem = useRef();
    useCaret(caretElem);

    useAutoScroll(caretElem, wordsElem);

    useKeyboardListener(wordsString);

    useEffect(() => {
        if (currentLetterId === 1) {
           dispatch(startTimerAction())
        }
    }, [currentLetterId])


    useEffect(() => {
        setWordsString(words.join(' '));
        dispatch(setNullAction())
        wordsElem.current.style.top = 0;
    }, [words])

    let startIndexForNewWord = 0;
    return (
        <div className={cl.wordsWrap}>
            <div ref={wordsElem} id={cl.words}>
                <Caret ref={caretElem}/>
                {words.map((i) => {
                        const startId = startIndexForNewWord;
                        startIndexForNewWord += i.length + 1
                        const spaceUniCodeNum = 160;
                        i += String.fromCharCode(spaceUniCodeNum);
                        console.log()
                        return <div className='d-flex' key={i}>
                            <Word word={i} startId={startId}/>
                        </div>
                    }
                )}
            </div>
        </div>
    );
};

export default Words;