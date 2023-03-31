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


const Words = ({words}) => {
    const dispatch = useDispatch();

    const [wordsString, setWordsString] = useState('');

    const caretElem = useRef();
    const wordsElem = useRef();
    const caret = useCaret(caretElem);

    useAutoScroll(caret.caretY, caretElem, wordsElem);

    const keyboardCapturer = useKeyboardListener(wordsString);

    useEffect(() => {
        if (keyboardCapturer.currentLetterId === 1) {
           dispatch(startTimerAction())
        }
    }, [keyboardCapturer.currentLetterId])


    useEffect(() => {
        setWordsString(words.join(' '));
        keyboardCapturer.setCurrentLetterId(0);
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
                            <Word word={i} startId={startId} setNextLetter={keyboardCapturer.setNextLetter}
                                  currentId={keyboardCapturer.currentLetterId}
                                  currentLetterState={keyboardCapturer.currentLetterState}
                                  changeCaretTop={caret.changeCaretTop}
                                  changeCaretLeft={caret.changeCaretLeft}/>


                        </div>
                    }
                )}
            </div>
        </div>
    );
};

export default Words;