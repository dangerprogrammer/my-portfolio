import { pageStyles } from '@/components/page/Page.module.scss';

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

function renderCanvas() {};

export { renderScrolling, renderCanvas };