function goTo({ url: href, back, setHistory, backHistory, push, prevURL }) {
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