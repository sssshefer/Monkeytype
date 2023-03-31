import React from 'react';
import cl from './MenuButton.module.css'

const MenuButton = ({children, ...props}) => {
    return (
        <button {...props} className={cl.button}>
            {children}
        </button>
    );
};

export default MenuButton;
