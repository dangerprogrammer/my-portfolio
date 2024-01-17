import { pageStyles, elementViewer } from '@/components/page/Page.module.scss';
import { preloaderStyles, notRendered } from '@/components/preloader/PreLoader.module.scss';
import { mediaContainer, showItem } from '@/components/navbar/Navbar.module.scss';
import { itemPage, showPage, hidePage, activePage, firstSide, hideSidebarStyles } from '@/components/sidebar/Sidebar.module.scss';
import { canvasDot, moving, activeCanvas } from '@/components/background-canvas/BackgroundCanvas.module.scss';
import randomNumbers, { randomNumber } from '@/tools/randomNumbers';
import { rendered, contentActive, imageContainer, imgActions } from '@/components/pages-content/PageContent.module.scss';
import { welcomeActive } from '@/components/welcome/Welcome.module.scss';
import { listClasses } from '@/components/context/listPages';

function renderScrolling() {
    const page = document.querySelector(`[class*="${pageStyles}"]`), sections = [...page.children].filter(sec => sec.id),
        itemPages = document.querySelectorAll(`[class*="${itemPage}"]`), sidebar = itemPages[0].parentElement.parentElement,
        imgContainers = document.querySelectorAll(`[class*="${imageContainer}"]`),
        hasRender = sections.find(sec => sec.classList.contains(rendered));

    let timeoutRender = [], timeoutImg = [];

    scrollPage(hasRender);
    page.onscroll = () => scrollPage();

    function scrollPage(section) {
        section = section || sections.reduce(filterSection, sections[0]);
        const sectionIndex = sections.indexOf(section),
            imgContainer = imgContainers[sectionIndex - 1],
            { id: sectionID } = section,
            itemPage = itemPages[sectionIndex],
            anotherPages = [...itemPages].filter((p, index) => index != sectionIndex),
            anotherSections = sections.filter((sec, secInd) => secInd != sectionIndex),
            firstRender = !sections.find(sec => sec.classList.contains(rendered)),
            pageRender = listClasses[sectionID],
            hoverParent = section.firstChild.lastChild.lastChild;

        sidebar.classList.toggle(firstSide, sectionIndex);

        anotherPages.forEach(anotherPage => anotherPage.classList.remove(activePage));
        sections.forEach((sec, secInd) => {
            clearTimeout(timeoutImg[secInd]);
            clearTimeout(timeoutRender[secInd]);
            sec.classList.remove(contentActive);
        });
        anotherSections.forEach(sec => {
            sec.firstChild.lastChild.classList.remove(imgActions);
            sec.classList.remove(rendered, welcomeActive);
            sec.firstChild.lastChild.lastChild.classList.remove(listClasses[sec.id]);
            resetShowSection(sec);
        });
        if (imgContainer) timeoutImg[sectionIndex] = setTimeout(() => imgContainer.classList.add(imgActions), 2e3);
        itemPage.classList.add(activePage);
        section.classList.add(rendered);
        if (sectionID == 'welcome') section.classList.add(welcomeActive);
        timeoutRender[sectionIndex] = setTimeout(() => hoverParent.classList.add(pageRender), 1e3);
        renderShowSection(section, firstRender);
    };

    function filterSection(bigger, ref) {
        const { scrollTop, offsetHeight } = page, scrollBottom = scrollTop + offsetHeight,
            biggerTop = bigger.offsetTop, biggerHeight = bigger.offsetHeight, 
            biggerBottom = biggerTop + biggerHeight,
            biggerOnScreen = biggerBottom <= scrollBottom ? biggerBottom - scrollTop : scrollBottom - biggerTop,
            refTop = ref.offsetTop, refHeight = ref.offsetHeight, refBottom = refTop + refHeight,
            refOnScreen = refBottom <= scrollBottom ? refBottom - scrollTop : scrollBottom - refTop;

        return biggerOnScreen > refOnScreen ? bigger : ref;
    };
};

function hideScrolling() {
    const page = document.querySelector(`[class*="${pageStyles}"]`), section = document.querySelector(`section[class*="${rendered}"]`);

    if (!page) return;

    page.onscroll = () => {};
    section.classList.add(contentActive);
};

function renderMousemove() {
    const canvas = document.getElementById('background-canvas');

    let timeout = setTimeout(() => canvas.classList.remove(moving), 5e3);
    canvas.classList.add(moving);

    window.onmousemove = () => {
        clearTimeout(timeout);
        canvas.classList.add(moving);
        timeout = setTimeout(() => canvas.classList.remove(moving), 2e3);
    };
};

function hideMousemove() {
    window.onmousemove = () => {};
};

function renderNav() {
    const preloaders = document.querySelectorAll(`[class*="${preloaderStyles}"]`),
        mediaContainers = document.querySelectorAll(`[class*="${mediaContainer}"]`);

    preloaders.forEach(preloader => preloader.classList.remove(notRendered));
    mediaContainers.forEach(mediaContainer => mediaContainer.classList.add(showItem));
};

