import React from 'react';
import cl from './Navbar.module.css'
const Navbar = ({logoText}) => {
    return (
        <header className="header d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-6 m-auto">
                        <div className={cl.logo}>{logoText}</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;