'use client';

import { useState, createContext } from "react";

const ContextApp = createContext();

function ContextProvider({ children }) {
    // const [ history, setHistory ] = useState([]),
    //     values = { history, setHistory },
    //     { Provider } = ContextApp;

    return <Provider value={{}}>
        { children }
    </Provider>
};

export { ContextApp };

export default ContextProvider;