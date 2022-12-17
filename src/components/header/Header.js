import { Link } from 'react-router-dom';
import './Header.scss';
import {BsArrowLeft} from 'react-icons/bs';
import SocialMedia from '../social-media/SocialMedia';
import socialMediasList from '../../scripts/socialMediasList';

function Header({backToMain}) {
    return <header id="header">
        <div className="first-layer">
            <main>
                <Link to="/" className="hover">Patrick Léo</Link>
            </main>
            <aside>
                {socialMediasList.length && socialMediasList.map(({icon, name, link}, ind) => <SocialMedia key={ind} Icon={icon} name={name} link={link}/>)}
            </aside>
        </div>
        {backToMain && <span><Link to={backToMain} className="back-home"><BsArrowLeft/></Link></span>}
    </header>
};

export default Header;