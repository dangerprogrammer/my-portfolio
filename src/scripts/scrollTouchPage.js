import { activePrevPage, activeNextPage } from "./activePage";

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
        console.log(isUp);
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

export {loadScrolling, loadTouching, loadTouchStart};