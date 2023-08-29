import { pageStyles } from '@/components/page/Page.module.scss';
import { preloaderStyles, notRendered } from '@/components/preloader/PreLoader.module.scss';
import { mediaContainer, showItem } from '@/components/navbar/Navbar.module.scss';
import { itemPage, showPage, activePage } from '@/components/sidebar/Sidebar.module.scss';
import { canvasDot, moving } from '@/components/background-canvas/BackgroundCanvas.module.scss';
import randomNumbers, { randomNumber } from '@/tools/randomNumbers';
import sectionsClass from '@/tools/sectionsClass';

function renderScrolling() {
    const page = document.querySelector(`[class*="${pageStyles}"]`), sections = [...page.children].filter(sec => sec.id), itemPages = document.querySelectorAll(`[class*="${itemPage}"]`);

    scrollPage();
    page.onscroll = scrollPage;

    function scrollPage() {
        const section = sections.reduce(filterSection, sections[0]), sectionIndex = sections.indexOf(section), page = itemPages[sectionIndex], anotherPages = [...itemPages].filter((p, index) => index != sectionIndex);


        anotherPages.forEach(anotherPage => anotherPage.classList.remove(activePage));
        sections.forEach(sec => sec.classList.remove(sectionsClass[sec.id]));
        page.classList.add(activePage);
        section.classList.add(sectionsClass[section.id]);
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
    const canvas = document.getElementById('background-canvas')
    let canvasChildrens = [...canvas.children];

    let lastX, lastY, timeout;
    window.onmousemove = ({ offsetX, offsetY }) => {
        canvasChildrens = [...canvas.children];
        if (lastX && lastY) {
            const distX = offsetX - lastX, distY = offsetY - lastY, speed = 2e-2;

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

function renderCanvas() {
    const canvas = document.getElementById('background-canvas'), { offsetWidth, offsetHeight } = canvas;
    let limit = Math.round((offsetHeight * offsetWidth) / 2e4);
    let canvasChildrens = [...canvas.children];

    generateDots(limit - canvasChildrens.length);

    renderMousemove();

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