import socialMedias from '@/assets/socialMedias';
import PreLoader from '../preloader/PreLoader';
import { navbarStyles, socialMedia } from './Navbar.module.scss';
import Link from 'next/link';

function Navbar() {
    return <nav className={navbarStyles}>
        <PreLoader/>
        <PreLoader transitionDelay='.15s' opacity='.5'/>
        <PreLoader transitionDelay='.25s' opacity='.5'/>
        <h1>Patrick Vieira Léo</h1>
        <ul className={socialMedia}>
            {socialMedias.map(({ link, Icon }, ind) => <li key={ind}>
                <Link href={link}><Icon/></Link>
            </li>)}
        </ul>
    </nav>
};

export default Navbar;