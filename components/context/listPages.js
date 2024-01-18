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
        main: ({ ...contexts }) => <AboutMe { ...contexts }/>,
        content: PageAboutMe
    },
    'skills': {
        main: ({ ...contexts }) => <Skills { ...contexts }/>,
        content: PageSkills
    },
    'my-projects': {
        main: ({ ...contexts }) => <MyProjects { ...contexts }/>,
        content: PageMyProjects
    }
};

export { listTitles, listClasses, listComponents };