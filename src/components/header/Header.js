import { Link } from 'react-router-dom';
import './Header.scss';
import {BsArrowLeft} from 'react-icons/bs';
import SocialMedia from '../social-media/SocialMedia';
import socialMediasList from '../../scripts/socialMediasList';
import PreLoader from '../pre-loader/PreLoader';

function Header({backToMain, pathTitle}) {
    document.title = pathTitle ? `${pathTitle} | Patrick Léo` : 'Patrick Léo - Portfolio';
    
    return <header id="header">
        <div className="first-layer">
            <main>
                <Link to="/" className="hover">Patrick Léo</Link>
            </main>
            <aside>
                {socialMediasList.length && socialMediasList.map(({icon, name, link}, ind) => <SocialMedia key={ind} Icon={icon} name={name} link={link}/>)}
                <div>
                    <ul>
                        {socialMediasList.length && socialMediasList.map(({name}, ind) => <li key={ind} data-name={name} className="">{name}</li>)}
                    </ul>
                </div>
            </aside>
        </div>
        {backToMain && <span><Link to={backToMain} className="back-home"><BsArrowLeft/></Link></span>}
        <PreLoader/>
    </header>
};

export default Header;