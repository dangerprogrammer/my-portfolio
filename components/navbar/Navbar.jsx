import socialMedias from '@/assets/socialMedias';
import PreLoader from '../preloader/PreLoader';
import { navbarStyles, socialMedia, preloaderContainer } from './Navbar.module.scss';
import Link from 'next/link';

function Navbar() {
    return <nav className={navbarStyles}>
        <span className={preloaderContainer}>
            <PreLoader zIndex='2'/>
            <PreLoader transitionDelay='.05s' backgroundColor='red' zIndex='1'/>
            <PreLoader transitionDelay='.1s' backgroundColor='white' zIndex='0'/>
        </span>
        <h1>Patrick Vieira Léo</h1>
        <ul className={socialMedia}>
            {socialMedias.map(({ link, Icon }, ind) => <li key={ind}>
                <Link href={link}><Icon/></Link>
            </li>)}
        </ul>
    </nav>
};

export default Navbar;