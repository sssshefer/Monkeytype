import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setNextIdAction} from "../store/currentLetterReducer";
import {
    setCurrentLetterIncorrectAction,
    setCurrentLetterUntypedAction,
} from "../store/currentLetterReducer";

export const useKeyboardListener = (wordsString) => {
    const dispatch = useDispatch();
    const currentLetterId = useSelector(state=>state.currentLetterId.currentLetterId)
    useEffect(() => {
        const handleTyping = (event) => {
            event.Handle = true;
            if (event.key === wordsString[currentLetterId]) {
                dispatch(setCurrentLetterUntypedAction());
                dispatch(setNextIdAction());
            }
            if (event.key !== wordsString[currentLetterId]) {
                dispatch(setCurrentLetterIncorrectAction());
            }

        }
        document.addEventListener('keydown', handleTyping)

        return () => document.removeEventListener('keydown', handleTyping)
    }, [wordsString, currentLetterId])
};
