import listTitles from '../context/listTitles';
import { pageContent, imageContainer, preLoaders, contentImage, mainTitle, space, aboutPage, titleContainer, buttonContainer, clip, left, left1, left2, left3 } from './PageContent.module.scss';
import goTo from '@/tools/goTo';

function PageContent({ children, id, ...contexts }) {
    const titlePage = listTitles[id];

    return <section {...{id, ...contexts}} style={{display: 'flex'}}>
        <main className={pageContent} style={{zIndex: 50}}>
            <h1 className={mainTitle}>
                <div className={titleContainer}>{[...titlePage].map((l, ind) => <span className={l == ' ' ? space : undefined} style={{transitionDelay: `calc(${titlePage.length - ind}ms * 35)`}}>{l}</span>)}</div>
                <div className={buttonContainer}>
                    <button className={aboutPage} onClick={({ target }) => goTo({url: `/${id}`, prevURL: `/#${id}`, ...contexts}, target)}>
                        <span className={[clip, left, left1].join(' ')}>Show me more</span>
                        <span className={[clip, left, left2].join(' ')}>Show me more</span>
                        <span className={[clip, left, left3].join(' ')}>Show me more</span>
                        <p>Show me more</p>
                    </button>
                </div>
            </h1>
            <aside className={imageContainer} onClick={({ target }) => goTo({url: `/${id}`, prevURL: `/#${id}`, ...contexts}, target)}>
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