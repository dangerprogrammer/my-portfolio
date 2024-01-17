import { listComponents, listTitles } from '../context/listPages';
import {
    sectionStyles,
    pageHead, imageContainer, contentImage, mainTitle, space, aboutPage, titleContainer, buttonContainer, clip, left, left1, left2, left3, fullImage,
    pageContent
} from './PageContent.module.scss';
import goTo from '@/tools/goTo';

function PageContent({ children, id, secPage = !1, ...contexts }) {
    const titlePage = listTitles[id], ComponentPage = listComponents[id].content,
        goToSettings = secPage ? {url: '/', ...contexts} : {url: `/${id}`, prevURL: `/#${id}`, ...contexts};

    return <section {...{id, ...contexts}} className={sectionStyles}>
        <main className={pageHead} style={{zIndex: 50}}>
            <h1 className={mainTitle}>
                <div className={titleContainer}>{[...titlePage].map((l, ind) => <span className={l == ' ' ? space : undefined} style={{transitionDelay: `calc(${titlePage.length - ind}ms * 35)`}}>{l}</span>)}</div>
                <div className={buttonContainer}>
                    <button className={aboutPage} onClick={({ target }) => goTo(goToSettings, target)}>
                        <span className={[clip, left, left1].join(' ')}>{secPage ? 'Back' : 'Show me more'}</span>
                        <span className={[clip, left, left2].join(' ')}>{secPage ? 'Back' : 'Show me more'}</span>
                        <span className={[clip, left, left3].join(' ')}>{secPage ? 'Back' : 'Show me more'}</span>
                        <p>{secPage ? 'Back' : 'Show me more'}</p>
                    </button>
                </div>
            </h1>
            <aside className={[imageContainer, secPage ? fullImage : undefined].join(' ')} onClick={({ target }) => secPage ? undefined : goTo(goToSettings, target)}>
                <div className={contentImage}>
                    {children}
                </div>
            </aside>
        </main>
        <section className={pageContent}>
            <ComponentPage/>
        </section>
    </section>
};

export default PageContent;