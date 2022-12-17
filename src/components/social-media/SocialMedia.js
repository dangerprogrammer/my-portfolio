// import { Link } from "react-router-dom";

function SocialMedia({Icon, name, link}) {
    return <li><a href={link}>Icon: <Icon/></a></li>
};

export default SocialMedia;