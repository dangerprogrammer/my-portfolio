import PageContent from '../../pages-content/PageContent';

function MyProjects({ id = "my-projects", ...contexts }) {
    return <PageContent { ...{id, ...contexts} }/>
};

function PageMyProjects() {
    return <div>My Projects!</div>
};

export { PageMyProjects };

export default MyProjects;