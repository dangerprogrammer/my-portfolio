const intervalTimeout = 5e2;
function loadWindow() {
    let intervalTest = setInterval(() => {
        const preLoader = document.querySelector("#pre-loader"),
            {body} = document;

        if (preLoader) {
            preLoader.classList.add("loaded-window");
            setTimeout(() => body.classList.add("loaded"), 1e3);
            clearInterval(intervalTest);
        };
    }, intervalTimeout);
};

export default loadWindow;