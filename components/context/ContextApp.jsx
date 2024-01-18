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
        <div>Opa!</div>
        {/* { children } */}
    </Provider>
};

export { ContextApp };

export default ContextProvider;