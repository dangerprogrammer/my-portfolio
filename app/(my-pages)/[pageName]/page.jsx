'use client';

import BackgroundCanvas from "@/components/background-canvas/BackgroundCanvas";
import { ContextApp } from "@/components/context/ContextApp";
import { listComponents } from "@/components/context/listPages";
import Error from "@/components/error/Error";
import Navbar from "@/components/navbar/Navbar";
import Page from "@/components/page/Page";
import Sidebar from "@/components/sidebar/Sidebar";
import Welcome from "@/components/welcome/Welcome";
import { renderSecPage } from "@/scripts/initializePageTools";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";

function SecPage({ params: { pageName } }) {
    const pathname = usePathname(),
        { ...contexts } = useContext(ContextApp),
        { history, setHistory } = contexts,
        pageHead = listComponents[pageName], hasComponent = pageHead?.head,
        PageComponent = hasComponent || Error;

    if (!history.length) setHistory(oldHistory => [...oldHistory, pathname]);

    let otherComponents = [];
    for (const name in listComponents) if (hasComponent && pageName != name) otherComponents.push(listComponents[name].head);
    useEffect(() => renderSecPage(!hasComponent || pageName), []);

    return <>
        <Navbar/>
        <Page>
            {hasComponent && <Welcome/>}
            <PageComponent { ...{secPage: !0, ...contexts} }/>
            {otherComponents.map(Element => <Element { ...{secPage: !0, ...contexts} }/>)}
        </Page>
        <BackgroundCanvas/>
        <Sidebar noAction/>
    </>
};

export default SecPage;