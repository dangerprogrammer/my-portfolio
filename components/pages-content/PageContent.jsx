import { pageContent, imageContainer, preLoaders } from './PageContent.module.scss';

function PageContent({ titlePage, ...contexts }) {
    return <section {...contexts} style={{display: 'flex', zIndex: 50}}>
        <main className={pageContent}>
            <h1>{titlePage}</h1>
            <aside className={imageContainer}>
                <div className={preLoaders} style={{'--delay': '.2s', backgroundColor: 'black', zIndex: 2}}></div>
                <div className={preLoaders} style={{'--delay': '.1s', backgroundColor: 'red', zIndex: 1}}></div>
                <div className={preLoaders} style={{'--delay': '0s', backgroundColor: 'white', zIndex: 0}}></div>
                Opa
            </aside>
        </main>
    </section>
};

export default PageContent;