function resetShowSection({ id }) {
    const viewersInSection = [...document.querySelectorAll(`[id*="${id}"] [class*="${elementViewer}"]`)];

    viewersInSection.forEach(viewer => {
        const { parentElement } = viewer;

        parentElement.removeChild(viewer);
    });
};

function renderShowSection({ id }, firstRender) {
    const showsInSection = [...document.querySelectorAll(`[id*="${id}"] [data-show]`)];

    showsInSection.forEach((showElem, ind) => {
        const showSpan = document.createElement('span'), showSiblings = [...showElem.children],
            delay = (firstRender ? 1e3 : 0) + ind * 2e2;

        showSpan.classList.add(elementViewer);
        showSpan.style.setProperty('animation-delay', `${delay}ms`);
        showSiblings.forEach(sibling => sibling.style.setProperty('animation-delay', `${delay}ms`));

        showElem.append(showSpan);
    });
};

let stopDot;
function renderCanvas() {
    const canvas = document.getElementById('background-canvas'), { offsetWidth, offsetHeight } = canvas;
    let limit = Math.round((offsetHeight * offsetWidth) / 2e4);
    let canvasChildrens = [...canvas.children];

    generateDots(limit - canvasChildrens.length);

    renderMousemove();

    canvas.classList.add(activeCanvas);

    function generateDots(total) {
        for (let i = 0; i < total; i++) generateDot();
    };

    function generateDot() {
        const myDot = document.createElement('span'), { offsetWidth, offsetHeight } = canvas,
            [left, top, pLeft, pTop] = randomNumbers({}, {}, {}, {}),
            distanceX = (left - pLeft) * offsetWidth, distanceY = (top - pTop) * offsetHeight,
            distance = (distanceX ** 2 + distanceY ** 2) ** (1 / 2), duration = distance * 50,
            scale = randomNumber({min: .6, max: 1.2});

        myDot.style.setProperty('--left', `${left * 100}%`);
        myDot.style.setProperty('--top', `${top * 100}%`);
        myDot.style.setProperty('--pLeft', `${pLeft * 100}%`);
        myDot.style.setProperty('--pTop', `${pTop * 100}%`);
        myDot.style.setProperty('--duration', `${duration}ms`);
        myDot.style.setProperty('scale', `${scale}`);

        myDot.classList.add(canvasDot);

        canvas.appendChild(myDot);

        setTimeout(() => {
            canvas.removeChild(myDot);
            if (!stopDot) generateDot();
        }, duration);
    };
};

function hideCanvas() {
    const canvas = document.getElementById('background-canvas');

    if (!canvas) return;

    stopDot = !0;

    hideMousemove();

    canvas.classList.remove(activeCanvas);
};

function renderNavScroll(ev) {
    const target = ev.target || ev, { origin, pathname } = document.location, fullOrigin = origin + pathname,
        searchHref = target.href.slice(fullOrigin.length + 1), refElement = document.getElementById(searchHref),
        { parentElement, offsetTop } = refElement;

    parentElement.scrollTo(0, offsetTop);
};

function renderSidebar() {
    const itemPages = document.querySelectorAll(`[class*="${itemPage}"]`), { parentElement: sidebar } = itemPages[0].parentElement;

    sidebar.classList.remove(hideSidebarStyles);
    itemPages.forEach(itemPage => (itemPage.classList.remove(hidePage), itemPage.classList.add(showPage)));
};

function hideSidebar() {
    const itemPages = document.querySelectorAll(`[class*="${itemPage}"]`), { parentElement: sidebar } = itemPages[0].parentElement;

    sidebar.classList.add(hideSidebarStyles);
    itemPages.forEach(itemPage => (itemPage.classList.remove(showPage), itemPage.classList.add(hidePage)));
};

function renderSecSection(pageID) {
    const section = document.querySelector(`section[id*="${pageID}"]`),
        { id: sectionID, parentElement: page } = section,
        imgContainer = document.querySelector(`[class*="${imageContainer}"]`),
        pageRender = listClasses[sectionID],
        { lastChild: hoverParent } = section.firstChild.lastChild;

    section.classList.add(rendered, contentActive);
    renderShowSection(section, !0);

    setTimeout(() => hoverParent.classList.add(pageRender), 1e3);
    setTimeout(() => imgContainer.classList.add(imgActions), 2e3);
};

function loadSecPage() {};

function renderPage() {
    renderScrolling();

    renderNav();

    renderSidebar();

    renderCanvas();
};

function renderSecPage(pageID) {
    renderNav();

    if (!pageID) return;

    renderSecSection(pageID);
};

function hiddenPage() {
    hideScrolling();

    hideSidebar();

    hideCanvas();
};

export { renderPage, renderSecPage, renderNavScroll, hiddenPage };