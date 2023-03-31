import React, {useEffect, useState} from 'react';

export const useKeyboardListener = (wordsString) => {
    const [currentLetterId, setCurrentLetterId] = useState(0);
    const [currentLetterState, setCurrentLetterState] = useState('untyped');
    const setNextLetter = () => {
        setCurrentLetterId(currentTimerValueSec => currentTimerValueSec + 1)
    }
    useEffect(() => {
        const handleTyping = (event) => {
            event.Handle = true;
            if (event.key === wordsString[currentLetterId]) {
                setCurrentLetterState('untyped')
                setNextLetter();
            }
            if (event.key !== wordsString[currentLetterId]) {
                setCurrentLetterState('incorrect')
            }

        }
        document.addEventListener('keydown', handleTyping)

        return () => document.removeEventListener('keydown', handleTyping)
    }, [wordsString, currentLetterId])
    return ({currentLetterId, currentLetterState, setCurrentLetterId, setNextLetter})
};
