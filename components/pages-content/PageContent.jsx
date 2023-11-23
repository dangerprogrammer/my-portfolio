import { pageContent } from './PageContent.module.scss';

function PageContent({ titlePage, className, ...contexts }) {
    return <section {...contexts} className={[className, pageContent].join(' ')}>
        <h1>{titlePage}</h1>
    </section>
};

export default PageContent;