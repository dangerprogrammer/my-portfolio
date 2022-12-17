import './NavPage.scss';

import RoutesCore from '../../RoutesCore';
import { Link } from 'react-router-dom';

function NavPage() {
    return <nav id="nav-page">
        {RoutesCore.length && RoutesCore.map(({backPath}, ind) => <Link key={ind} to={backPath}>
            <main/>
        </Link>)}
    </nav>
};

export default NavPage;