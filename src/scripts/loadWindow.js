function loadWindow() {
    window.addEventListener("load", () => {
        const preLoader = document.querySelector("#pre-loader");

        if (!preLoader) return false;
        
        preLoader.classList.add("loaded-window");
        console.log("Loaded Window!");
    });
};

export default loadWindow;