import BackgroundCanvas from '../background-canvas/BackgroundCanvas';
import { pageStyles } from './Page.module.scss';

function Page({children}) {
    return <main className={pageStyles}>
        {children}
        <BackgroundCanvas/>
    </main>
};

export default Page;