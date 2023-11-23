import PageContent from '../pages-content/PageContent';
import { aboutMeStyles } from './AboutMe.module.scss';

function AboutMe() {
    return <PageContent titlePage="See more about me" className={aboutMeStyles} id="about-me"/>
};

export default AboutMe;