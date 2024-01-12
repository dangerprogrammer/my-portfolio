import { pageContent, imageContainer, preLoaders, contentImage, mainTitle } from './PageContent.module.scss';
import goTo from '@/tools/goTo';

function PageContent({ titlePage, children, id, ...contexts }) {
    return <section {...{id, ...contexts}} style={{display: 'flex'}}>
        <main className={pageContent} style={{zIndex: 50}}>
            <h1 className={mainTitle}>
                <span>{titlePage}</span>
            </h1>
            <aside className={imageContainer} onClick={() => goTo({url: `/${id}`, prevURL: `/#${id}`, ...contexts})}>
                <div className={preLoaders} style={{'--delay': '.15s', backgroundColor: 'black', zIndex: 2}}></div>
                <div className={preLoaders} style={{'--delay': '.075s', backgroundColor: 'red', zIndex: 1}}></div>
                <div className={preLoaders} style={{'--delay': '0s', backgroundColor: 'white', zIndex: 0}}></div>
                <div className={contentImage}>
                    {children}
                </div>
            </aside>
        </main>
    </section>
};

export default PageContent;