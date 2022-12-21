import { Route } from "react-router-dom";
import Header from "./components/header/Header";
import PageContainer from "./components/page-container/PageContainer";
import PageContent from "./components/page-content/PageContent";
import ScrollDown from "./components/scroll-down/ScrollDown";
import { Main } from "./pages/main/Main";
import loadWindow from "./scripts/loadWindow";

function RoutesMap({path, backPath, pathTitle, Element, DefaultElem, exact = !1}, ind) {
    const defaultElemItems = {path, backPath, pathTitle, Element, DefaultElem};
    const defaultRoute = <Route key={ind} path={path} element={
    <DefaultElement {...defaultElemItems}/>} exact={exact}/>,
        mainRoute = <Route key={ind} path="/" element={<Main/>} exact/>
    return path === '/' ? mainRoute : defaultRoute;
};

function DefaultElement({path, backPath, pathTitle, Element, DefaultElem}) {
    setTimeout(loadWindow, 5e2);
    
    return <>
        <Header backToMain={backPath} pathTitle={pathTitle}/>
        <ScrollDown fixed/>
        <PageContainer>
            <PageContent id={path.slice(1)}>
                {DefaultElem && <DefaultElem ownerPage/>}
            </PageContent>
            <Element/>
        </PageContainer>
    </>
};

export default RoutesMap;