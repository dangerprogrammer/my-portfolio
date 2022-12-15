import { Link } from "react-router-dom";
import PageContent from "../page-content/PageContent";
// import routesCore from './routesCore';
import {AboutMe, AboutMeDefault} from "../../pages/about-me/AboutMe";
import {Skills, SkillsDefault} from "../../pages/skills/Skills";
import {MyProjects, MyProjectsDefault} from "../../pages/my-projects/MyProjects";

const routesCore = [
    {path: '/about-me', Element: AboutMe, DefaultElem: AboutMeDefault},
    {path: '/skills', Element: Skills, DefaultElem: SkillsDefault},
    {path: '/my-projects', Element: MyProjects, DefaultElem: MyProjectsDefault}
];

function MainPagesList() {
    return <div>{routesCore.length && routesCore.map(({path, DefaultElem}, ind) => <MainPagesItem key={ind} path={path} Element={DefaultElem}/>)}</div>
};

function MainPagesItem({path, Element}) {
    return <PageContent subContent><Element/><Link to={path}>Visite</Link></PageContent>
};

export default MainPagesList;