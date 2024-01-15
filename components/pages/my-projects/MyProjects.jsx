import PageContent from '../../pages-content/PageContent';

function MyProjects({ id = "my-projects", ...contexts }) {
    return <PageContent { ...{id, ...contexts} }/>
};

export default MyProjects;