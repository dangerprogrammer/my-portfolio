import PageContent from '../pages-content/PageContent';
import { hoverContent, person } from './AboutMe.module.scss';
import Person from '@/assets/svgs/person-bighead.svg';

function AboutMe() {
    return <PageContent titlePage="About Me" id="about-me">
        <main className={hoverContent}>
            <section className={person}>
                <Person/>
            </section>
        </main>
    </PageContent>
};

export default AboutMe;