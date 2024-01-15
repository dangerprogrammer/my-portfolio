'use client';

import { ContextApp } from "@/components/context/ContextApp";
import Navbar from "@/components/navbar/Navbar";
import SecPage from "@/components/sec-page/SecPage";
import { renderSecPage } from "@/scripts/initializePageTools";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

function Page() {
    const { history, ...contexts } = useContext(ContextApp), { push } = useRouter();

    useEffect(renderSecPage, []);

    return <>
        <Navbar { ...{useEffect, push, ...contexts} }/>
        <SecPage/>
    </>
};

export default Page;