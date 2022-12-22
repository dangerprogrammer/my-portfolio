import './NavPage.scss';

import RoutesCore from '../../RoutesCore';
import { Link } from 'react-router-dom';
import {activePage, activeNextPage, activePrevPage} from '../../scripts/activePage';

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

let delayScroll = 750, canScroll = !0;
function loadScrolling(ev) {
    ev.preventDefault();
    const {wheelDeltaY} = ev;
    if (canScroll) {
        canScroll = !canScroll;
        setTimeout(() => canScroll = !canScroll, delayScroll);
    } else return;
    if (wheelDeltaY < 0) activeNextPage();
    else activePrevPage();
};

let canTouch = !0, lastY, isUp, freeze = !1;
function loadTouching(ev) {
    const touchOne = ev.touches[0];
    if (lastY === undefined) lastY = touchOne.clientY;
    else {
        let actY = touchOne.clientY;
        isUp = actY > lastY;
        if (lastY === actY) freeze = !freeze;
        lastY = actY;
    };
    
    if (isUp !== undefined && !freeze) {
        if (canTouch) {
            canTouch = !canTouch;
            setTimeout(() => canTouch = !canTouch, delayScroll);
        } else return;

        if (!isUp) activeNextPage();
        else activePrevPage();
    };
};

function loadTouchStart(ev) {
    const touchOne = ev.touches[0];

    lastY = touchOne.clientY;
};

export default NavPage;