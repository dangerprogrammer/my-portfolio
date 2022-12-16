import { Link } from 'react-router-dom';
import './Header.scss';


function Header({backToMain}) {
    return <header id="header">
        <div className="first-layer">Header</div>
        {backToMain && <Link to={backToMain}>Voltar</Link>}
    </header>
};

export default Header;