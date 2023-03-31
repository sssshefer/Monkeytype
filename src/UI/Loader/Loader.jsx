import React from 'react';
import cl from './Loader.module.css';

const Loader = ({...props}) => {
    return (
        <div {...props} className={cl.loader}>

        </div>
    );
};

export default Loader;