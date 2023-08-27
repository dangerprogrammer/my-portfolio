import { preloaderStyles, notRendered } from './PreLoader.module.scss';

function PreLoader(styles) {
    return <main className={`${preloaderStyles} ${notRendered}`} style={styles}></main>
};

export default PreLoader;