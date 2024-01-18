'use client';

import { usePathname } from "next/navigation";
import { useState, createContext } from "react";

const ContextApp = createContext();

function ContextProvider({ children }) {
    const pathname = usePathname(),
        [ history, setHistory ] = useState([pathname]),
        values = { history, setHistory },
        { Provider } = ContextApp;

    return <Provider value={values}>
        { children }
    </Provider>
};

export { ContextApp };

export default ContextProvider;