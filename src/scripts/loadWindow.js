function loadWindow() {
    const preLoader = document.querySelector("#pre-loader");

    if (!preLoader) return setTimeout(loadWindow, 5e2);

    preLoader.classList.add("loaded-window");
};

export default loadWindow;