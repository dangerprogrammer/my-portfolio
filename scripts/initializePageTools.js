import { pageStyles } from '@/components/page/Page.module.scss';
import { preloaderStyles, notRendered } from '@/components/preloader/PreLoader.module.scss';

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

export { renderScrolling, endPreloader, renderCanvas };