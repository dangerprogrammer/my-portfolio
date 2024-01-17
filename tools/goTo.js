import { hiddenPage, renderPage } from "@/scripts/initializePageTools";

function goTo({ url: href, back, setHistory, backHistory, push, prevURL }) {
    const action = (href.startsWith('/#') || href == '/') ? renderPage : hiddenPage;

    return action();
    if (back) backHistory();

    setHistory(oldHistory => {
        const historyNoLast = oldHistory.slice(0, oldHistory.length - 1),
            last = oldHistory[oldHistory.length - 1],
            lastHistory = last == '/' ? prevURL : last,
            newHistory = [...historyNoLast, lastHistory, href];

        return newHistory;
    });

    return push(href);
};

export default goTo;