import AboutMe from '../pages/about-me/AboutMe';
import { renderedAboutMe } from '../pages/about-me/AboutMe.module.scss';
import MyProjects from '../pages/my-projects/MyProjects';
import Skills from '../pages/skills/Skills';

const listTitles = {
    'about-me': 'About Me',
    'skills': 'Skills',
    'my-projects': 'My Projects'
}, listClasses = {
    'about-me': renderedAboutMe
}, listComponents = {
    'about-me': AboutMe,
    'skills': Skills,
    'my-projects': MyProjects
};

export { listTitles, listClasses, listComponents };