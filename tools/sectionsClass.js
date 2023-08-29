import { welcomeActive } from '@/components/welcome/Welcome.module.scss';
import { aboutMeActive } from '@/components/about-me/AboutMe.module.scss';
import { skillsActive } from '@/components/skills/Skills.module.scss';
import { myProjectsActive } from '@/components/my-projects/MyProjects.module.scss';

const sectionsClass = {
    'welcome': welcomeActive,
    'about-me': aboutMeActive,
    'skills': skillsActive,
    'my-projects': myProjectsActive
};

export default sectionsClass;