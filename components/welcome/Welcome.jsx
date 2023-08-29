import Image from 'next/image';
import { welcomeStyles } from './Welcome.module.scss';
import Wallpaper from '@/assets/images/abstract-wallpaper.jpg';

function Welcome() {
    console.log(Wallpaper);

    return <section className={welcomeStyles} id="welcome">
        <Image {...Wallpaper}/>
    </section>
};

export default Welcome;