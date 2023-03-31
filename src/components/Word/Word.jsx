import React, {useEffect, useState} from 'react';
import cl from './Word.module.css'
import Letter from "../Letter/Letter";

const Word = ({word, startId, setNextLetter, currentId, currentLetterState,changeCaretTop,changeCaretLeft}) => {
    const [letters, setLetters] = useState([]);
    useEffect(() => {
        setLetters(word.split(''));
    }, []);

    return (
        <div className={cl.word}>
            {letters.map((i) =>
                <Letter id={startId++} currentId={currentId} currentLetterState={currentLetterState}
                        changeCaretTop={changeCaretTop}
                        changeCaretLeft={changeCaretLeft}>{i}</Letter>
            )}
        </div>
    );
};


export default Word;