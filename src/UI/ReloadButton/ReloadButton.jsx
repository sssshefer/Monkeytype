import React from 'react';
import {ArrowClockwise} from "react-bootstrap-icons";
import cl from './ReloadButton.module.css'

const ReloadButton = ({...props}) => {
    return (
        <button {...props} className={cl.restartBtn}>
            <ArrowClockwise/>
        </button>
    );
};

export default ReloadButton;