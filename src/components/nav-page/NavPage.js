import './NavPage.scss';

import RoutesCore from '../../RoutesCore';
import { Link } from 'react-router-dom';
import {activePage, activeNextPage, activePrevPage} from '../../scripts/activePage';

function NavPage() {
    setTimeout(activeOwnPage, 1);

    return <nav id="nav-page">
        {RoutesCore.length && RoutesCore.map(({backPath}, ind) =>
            <Link key={ind} to={backPath} onClick={ev => activePage(ev.target)}>
            <main/>
        </Link>
        )}
    </nav>
};

function activeOwnPage() {
    const hasActive = document.querySelector('#nav-page .active main'),
        ownerA = document.querySelector('#nav-page a main'),
        pageContainer = document.querySelector('#page-container');
    if (!hasActive) activePage(ownerA);
    pageContainer.onmousewheel = loadScrolling;
};

let delayScroll = 1e3, canScroll = !0;
function loadScrolling(ev) {
    ev.preventDefault();
    const {wheelDeltaY} = ev;
    if (canScroll) {
        canScroll = !1;
        setTimeout(() => {
            canScroll = !0;
        }, delayScroll);
    } else return;
    if (wheelDeltaY < 0) activeNextPage();
    else activePrevPage();
};

export default NavPage;