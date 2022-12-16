import { Route } from "react-router-dom";
import Header from "./components/header/Header";
import PageContainer from "./components/page-container/PageContainer";
import ScrollDown from "./components/scroll-down/ScrollDown";

function RoutesMap({path, Element, DefaultElem, exact = !1}, ind) {
    return <Route key={ind} path={path} element={<>
        <Header backToMain={`/#${path.slice(1)}`}/>
        <ScrollDown fixed/>
        <PageContainer>
            <DefaultElem ownerPage/>
            <Element/>
        </PageContainer>
    </>} exact={exact}/>
};

export default RoutesMap;