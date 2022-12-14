function SocialMedia({Icon, name, link}) {
    window.addEventListener("load", () => loadHoverElem(name, link));

    return <li id="social-media"><a href={link} target="_blank" rel="noreferrer" className="hover"><Icon/></a></li>
};

function loadHoverElem(name, link) {
    const refferedLi = document.querySelector(`li[data-name='${name}']`), ownerA = document.querySelector(`a[href='${link}']`);
    let isHovered;
    ownerA.onmouseover = () => updateReffered();
    ownerA.onmouseout = () => updateReffered();

    function updateReffered() {
        isHovered = document.querySelector(`a[href='${link}']:hover`);
        return refferedLi.classList[isHovered ? 'add' : 'remove']('appear-hover');
    };
};

export default SocialMedia;