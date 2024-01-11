'use client';
 
import { usePathname, useRouter } from 'next/navigation';
import socialMedias from '@/assets/socialMedias';
import PreLoader from '../preloader/PreLoader';
import { navbarStyles, socialMedia, preloaderContainer, mediaContainer, titleNav } from './Navbar.module.scss';
import Link from 'next/link';
import goTo from '@/tools/goTo';

function Navbar({ ...contexts }) {
    const pathname = usePathname(), { push } = useRouter();

    console.log(contexts)
    return <nav className={navbarStyles}>
        <span className={preloaderContainer}>
            <PreLoader zIndex='2'/>
            <PreLoader transitionDelay='.05s' backgroundColor='red' zIndex='1'/>
            <PreLoader transitionDelay='.1s' backgroundColor='white' zIndex='0'/>
        </span>
        {pathname.slice(1) ? <h1 onClick={() => goTo({url: '/', setHistory, backHistory, push})} className={titleNav}>Portfolio</h1> : <h1 className={titleNav}>Portfolio</h1>}
        <ul className={socialMedia}>
            {socialMedias.map(({ link, Icon }, ind) => <li key={ind} className={mediaContainer} style={{animationDelay: `${5e2 + ind * 1e2}ms`}}>
                <Link href={link} target='_blank'><Icon/></Link>
            </li>)}
        </ul>
    </nav>
};

export default Navbar;