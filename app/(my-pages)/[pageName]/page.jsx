'use client';

import BackgroundCanvas from "@/components/background-canvas/BackgroundCanvas";
import { ContextApp } from "@/components/context/ContextApp";
import { listComponents } from "@/components/context/listPages";
import Error from "@/components/error/Error";
import Navbar from "@/components/navbar/Navbar";
import SecPage from "@/components/sec-page/SecPage";
import Sidebar from "@/components/sidebar/Sidebar";
import { renderSecPage } from "@/scripts/initializePageTools";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

async function getServerSideProps({ params }) {
    return {
        props: params
    }
};

export { getServerSideProps };

function Page({ params: { pageName } }) {
    const { history, ...contexts } = useContext(ContextApp), { push } = useRouter(),
        pageHead = listComponents[pageName],
        PageComponent = pageHead?.head || Error;

    useEffect(() => renderSecPage(!!pageHead), []);

    return <>
        <Navbar { ...{useEffect, push, ...contexts} }/>
        <SecPage>
            <PageComponent { ...{useEffect, push, secPage: !0, ...contexts} }/>
        </SecPage>
        <BackgroundCanvas/>
        <Sidebar noAction/>
    </>
};

export default Page;