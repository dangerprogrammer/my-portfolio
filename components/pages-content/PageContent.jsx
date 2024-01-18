'use client';

import AnimatedButton from '../animated-button/AnimatedButton';
import { listComponents, listTitles } from '../context/listPages';
import {
    sectionStyles,
    pageHead, imageContainer, contentImage, mainTitle, space, aboutPage, backPage, titleContainer, buttonContainer, reverseButton,
    pageContent
} from './PageContent.module.scss';
import goTo from '@/tools/goTo';

function PageContent({ children, id, secPage = !1, history, setHistory, ...contexts }) {
    const titlePage = listTitles[id], ComponentPage = listComponents[id].content,
        goToSettings = secPage ? {url: `/#${id}`} : {url: `/${id}`},
        goToSettings2 = secPage ? {url: `/${id}`} : {url: `/#${id}`};

    return <section {...{id, ...contexts}} className={sectionStyles}>
        <main className={pageHead} style={{zIndex: 50}}>
            <h1 className={mainTitle}>
                <div className={titleContainer}>{[...titlePage].map((l, ind) => <span key={ind} className={l == ' ' ? space : undefined} style={{transitionDelay: `calc(${titlePage.length - ind}ms * 35)`}}>{l}</span>)}</div>
                <div className={[buttonContainer, secPage ? reverseButton : undefined].join(' ')}>
                    <AnimatedButton text={secPage ? 'Back' : 'Show me more'} className={aboutPage} onClick={() => goTo(goToSettings, setHistory)}/>
                    <AnimatedButton text={secPage ? 'Show me more' : 'Back'} className={backPage} onClick={() => goTo(goToSettings2, setHistory)}/>
                    <AnimatedButton text={'Show me more'}/>
                </div>
            </h1>
            <aside className={imageContainer} onClick={() => goTo({url: `/${id}`}, setHistory)}>
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