import Image from 'next/image';
import { welcomeStyles, imageContainer, textContainer, mainTitle, titleDesc, titleName, buttonScroll } from './Welcome.module.scss';
import Wallpaper from '@/assets/images/abstract-wallpaper.jpg';
import ArrowDown from '@/assets/svgs/arrow-down-outline.svg';
import { renderNavScroll } from '@/scripts/initializePageTools';
import { useEffect } from 'react';
import { itemPage } from '../sidebar/Sidebar.module.scss';
import { usePathname } from 'next/navigation';

function Welcome() {
    const pathname = usePathname();

    useEffect(() => {
        const { children } = document.querySelector(`[class*="${itemPage}"]`).parentElement.children[1];
        console.log(pathname);
        // renderNavScroll(children[0]);
    }, []);

    return <section className={welcomeStyles} id="welcome">
        <article className={textContainer}>
            <h1 className={mainTitle}>
                <div data-show><span>Hi, i'm <br /></span></div>
                <div data-show className={titleName}><strong>Patrick</strong></div>
            </h1>
            <div data-show>
                <h2 className={titleDesc}>Full-stack web dev</h2>
            </div>
            <div data-show>
                <p>Do you want to know more about me?</p>
            </div>
            <div data-show>
                <p>Scroll page for see more</p>
            </div>
        </article>
        <article className={imageContainer}>
            <Image {...Wallpaper}/>
        </article>
        <button className={buttonScroll} id="scroll-down">Scroll<ArrowDown/></button>
    </section>
};

export default Welcome;