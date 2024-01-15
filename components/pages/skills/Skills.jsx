import PageContent from '../../pages-content/PageContent';

function Skills({ id = "skills", ...contexts }) {
    return <PageContent { ...{id, ...contexts} }/>
};

export default Skills;