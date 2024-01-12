import PageContent from '../../pages-content/PageContent';
import { hoverContent, person, blobs, blob1, blob2, blob3 } from './AboutMe.module.scss';
import Person from '@/assets/svgs/person-bighead.svg';

function AboutMe({ ...contexts }) {
    return <PageContent titlePage="About Me" id="about-me" { ...contexts }>
        <main className={hoverContent}>
            <section className={person}>
                <Person/>
            </section>
            <section className={blobs}>
                <section className={blob1} style={{transitionDelay: '.1s'}}>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#039a" d="M50.8,-35.3C66.8,-20.4,81.5,0.8,77.9,18.3C74.3,35.8,52.5,49.7,29.3,60.8C6.2,72,-18.3,80.4,-38.5,73.2C-58.7,66.1,-74.7,43.4,-72.5,24.6C-70.4,5.9,-50.1,-8.9,-35,-23.6C-19.9,-38.3,-9.9,-52.9,3.7,-55.9C17.4,-58.8,34.8,-50.2,50.8,-35.3Z" transform="translate(100 100)" />
                    </svg>
                </section>
                <section className={blob2} style={{transitionDelay: '.15s'}}>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#0277" d="M53.9,-48.5C60.1,-35.3,48.6,-13.4,39.8,2.7C31,18.7,25,29,15.3,34.8C5.7,40.6,-7.5,41.9,-26.5,38.9C-45.5,36,-70.2,28.8,-77,13.4C-83.8,-2,-72.7,-25.6,-56.9,-41C-41.1,-56.5,-20.5,-63.7,1.7,-65.1C23.9,-66.4,47.8,-61.8,53.9,-48.5Z" transform="translate(100 100)" />
                    </svg>
                </section>
                <section className={blob3} style={{transitionDelay: '.2s'}}>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#0164" d="M45.7,-30.9C61,-17.2,76.4,1.9,74.5,19.8C72.7,37.8,53.5,54.6,34.6,58.7C15.6,62.8,-3.2,54.2,-24.9,46C-46.6,37.7,-71.2,29.8,-71.4,19.1C-71.6,8.4,-47.4,-5.1,-31.5,-18.8C-15.5,-32.6,-7.8,-46.6,3.7,-49.6C15.2,-52.6,30.4,-44.5,45.7,-30.9Z" transform="translate(100 100)" />
                    </svg>
                </section>
            </section>
        </main>
    </PageContent>
};

export default AboutMe;