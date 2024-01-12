'use client';

import { ContextApp } from "@/components/context/ContextApp";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { hiddenPage, renderSecPage } from "@/scripts/initializePageTools";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

function AboutMe() {
    const { history, ...contexts } = useContext(ContextApp), { push } = useRouter();

    useEffect(() => {
        renderSecPage();
        const backPage = history[history.length - 2];

        if (backPage?.startsWith('/#')) hiddenPage();
    }, []);

    return <>
        <Navbar { ...{useEffect, push, ...contexts} }/>
        <Sidebar noAction/>
    </>
};

export default AboutMe;