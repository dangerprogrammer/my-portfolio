'use client';
 
import socialMedias from '@/assets/socialMedias';
import PreLoader from '../preloader/PreLoader';
import { navbarStyles, socialMedia, preloaderContainer, mediaContainer, titleNav } from './Navbar.module.scss';
import Link from 'next/link';

function Navbar() {
    return <nav className={navbarStyles}>
        <span className={preloaderContainer}>
            <PreLoader zIndex='2'/>
            <PreLoader transitionDelay='.05s' backgroundColor='red' zIndex='1'/>
            <PreLoader transitionDelay='.1s' backgroundColor='white' zIndex='0'/>
        </span>
        <a className={titleNav} style={{cursor: 'pointer'}} href="/"><h1>Portfolio</h1></a>
        <ul className={socialMedia}>
            {socialMedias.map(({ link, Icon }, ind) => <li key={ind} className={mediaContainer} style={{animationDelay: `${5e2 + ind * 1e2}ms`}}>
                <Link href={link} target='_blank'><Icon/></Link>
            </li>)}
        </ul>
    </nav>
};

export default Navbar;