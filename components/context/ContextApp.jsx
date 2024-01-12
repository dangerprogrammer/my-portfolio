'use client';

import { usePathname, useRouter } from "next/navigation";
import { useState, createContext } from "react";

const ContextApp = createContext();

function ContextProvider({ children }) {
    const pathname = usePathname(),
        [ history, setHistory ] = useState([pathname]),
        values = { history, setHistory },
        { Provider } = ContextApp;

    function backHistory(size = 1) {
        const { push } = useRouter(),
            pathname = usePathname();

        for (let i = history.length - 1 - size; i >= 0; i--) {
            const route = history[i];

            if (route !== pathname) {
                push(route);

                const newHistory = history.slice(0, Math.max(0, history.length - 1 - size - i));

                setHistory(newHistory);

                break;
            };
        };
    };

    return <Provider value={{ ...values, backHistory }}>
        { children }
    </Provider>
};

export { ContextApp };

export default ContextProvider;