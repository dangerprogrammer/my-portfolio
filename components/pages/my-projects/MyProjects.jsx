import PageContent from '../../pages-content/PageContent';

function MyProjects({ ...contexts }) {
    return <PageContent titlePage="My Projects" id="my-projects" { ...contexts }/>
};

export default MyProjects;