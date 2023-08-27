import { pageStyles } from './Page.module.scss';

function Page({children}) {
    return <main className={pageStyles}>
        {children}
    </main>
};

export default Page;