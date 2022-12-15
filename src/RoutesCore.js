import {AboutMe, AboutMeDefault} from "./pages/about-me/AboutMe";
import {Skills, SkillsDefault} from "./pages/skills/Skills";
import {MyProjects, MyProjectsDefault} from "./pages/my-projects/MyProjects";
import PageContent from "./components/page-content/PageContent";

const RoutesCore = [
    {path: '/about-me', Element() {
        return <PageContent>
            <AboutMeDefault/>
            <AboutMe/>
        </PageContent>
    }, DefaultElem: AboutMeDefault},
    {path: '/skills', Element() {
        return <PageContent>
            <SkillsDefault/>
            <Skills/>
        </PageContent>
    }, DefaultElem: SkillsDefault},
    {path: '/my-projects', Element() {
        return <PageContent>
            <MyProjectsDefault/>
            <MyProjects/>
        </PageContent>
    }, DefaultElem: MyProjectsDefault}
];

export default RoutesCore;