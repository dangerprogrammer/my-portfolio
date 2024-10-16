import PageContent from '../../pages-content/PageContent';
import { hoverContent, reverse, animateLogo, animate1, animate2, logo } from './Skills.module.scss';
import LogoNext from '@/assets/images/logo-next.webp';
import LogoElectron from '@/assets/images/logo-electron.webp';
import LogoJS from '@/assets/images/logo-js.webp';
import LogoVue from '@/assets/images/logo-vue.webp';
import LogoNuxt from '@/assets/images/logo-nuxt.webp';
import LogoC from '@/assets/images/logo-c++.webp';
import LogoIonic from '@/assets/images/logo-ionic.webp';
import LogoNode from '@/assets/images/logo-node.webp';
import LogoVBA from '@/assets/images/logo-vba.webp';
import LogoNodemon from '@/assets/images/logo-nodemon.webp';
import LogoGCloud from '@/assets/images/logo-g-cloud.webp';
import LogoAWS from '@/assets/images/logo-aws.webp';
import Image from 'next/image';
import { randomNumber } from '@/tools/randomNumbers';

function Skills({ id = "skills", ...contexts }) {
    return <PageContent { ...{id, ...contexts} }>
        <main className={hoverContent}>
            <section className={[animateLogo, animate1].join(' ')}>
                <SkillImg delayAnimation={5} LogoContext={LogoNext}/>
                <SkillImg delayAnimation={4} LogoContext={LogoElectron}/>
                <SkillImg delayAnimation={3} LogoContext={LogoJS}/>
                <SkillImg delayAnimation={2} LogoContext={LogoVue}/>
                <SkillImg delayAnimation={1} LogoContext={LogoNuxt}/>
                <SkillImg delayAnimation={0} LogoContext={LogoC}/>
            </section>
            <section className={[animateLogo, animate2, reverse].join(' ')}>
                <SkillImg delayAnimation={5} LogoContext={LogoAWS}/>
                <SkillImg delayAnimation={4} LogoContext={LogoGCloud}/>
                <SkillImg delayAnimation={3} LogoContext={LogoIonic}/>
                <SkillImg delayAnimation={2} LogoContext={LogoNode}/>
                <SkillImg delayAnimation={1} LogoContext={LogoVBA}/>
                <SkillImg delayAnimation={0} LogoContext={LogoNodemon}/>
            </section>
        </main>
    </PageContent>
};

function SkillImg({ LogoContext, delayAnimation, title = 'Skill Logo' }) {
    const { blurHeight, blurWidth, height, width, ...logoContext } = LogoContext,
        random = randomNumber({ min: 2, max: 6 });

    return <li className={[logo].join(' ')} style={{
        '--delay1': `-${delayAnimation * 2.5}s`,
        '--delay2': `-${delayAnimation * 1.85}s`,
        '--delay-show': `${random}s`}}>
        <Image {...{alt: title, height: 250, width: 250, ...logoContext}}/>
    </li>
};

function PageSkills() {
    return <div>Skills!</div>
};

export { PageSkills };

export default Skills;