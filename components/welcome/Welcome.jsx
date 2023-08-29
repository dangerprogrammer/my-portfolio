import Image from 'next/image';
import { welcomeStyles, imageContainer, textContainer, mainTitle } from './Welcome.module.scss';
import Wallpaper from '@/assets/images/abstract-wallpaper.jpg';

function Welcome() {
    return <section className={welcomeStyles} id="welcome">
        <article className={textContainer}>
            <h1 className={mainTitle}>Hi, i'm <br /><strong>Patrick</strong></h1>
        </article>
        <article className={imageContainer}>
            <Image {...Wallpaper}/>
        </article>
    </section>
};

export default Welcome;