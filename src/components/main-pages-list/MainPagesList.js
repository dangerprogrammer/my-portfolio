import { Link } from "react-router-dom";
import PageContent from "../page-content/PageContent";
import RoutesCore from '../../RoutesCore';

function MainPagesList() {
    const filtredRoutes = RoutesCore.filter(({path}) => path !== '/');
    return <div>{filtredRoutes.length && filtredRoutes.map(({path, DefaultElem}, ind) => <MainPagesItem key={ind} path={path} Element={DefaultElem}/>)}</div>
};

function MainPagesItem({path, Element}) {
    return <PageContent subContent id={path.slice(1)}><Element/><Link to={path}>Visite</Link></PageContent>
};

export default MainPagesList;