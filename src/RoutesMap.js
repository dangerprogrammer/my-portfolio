import { Route } from "react-router-dom";
import Header from "./components/header/Header";
import PageContainer from "./components/page-container/PageContainer";
import PageContent from "./components/page-content/PageContent";
import ScrollDown from "./components/scroll-down/ScrollDown";
import { Main } from "./pages/main/Main";

function RoutesMap({path, backPath, Element, DefaultElem, exact = !1}, ind) {
    const defaultRoute = <Route key={ind} path={path} element={<>
        <Header backToMain={backPath}/>
        <ScrollDown fixed/>
        <PageContainer>
            <PageContent id={path.slice(1)}>
                {DefaultElem && <DefaultElem ownerPage/>}
            </PageContent>
            <Element/>
        </PageContainer>
    </>} exact={exact}/>,
        mainRoute = <Route key={ind} path="/" element={<Main/>} exact/>
    return path === '/' ? mainRoute : defaultRoute;
};

export default RoutesMap;