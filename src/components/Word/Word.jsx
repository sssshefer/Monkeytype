import React, {useEffect, useState} from 'react';
import cl from './Word.module.css'
import Letter from "../Letter/Letter";
import {useDispatch, useSelector} from "react-redux";

const Word = ({word, startId}) => {
    const dispatch = useDispatch();
    const currentLetterId = useSelector(state=>state.currentLetterId.currentLetterId)

    const [letters, setLetters] = useState([]);
    useEffect(() => {
        setLetters(word.split(''));
    }, []);

    return (
        <div className={cl.word}>
            {letters.map((i) =>
                <Letter id={startId++}>{i}</Letter>
            )}
        </div>
    );
};


export default Word;