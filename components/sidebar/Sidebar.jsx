import navPages from '@/assets/navPages';
import { sidebarStyles, itemPage, itemSection, svgContainer } from './Sidebar.module.scss';
import Link from 'next/link';
import { renderNavScroll } from '@/scripts/initializePageTools';

function Sidebar() {
    return <nav className={sidebarStyles}>
        <ul>
            {navPages.map(({ link, text, Icon }, ind) => <li key={ind} className={itemPage} style={{animationDelay: `${2e2 + ind * 1e2}ms`}}>
                <Link href={link} onClick={renderNavScroll}>
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