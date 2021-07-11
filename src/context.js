import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [input, setinput] = useState('');

    const handleInput = (value) => {
        setinput(value);
    };

    return (
        <AppContext.Provider value={{ handleInput, input }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
