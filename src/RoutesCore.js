import {AboutMe, AboutMeDefault} from "./pages/about-me/AboutMe";
import {Skills, SkillsDefault} from "./pages/skills/Skills";
import {MyProjects, MyProjectsDefault} from "./pages/my-projects/MyProjects";

const RoutesCore = [
    {path: '/about-me', Element() {
        return <>
            <AboutMeDefault/>
            <AboutMe/>
        </>
    }, DefaultElem: AboutMeDefault},
    {path: '/skills', Element() {
        return <>
            <SkillsDefault/>
            <Skills/>
        </>
    }, DefaultElem: SkillsDefault},
    {path: '/my-projects', Element() {
        return <>
            <MyProjectsDefault/>
            <MyProjects/>
        </>
    }, DefaultElem: MyProjectsDefault}
];

export default RoutesCore;