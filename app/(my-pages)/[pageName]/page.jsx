'use client';

import BackgroundCanvas from "@/components/background-canvas/BackgroundCanvas";
import { ContextApp } from "@/components/context/ContextApp";
import Navbar from "@/components/navbar/Navbar";
import AboutMe from "@/components/pages/about-me/AboutMe";
import SecPage from "@/components/sec-page/SecPage";
import Sidebar from "@/components/sidebar/Sidebar";
import { renderSecPage } from "@/scripts/initializePageTools";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

function Page() {
    const { history, ...contexts } = useContext(ContextApp), { push } = useRouter();

    useEffect(renderSecPage, []);

    return <>
        <Navbar { ...{useEffect, push, ...contexts} }/>
        <SecPage>
            <AboutMe { ...{useEffect, push, ...contexts} }/>
        </SecPage>
        <BackgroundCanvas/>
        <Sidebar/>
    </>
};

export default Page;