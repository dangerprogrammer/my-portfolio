import { pageStyles, elementViewer } from '@/components/page/Page.module.scss';
import { preloaderStyles, notRendered } from '@/components/preloader/PreLoader.module.scss';
import { mediaContainer, showItem } from '@/components/navbar/Navbar.module.scss';
import { itemPage, showPage, activePage, firstSide } from '@/components/sidebar/Sidebar.module.scss';
import { canvasDot, moving, activeCanvas } from '@/components/background-canvas/BackgroundCanvas.module.scss';
import randomNumbers, { randomNumber } from '@/tools/randomNumbers';
import { rendered } from '@/components/pages-content/PageContent.module.scss';
import listClasses from '@/tools/listClasses';

function renderScrolling() {
    const page = document.querySelector(`[class*="${pageStyles}"]`), sections = [...page.children].filter(sec => sec.id),
        itemPages = document.querySelectorAll(`[class*="${itemPage}"]`), sidebar = itemPages[0].parentElement.parentElement;

    scrollPage();
    page.onscroll = scrollPage;

    function scrollPage() {
        const section = sections.reduce(filterSection, sections[0]),
            sectionIndex = sections.indexOf(section),
            page = itemPages[sectionIndex],
            anotherPages = [...itemPages].filter((p, index) => index != sectionIndex),
            renderedSection = sections.find(sec => sec.classList.contains(rendered)),
            firstRender = !renderedSection,
            pageRender = listClasses[section.id],
            hoverParent = section.firstChild.lastChild.lastChild;

        sidebar.classList.toggle(firstSide, sectionIndex);

        anotherPages.forEach(anotherPage => anotherPage.classList.remove(activePage));
        sections.forEach((sec, secInd) => {
            if (secInd == sectionIndex) return;
            sec.classList.remove(rendered);
            sec.firstChild.lastChild.lastChild.classList.remove(listClasses[sec.id]);
            resetShowSection(sec);
        });
        if (renderedSection && renderedSection.id == 'about-me') (console.clear(), console.log(renderedSection));
        page.classList.add(activePage);
        section.classList.add(rendered);
        setTimeout(() => hoverParent.classList.add(pageRender), 1e3);
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

function renderMousemove() {
    const canvas = document.getElementById('background-canvas');
    let canvasChildrens = [...canvas.children];

    let lastX, lastY, timeout = setTimeout(() => canvas.classList.remove(moving), 5e3);
    canvas.classList.add(moving);
    window.onmousemove = ({ offsetX, offsetY }) => {
        canvasChildrens = [...canvas.children];
        if (lastX && lastY) {
            const distX = offsetX - lastX, distY = offsetY - lastY, speed = 5e-2;

            canvasChildrens.forEach(canvaChild => {
                canvaChild.style.setProperty('--tX', `${distX * speed}px`);
                canvaChild.style.setProperty('--tY', `${distY * speed}px`);
            });
        } else {
            lastX = offsetX;
            lastY = offsetY;
        };

        clearTimeout(timeout);
        canvas.classList.add(moving);
        timeout = setTimeout(() => canvas.classList.remove(moving), 2e3);
    };

    window.onmouseout = () => {
        lastX = undefined;
        lastY = undefined;
    };
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

function renderCanvas() {
    const canvas = document.getElementById('background-canvas'), { offsetWidth, offsetHeight } = canvas;
    let limit = Math.round((offsetHeight * offsetWidth) / 2e4);
    let canvasChildrens = [...canvas.children];

    generateDots(limit - canvasChildrens.length);

    // renderMousemove();

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
            generateDot();
        }, duration);
    };
};

function renderNavScroll(ev) {
    const target = ev.target || ev, { origin, pathname } = document.location, fullOrigin = origin + pathname,
        searchHref = target.href.slice(fullOrigin.length + 1), refElement = document.getElementById(searchHref),
        { parentElement, offsetTop } = refElement;

    parentElement.scrollTo(0, offsetTop);
};

function renderSidebar() {
    const itemPages = document.querySelectorAll(`[class*="${itemPage}"]`);

    itemPages.forEach(itemPage => itemPage.classList.add(showPage));
};

function renderPage() {
    renderScrolling();

    renderNav();

    renderSidebar();

    renderCanvas();
};

function renderSecPage() {
    renderNav();
};

export { renderPage, renderSecPage, renderNavScroll };