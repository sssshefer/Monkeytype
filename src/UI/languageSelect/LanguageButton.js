import React from 'react';
import cl from './LanguageButton.module.css'
import {Globe} from 'react-bootstrap-icons';

const LanguageButton = ({changeToNextLanguage, currentLanguage}) => {
    return (
        <div>
            <Globe/>
            <button className={cl.button} onClick={()=>changeToNextLanguage()}>{currentLanguage}</button>
        </div>

    );
};

export default LanguageButton;