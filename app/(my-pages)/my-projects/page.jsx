'use client';

import { ContextApp } from "@/components/context/ContextApp";
import Navbar from "@/components/navbar/Navbar";
import { renderSecPage } from "@/scripts/initializePageTools";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

function MyProjects() {
    const { history, ...contexts } = useContext(ContextApp), { push } = useRouter();
    useEffect(() => {
        const backPage = history[history.length - 2];
        renderSecPage();
    }, []);

    return <>
        <Navbar { ...{useEffect, push, ...contexts} }/>
    </>
};

export default MyProjects;