import Image from 'next/image';
import { welcomeStyles, imageContainer, textContainer, mainTitle } from './Welcome.module.scss';
import Wallpaper from '@/assets/images/abstract-wallpaper.jpg';

function Welcome() {
    return <section className={welcomeStyles} id="welcome">
        <article className={textContainer}>
            <h1 className={mainTitle} data-show>
                <span>Hi, i'm <br /><strong>Patrick</strong></span>
            </h1>
        </article>
        <article className={imageContainer}>
            <Image {...Wallpaper}/>
        </article>
    </section>
};

export default Welcome;