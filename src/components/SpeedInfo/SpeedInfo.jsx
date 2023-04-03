import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import cl from './SpeedInfo.module.css'
import TryAgainButton from "../TryAgainButton/TryAgainButton";

const SpeedInfo = () => {
    const timerDuration = useSelector(state => state.timerDuration.timerDuration);
    const currentLetterId = useSelector(state => state.currentLetterId.currentLetterId);

    const typingSpeed = currentLetterId * (60 / (timerDuration / 1000));
    const lettersInPage = 2940;
    const wordsPerMinute = Math.round(typingSpeed / 5);
    const minutesForA4Typing = Math.round(lettersInPage / typingSpeed);

    return (
        <div className={cl.wrap}>
            <h2 className={cl.lettersPerMinuteTitle}>
                Your typing speed is <br/><span>{typingSpeed}</span> letters per minute
            </h2>
            <h3 className={cl.a4}>
                You can fill the A4 format doc <br/>with font size of 12
                characters <br/>in around <span>{minutesForA4Typing}</span> minutes
            </h3>

            <h3 className={cl.wordsPerMinute}>
                Your can type <br/><span>{wordsPerMinute}</span> words per
                minute<br/> in average
            </h3>
            <TryAgainButton>Try again </TryAgainButton>


        </div>
    );
};

export default SpeedInfo;