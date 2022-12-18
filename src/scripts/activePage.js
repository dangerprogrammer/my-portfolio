function activePage(page) {
    const aTarget = page.parentElement, aSiblings = [...aTarget.parentElement.children],
        {origin, pathname} = window.location, href = aTarget.href.slice((origin + pathname).length),
        targetSection = document.querySelector(`section${href}`), sectionTop = targetSection.offsetTop,
        pageContainer = document.querySelector('#page-container'), scrollDown = document.querySelector('#scroll-down');

    aSiblings.forEach(sibling => sibling.classList[sibling.href === aTarget.href ? 'add' : 'remove']('active'));
    
    if (sectionTop > 0) page.click();
    
    scrollDown.classList.toggle('scrolled', sectionTop > 0);
    pageContainer.scrollTo(0, sectionTop);
};

function activeNextPage() {
    const ownerA = document.querySelector(`#nav-page .active`),
        siblings = [...ownerA.parentElement.children];
    let nextPage;
    siblings.forEach((sibling, ind) => {
        if (sibling.href === ownerA.href) nextPage = siblings[Math.min(ind + 1, siblings.length - 1)].firstChild;
    });

    return activePage(nextPage);
};

function activePrevPage() {
    const ownerA = document.querySelector(`#nav-page .active`),
        siblings = [...ownerA.parentElement.children];
    let prevPage;
    siblings.forEach((sibling, ind) => {
        if (sibling.href === ownerA.href) prevPage = siblings[Math.max(ind - 1, 0)].firstChild;
    });

    return activePage(prevPage);
};

export {activePage, activeNextPage, activePrevPage};