import React, {useEffect, useRef, useState} from 'react';
import DurationButtons from "../DurationButtons/DurationButtons";
import LanguageButton from "../../UI/languageSelect/LanguageButton";
import Timer from "../Timer/Timer";
import {getNextElem} from "../../utils/utils";
import cl from './TypingOptionsMenu.module.css'
import MenuButton from "../../UI/MenuButton/MenuButton";
import {useDispatch, useSelector} from "react-redux";

const TypingOptionsMenu = () => {
    const languages = ['en', 'fi', 'es'];
    const [currentLanguage, setCurrentLanguage] = useState('en');

    const [showTimer, setShowTimer] = useState(true);

    /*const changeLanguage = () => {
        const nextLanguage = getNextElem(languages, currentLanguage);
        setCurrentLanguage(nextLanguage);
    }*/



    return (
        <div className={cl.menu}>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div className={cl.options}>
                            {showTimer &&
                            <Timer />}
                            <DurationButtons />

                        </div>
                    </div>
                    {/*<div className="col-12">*/}
                    {/*    <LanguageButton changeToNextLanguage={() => changeLanguage()}*/}
                    {/*                    currentLanguage={currentLanguage}/>*/}

                    {/*</div>*/}

                </div>
            </div>

        </div>
    );
};

export default TypingOptionsMenu;