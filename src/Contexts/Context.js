import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const Context = ({ children }) => {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    );
};

export default Context;