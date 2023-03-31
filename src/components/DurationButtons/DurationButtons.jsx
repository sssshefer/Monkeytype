import React from 'react';
import MenuButton from "../../UI/MenuButton/MenuButton";
import cl from './DurationButtons.module.css'
const DurationButtons = ({changeDuration}) => {
    return (
        <div className={cl.wrap}>
            <MenuButton onClick={()=>changeDuration(10*1000)}>10</MenuButton>
            <MenuButton onClick={()=>changeDuration(15*1000)}>15</MenuButton>
            <MenuButton onClick={()=>changeDuration(20*1000)}>20</MenuButton>
            <MenuButton onClick={()=>changeDuration(30*1000)}>30</MenuButton>
        </div>
    );
};

export default DurationButtons;