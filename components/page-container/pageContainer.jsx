import {pageContainerStyles} from './pageContainer.module.scss';

function PageContainer({children}) {
    return <main className={pageContainerStyles}>{children}</main>
};

export default PageContainer;