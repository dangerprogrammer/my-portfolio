import { pageStyles } from '@/components/page/Page.module.scss';
import { preloaderStyles, notRendered } from '@/components/preloader/PreLoader.module.scss';
import { mediaContainer, showItem } from '@/components/navbar/Navbar.module.scss';

function renderScrolling() {
    const page = document.querySelector(`[class*="${pageStyles}"]`), sections = [...page.children].filter(sec => sec.id);

    page.onscroll = () => {
        const findedSection = sections.find(filterSection);
    };

    function filterSection({ offsetTop, offsetHeight }) {
        const { scrollTop } = page;

        return scrollTop >= offsetTop && scrollTop < offsetTop + offsetHeight;
    };
};

function endPreloader() {
    const preloaders = document.querySelectorAll(`[class*="${preloaderStyles}"]`);

    preloaders.forEach(preloader => preloader.classList.remove(notRendered));
};

function renderCanvas() {};

function renderMedia() {
    const mediaContainers = document.querySelectorAll(`[class*="${mediaContainer}"]`);

    mediaContainers.forEach(mediaContainer => mediaContainer.classList.add(showItem));
};

function renderPage() {
    renderScrolling();

    endPreloader();
    renderMedia();

    renderCanvas();
};

function renderSecPage() {
    endPreloader();
    renderMedia();
};

export { renderPage, renderSecPage };