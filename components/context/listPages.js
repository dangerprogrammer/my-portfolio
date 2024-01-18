import AboutMe, { PageAboutMe } from '../pages/about-me/AboutMe';
import { renderedAboutMe } from '../pages/about-me/AboutMe.module.scss';
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
        main: AboutMe,
        content: PageAboutMe
    },
    'skills': {
        main: Skills,
        content: PageSkills
    },
    'my-projects': {
        main: MyProjects,
        content: PageMyProjects
    }
};

export { listTitles, listClasses, listComponents };