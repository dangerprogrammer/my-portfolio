import AboutMe, { PageAboutMe } from '../pages/about-me/AboutMe';
import { renderedAboutMe, contentAboutMe } from '../pages/about-me/AboutMe.module.scss';
import MyProjects, { PageMyProjects } from '../pages/my-projects/MyProjects';
import Skills, { PageSkills } from '../pages/skills/Skills';

const listTitles = {
    'about-me': 'About Me',
    'skills': 'Skills',
    'my-projects': 'My Projects'
}, listClasses = {
    'about-me': renderedAboutMe
}, listComponents = {
    'about-me': {
        head: AboutMe,
        content: PageAboutMe
    },
    'skills': {
        head: Skills,
        content: PageSkills
    },
    'my-projects': {
        head: MyProjects,
        content: PageMyProjects
    }
};

export { listTitles, listClasses, listComponents };