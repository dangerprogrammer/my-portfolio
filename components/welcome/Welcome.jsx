import Image from 'next/image';
import { welcomeStyles, imageContainer, textContainer, mainTitle, titleDesc, titleName } from './Welcome.module.scss';
import Wallpaper from '@/assets/images/abstract-wallpaper.jpg';

function Welcome() {
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
    </section>
};

export default Welcome;