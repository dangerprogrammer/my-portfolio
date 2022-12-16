import { Link } from 'react-router-dom';
import './Header.scss';
import {BsArrowLeft} from 'react-icons/bs';

function Header({backToMain}) {
    return <header id="header">
        <div className="first-layer">
            <main>
                <Link to="/">Patrick Léo</Link>
            </main>
        </div>
        {backToMain && <span><Link to={backToMain}><BsArrowLeft/></Link></span>}
    </header>
};

export default Header;