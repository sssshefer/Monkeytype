import React from 'react';

import cl from './Caret.module.css'
const Caret = React.forwardRef((props,ref) => {
    return (
        <div {...props} ref={ref} className={cl.caret}> </div>
    );
});

export default Caret;