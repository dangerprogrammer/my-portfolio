import PageContent from '../../pages-content/PageContent';
import { hoverContent } from './Skills.module.scss';

function Skills({ id = "skills", ...contexts }) {
    return <PageContent { ...{id, ...contexts} }>
        <main className={hoverContent}></main>
    </PageContent>
};

function PageSkills() {
    return <div>Skills!</div>
};

export { PageSkills };

export default Skills;