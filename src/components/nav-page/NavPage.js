// import { useState } from 'react';

import './NavPage.scss';

import RoutesCore from '../../RoutesCore';
import { Link } from 'react-router-dom';
import {activePage, activeNextPage, activePrevPage} from '../../scripts/activePage';

function NavPage() {
    window.addEventListener("load", activeOwnPage);
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
    console.log("activeOwnPage");
    const hasActive = document.querySelector('#nav-page .active main'),
        ownerA = document.querySelector('#nav-page a main'),
        pageContainer = document.querySelector('#page-container');
    if (!hasActive) {
        const hash = window.location.hash;
        const siblings = [...ownerA.parentElement.parentElement.children],
            searchedHash = siblings.find(({href}) => href.endsWith(hash)).firstChild;

        activePage(searchedHash || ownerA);
    };
    pageContainer.onmousewheel = loadScrolling;
};

let delayScroll = 750, canScroll = !0;
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