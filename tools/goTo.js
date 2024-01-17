import { hiddenPage, renderPage } from "@/scripts/initializePageTools";

function goTo({ url }, setHistory) {
    const action = (url.startsWith('/#') || url == '/') ? renderPage : hiddenPage;

    history.pushState({}, "", url);
    setHistory(oldHistory => [...oldHistory, url]);

    return action();
};

export default goTo;