function goTo({ url: href, back, setHistory, backHistory, push }) {
    if (back) backHistory();

    console.log('new historic!', href);
    setHistory(oldHistory => [...oldHistory, href]);

    return push(href);
};

export default goTo;