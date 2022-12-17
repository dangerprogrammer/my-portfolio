// import { Link } from "react-router-dom";

function SocialMedia({Icon, name, link}) {
    return <li><a href={link} target="_blank" rel="noreferrer" className="hover"><Icon/></a></li>
};

export default SocialMedia;