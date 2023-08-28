import { pageStyles } from '@/components/page/Page.module.scss';
import { preloaderStyles, notRendered } from '@/components/preloader/PreLoader.module.scss';
import { mediaContainer, showItem } from '@/components/navbar/Navbar.module.scss';
import { itemPage, showPage, activePage } from '@/components/sidebar/Sidebar.module.scss';

function renderScrolling() {
    const page = document.querySelector(`[class*="${pageStyles}"]`), sections = [...page.children].filter(sec => sec.id), itemPages = document.querySelectorAll(`[class*="${itemPage}"]`);

    scrollPage();
    page.onscroll = scrollPage;

    function scrollPage() {
        const sectionIndex = sections.findIndex(filterSection), page = itemPages[sectionIndex], anotherPages = [...itemPages].filter((p, index) => index != sectionIndex);

        anotherPages.forEach(anotherPage => anotherPage.classList.remove(activePage));
        page.classList.add(activePage);
    };

    function filterSection({ offsetTop, offsetHeight }) {
        const { scrollTop } = page;

        return scrollTop >= offsetTop && scrollTop < offsetTop + offsetHeight;
    };
};

function renderNav() {
    const preloaders = document.querySelectorAll(`[class*="${preloaderStyles}"]`),
        mediaContainers = document.querySelectorAll(`[class*="${mediaContainer}"]`);

    preloaders.forEach(preloader => preloader.classList.remove(notRendered));
    mediaContainers.forEach(mediaContainer => mediaContainer.classList.add(showItem));
};

function renderCanvas() {};

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