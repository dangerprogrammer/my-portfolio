import {AboutMe, AboutMeDefault} from "./pages/about-me/AboutMe";
import {Skills, SkillsDefault} from "./pages/skills/Skills";
import {MyProjects, MyProjectsDefault} from "./pages/my-projects/MyProjects";
import { Main } from "./pages/main/Main";

const RoutesCore = [
    {path: '/', backPath: '/#main', Element: Main, exact: true},
    {path: '/about-me', backPath: '/#about-me', pathTitle: 'About Me', Element: AboutMe, DefaultElem: AboutMeDefault},
    {path: '/skills', backPath: '/#skills', pathTitle: 'Skills', Element: Skills, DefaultElem: SkillsDefault},
    {path: '/my-projects', backPath: '/#my-projects', pathTitle: 'My Projects', Element: MyProjects, DefaultElem: MyProjectsDefault}
];

export default RoutesCore;