import Image from 'next/image';
import { welcomeStyles, imageContainer, textContainer, mainTitle, titleDesc, titleName } from './Welcome.module.scss';
import Wallpaper from '@/assets/images/abstract-wallpaper.jpg';
import { renderNavScroll } from '@/scripts/initializePageTools';
import { useEffect } from 'react';
import { itemPage } from '../sidebar/Sidebar.module.scss';
import DataShow from '../data-show/DataShow';

function Welcome() {
    const { blurWidth, blurHeight, ...wallpaper } = Wallpaper;

    useEffect(() => {
        const sideList = [...document.querySelector(`[class*="${itemPage}"]`).parentElement.children],
            scrollElem = (sideList.find(({ children }) => children[0].href == location.href) || sideList[0]).children[0];

        renderNavScroll(scrollElem);
    }, []);

    return <section className={welcomeStyles} id="welcome">
        <article className={textContainer}>
            <h1 className={mainTitle}>
                <DataShow>
                    <span>Hi, i'm <br /></span>
                </DataShow>
                <DataShow className={titleName}>
                    <strong>Patrick</strong>
                </DataShow>
            </h1>
            <DataShow>
                <h2 className={titleDesc}>Full-stack web dev</h2>
            </DataShow>
            <DataShow>
                <p>Do you want to know more about me?</p>
            </DataShow>
            <DataShow>
                <p>Scroll page for see more</p>
            </DataShow>
        </article>
        <article className={imageContainer}>
            <Image {...{...wallpaper, alt: 'Welcome image', priority: !0}}/>
        </article>
    </section>
};

export default Welcome;