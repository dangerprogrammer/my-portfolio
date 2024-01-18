'use client';

import BackgroundCanvas from "@/components/background-canvas/BackgroundCanvas";
import { ContextApp } from "@/components/context/ContextApp";
import Error from "@/components/error/Error";
import Navbar from "@/components/navbar/Navbar";
import Page from "@/components/page/Page";
import Sidebar from "@/components/sidebar/Sidebar";
import Welcome from "@/components/welcome/Welcome";
import AboutMe from "@/components/pages/about-me/AboutMe";
import Skills from "@/components/pages/skills/Skills";
import MyProjects from "@/components/pages/my-projects/MyProjects";
import { renderSecPage } from "@/scripts/initializePageTools";
import { useContext, useEffect } from "react";
import { listComponents } from "@/components/context/listPages";

function SecPage({ params: { pageName } }) {
    const { ...contexts } = useContext(ContextApp)
    //     pageHead = listComponents[pageName], hasComponent = pageHead?.head,
    //     PageComponent = hasComponent || Error;

    // let otherComponents = [];
    // for (const name in listComponents) if (hasComponent && pageName != name) otherComponents.push(listComponents[name].head);
    // useEffect(() => renderSecPage(!hasComponent || pageName), []);

    console.log(listComponents);
    return <>
        <Navbar/>
        <Page>
            {/* {hasComponent && <Welcome/>}
            <PageComponent { ...{secPage: !0, ...contexts} }/>
            {otherComponents.map((Element, ind) => <Element key={ind} { ...{secPage: !0, ...contexts} }/>)} */}
        </Page>
        <BackgroundCanvas/>
        <Sidebar noAction/>
    </>
};

export default SecPage;