import navPages from '@/assets/navPages';
import { sidebarStyles, itemPage, itemSection, svgContainer, hideSidebarStyles } from './Sidebar.module.scss';
import Link from 'next/link';
import { renderNavScroll } from '@/scripts/initializePageTools';
import { useEffect, useState } from 'react';

function Sidebar({ noAction, history, setHistory }) {
    const [ hLink, setLink ] = useState('');
    useEffect(() => {
        const lastH = history[history.length - 1];
        if (lastH.startsWith('/#')) (setHistory(oldHistory => [...oldHistory.slice(0, history.length - 1)]), setLink(() => lastH));
    }, [history]);

    return <nav className={[sidebarStyles, noAction ? hideSidebarStyles : undefined].join(' ')}>
        <ul>
            {navPages.map(({ link, text, Icon }, ind) => <li key={ind} className={itemPage} style={{animationDelay: `${2e2 + ind * 1e2}ms`}}>
                <Link href={hLink + link} onClick={renderNavScroll}>
                    <section className={itemSection}>
                        <div className={svgContainer}>
                            <Icon/>
                        </div>
                        <span>{text}</span>
                    </section>
                </Link>
            </li>)}
        </ul>
    </nav>
};

export default Sidebar;