import { secPageStyles } from './SecPage.module.scss';

function SecPage({children}) {
    return <main className={secPageStyles}>
        {children}
    </main>
};

export default SecPage;