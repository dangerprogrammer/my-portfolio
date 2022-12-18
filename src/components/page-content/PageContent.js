import './PageContent.scss';

function PageContent({children, subContent, id}) {
    return <section data-id="page-content" id={id}>{children}</section>
};

export default PageContent;