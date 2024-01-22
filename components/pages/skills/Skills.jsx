import PageContent from '../../pages-content/PageContent';
import { hoverContent, animateLogo, logo, logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9 } from './Skills.module.scss';
import LogoNext from '@/assets/images/logo-next.webp';
import LogoElectron from '@/assets/images/logo-electron.webp';
import LogoJS from '@/assets/images/logo-js.webp';
import LogoVue from '@/assets/images/logo-vue.webp';
import LogoNuxt from '@/assets/images/logo-nuxt.webp';
import LogoC from '@/assets/images/logo-c++.webp';
import LogoIonic from '@/assets/images/logo-ionic.webp';
import LogoNode from '@/assets/images/logo-node.webp';
import LogoVBA from '@/assets/images/logo-vba.webp';
import Image from 'next/image';

function Skills({ id = "skills", ...contexts }) {
    return <PageContent { ...{id, ...contexts} }>
        <main className={hoverContent}>
            <section className={[animateLogo].join(' ')}>
                <SkillImg otherLogo={logo1} LogoContext={LogoNext}/>
                <SkillImg otherLogo={logo2} LogoContext={LogoElectron}/>
                <SkillImg otherLogo={logo3} LogoContext={LogoJS}/>
                <SkillImg otherLogo={logo4} LogoContext={LogoVue}/>
                <SkillImg otherLogo={logo5} LogoContext={LogoNuxt}/>
                <SkillImg otherLogo={logo6} LogoContext={LogoC}/>
                <SkillImg otherLogo={logo7} LogoContext={LogoIonic}/>
                <SkillImg otherLogo={logo8} LogoContext={LogoNode}/>
                <SkillImg otherLogo={logo9} LogoContext={LogoVBA}/>
            </section>
        </main>
    </PageContent>
};

function SkillImg({ LogoContext, title = 'Skill Logo', otherLogo }) {
    const { blurHeight, blurWidth, height, width, ...logoContext } = LogoContext;

    return <li className={[logo, otherLogo].join(' ')}>
        <Image {...{alt: title, height: 250, width: 250, ...logoContext}}/>
    </li>
};

function PageSkills() {
    return <div>Skills!</div>
};

export { PageSkills };

export default Skills;