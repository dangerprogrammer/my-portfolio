import Image from 'next/image';
import { welcomeStyles, imageContainer, textContainer, mainTitle, titleDesc } from './Welcome.module.scss';
import Wallpaper from '@/assets/images/abstract-wallpaper.jpg';

function Welcome() {
    return <section className={welcomeStyles} id="welcome">
        <article className={textContainer}>
            <h1 className={mainTitle}>
                <div data-show><span>Hi, i'm <br /></span></div>
                <div data-show><strong>Patrick</strong></div>
            </h1>
            <div data-show>
                <h2 className={titleDesc}>Full-stack web developer</h2>
            </div>
        </article>
        <article className={imageContainer}>
            <Image {...Wallpaper}/>
        </article>
    </section>
};

export default Welcome;