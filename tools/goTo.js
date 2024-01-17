import { hiddenPage, renderPage } from "@/scripts/initializePageTools";

function goTo({ url }) {
    const action = (url.startsWith('/#') || url == '/') ? renderPage : hiddenPage;

    history.pushState({}, "", url);

    return action();
};

export default goTo;