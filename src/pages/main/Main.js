import Header from "../../components/header/Header";
import MainPagesList from "../../components/main-pages-list/MainPagesList";
import NavPage from "../../components/nav-page/NavPage";
import PageContainer from "../../components/page-container/PageContainer";
import PageContent from "../../components/page-content/PageContent";
import ScrollDown from "../../components/scroll-down/ScrollDown";

function Main() {
    return <>
        <Header/>
        <NavPage/>
        <ScrollDown/>
        <PageContainer>
            <PageContent>Main</PageContent>
            <MainPagesList/>
        </PageContainer>
    </>
};

export default Main;