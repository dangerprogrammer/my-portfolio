import './NavPage.scss';

import RoutesCore from '../../RoutesCore';
import { Link } from 'react-router-dom';
import {activePage} from '../../scripts/activePage';
import { loadScrolling, loadTouchStart, loadTouching } from '../../scripts/scrollTouchPage';

function NavPage() {
    activeOwnPage();

    return <nav id="nav-page">
        {RoutesCore.length && RoutesCore.map(({backPath}, ind) =>
            <Link key={ind} to={backPath} onClick={ev => activePage(ev.target)}>
            <main/>
        </Link>
        )}
    </nav>
};

function activeOwnPage() {
    const navPage = document.querySelector('#nav-page'),
        hasActive = document.querySelector('#nav-page .active main'),
        ownerA = document.querySelector('#nav-page a main'),
        pageContainer = document.querySelector('#page-container');
    
    if (!navPage) return setTimeout(activeOwnPage, 5e2);

    if (!hasActive) {
        const hash = window.location.hash;
        const siblings = [...ownerA.parentElement.parentElement.children],
            searchedHash = siblings.find(({href}) => href.endsWith(hash)).firstChild;

        activePage(searchedHash || ownerA);
    };
    pageContainer.onmousewheel = loadScrolling;
    pageContainer.ontouchstart = loadTouchStart;
    pageContainer.ontouchmove = loadTouching;
};

export default NavPage;