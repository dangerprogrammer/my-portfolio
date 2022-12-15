import { Link } from "react-router-dom";
import PageContent from "../page-content/PageContent";
import routesCore from "../../routesCore";

function MainPagesList() {
    return <div>{routesCore.length && routesCore.map(({path, DefaultElem}, ind) => <MainPagesItem key={ind} path={path} Element={DefaultElem}/>)}</div>
};

function MainPagesItem({path, Element}) {
    return <PageContent subContent><Element/><Link to={path}>Visite</Link></PageContent>
};

export default MainPagesList;