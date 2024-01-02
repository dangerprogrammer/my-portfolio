import { pageContent, imageContainer } from './PageContent.module.scss';

function PageContent({ titlePage, ...contexts }) {
    return <section {...contexts} style={{display: 'flex', zIndex: 50}}>
        <main className={pageContent}>
            <h1>{titlePage}</h1>
            <aside className={imageContainer}>
                Opa
            </aside>
        </main>
    </section>
};

export default PageContent;