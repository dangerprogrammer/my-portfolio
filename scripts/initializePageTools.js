import { pageStyles, elementViewer } from '@/components/page/Page.module.scss';
import { preloaderStyles, notRendered } from '@/components/preloader/PreLoader.module.scss';
import { mediaContainer, showItem } from '@/components/navbar/Navbar.module.scss';
import { itemPage, showPage, hidePage, activePage, firstSide, hideSidebarStyles } from '@/components/sidebar/Sidebar.module.scss';
import { canvasDot, activeCanvas } from '@/components/background-canvas/BackgroundCanvas.module.scss';
import randomNumbers, { randomNumber } from '@/tools/randomNumbers';
import { rendered, contentActive, imageContainer, imgActions } from '@/components/pages-content/PageContent.module.scss';
import { welcomeActive } from '@/components/welcome/Welcome.module.scss';
import { listClasses } from '@/components/context/listPages';
import { titleNav, noClick } from '@/components/navbar/Navbar.module.scss';
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

function renderScrolling() {
    const page = document.querySelector(`[class*="${pageStyles}"]`), sections = [...page.children].filter(sec => sec.id),
        itemPages = [...document.querySelectorAll(`[class*="${itemPage}"]`)], sidebar = itemPages[0].parentElement.parentElement,
        imgContainers = document.querySelectorAll(`[class*="${imageContainer}"]`),
        hasRender = sections.find(sec => sec.classList.contains(rendered)),
        observerWheel = Observer.getById("wheel"), observerScroll = Observer.getById("scroll");

    let timeoutRender = [], timeoutImg = [], canScroll = !0;

    scrollPage({section: hasRender});

    if (!observerWheel || !observerScroll) {
        Observer.create({
            target: page,
            type: "wheel",
            id: "wheel",
            onUp: ({ deltaY }) => clickSidebar({ dir: deltaY / 100 }),
            onDown: ({ deltaY }) => clickSidebar({ dir: deltaY / 100 }),
            preventDefault: !0
        });
        Observer.create({
            target: page,
            type: "scroll, touch",
            id: "scroll",
            onUp: ev => scrollPage({scroll: ev}),
            onDown: ev => scrollPage({scroll: ev}),
            preventDefault: !0
        });
    } else {
        observerWheel.enable();
        observerScroll.enable();
    };

    function clickSidebar({dir}) {
        const activePageElem = itemPages.find(itemPage => itemPage.classList.contains(activePage)),
            prevElem = itemPages[itemPages.indexOf(activePageElem) + dir]?.children[0];
        
        if (!canScroll) return;

        prevElem?.click();
        canScroll = !1;
        setTimeout(() => {
            canScroll = !0;
        }, 2e3);
    };

    function scrollPage({section, scroll, dir}) {
        const oldSection = section;
        section = section || sections.reduce(filterSection, sections[0]);
        section = sections[Math.max(0, Math.min(sections.indexOf(section) + (dir ?? 0), sections.length - 1))];
        if (!scroll && !canScroll) return;
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
        if (dir || oldSection) page.scrollTo({left: section.offsetLeft, top: section.offsetTop});

        anotherPages.forEach(anotherPage => anotherPage.classList.remove(activePage));
        sections.forEach((sec, secInd) => {
            clearTimeout(timeoutImg[secInd]);
            clearTimeout(timeoutRender[secInd]);
            sec.classList.remove(contentActive);
        });
        anotherSections.forEach(sec => {
            let imgContainer = sec.firstChild.lastChild.classList,
                hoverParent =  sec.firstChild.lastChild.lastChild;

            imgContainer.remove(imgActions);
            sec.classList.remove(rendered, welcomeActive);
            hoverParent.classList.remove(listClasses[sec.id]);
            resetShowSection(sec);
        });
        if (imgContainer) timeoutImg[sectionIndex] = setTimeout(() => imgContainer.classList.add(imgActions), 2e3);
        itemPage.classList.add(activePage);
        section.classList.add(rendered);
        if (sectionID == 'welcome') section.classList.add(welcomeActive);
        if (pageRender) timeoutRender[sectionIndex] = setTimeout(() => hoverParent.classList.add(pageRender), 5e2);
        renderShowSection(section, firstRender);
        canScroll = !1;
        setTimeout(() => {
            canScroll = !0;
        }, 2e3);
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
    const page = document.querySelector(`[class*="${pageStyles}"]`), section = document.querySelector(`section[class*="${rendered}"]`),
        observerWheel = Observer.getById("wheel"), observerScroll = Observer.getById("scroll");

    if (!page) return;

    observerWheel.disable();
    observerScroll.disable();
    section.classList.add(contentActive);
    section.scrollTo(0, 0);
};

function renderNav() {
    const preloaders = document.querySelectorAll(`[class*="${preloaderStyles}"]`),
        mediaContainers = document.querySelectorAll(`[class*="${mediaContainer}"]`),
        navbarTitle = document.querySelector(`[class*="${titleNav}"]`), { pathname } = location;

    navbarTitle.classList.toggle(noClick, pathname == '/');
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
    let limit = Math.round((offsetHeight * offsetWidth) / 1e5);
    let canvasChildrens = [...canvas.children];

    generateDots(limit - canvasChildrens.length);

    canvas.classList.add(activeCanvas);

    function generateDots(total) {
        for (let i = 0; i < total; i++) generateDot();
    };

    function generateDot() {
        const myDot = document.createElement('span'), { offsetWidth, offsetHeight } = canvas,
            [left, top, pLeft, pTop] = randomNumbers({}, {}, {}, {}),
            distanceX = (left - pLeft) * offsetWidth, distanceY = (top - pTop) * offsetHeight,
            distance = (distanceX ** 2 + distanceY ** 2) ** (1 / 2), duration = distance * 75,
            scale = randomNumber({min: 6, max: 12});

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
    const itemPages = document.querySelectorAll(`[class*="${itemPage}"]`), { parentElement: sidebar } = itemPages[0].parentElement,
        navbarTitle = document.querySelector(`[class*="${titleNav}"]`);

    navbarTitle.classList.remove(noClick);
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

    setTimeout(() => hoverParent.classList.add(pageRender), 5e2);
    setTimeout(() => imgContainer.classList.add(imgActions), 2e3);
};

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