import PageContent from '../../pages-content/PageContent';

function Skills({ id = "skills", ...contexts }) {
    return <PageContent { ...{id, ...contexts} }/>
};

function PageSkills() {
    return <div>Skills!</div>
};

export { PageSkills };

export default Skills;