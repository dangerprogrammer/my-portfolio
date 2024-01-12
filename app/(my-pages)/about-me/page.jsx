'use client';

import { ContextApp } from "@/components/context/ContextApp";
import Navbar from "@/components/navbar/Navbar";
import { renderSecPage } from "@/scripts/initializePageTools";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

function AboutMe() {
    const { history, ...contexts } = useContext(ContextApp), { push } = useRouter();
    
    useEffect(() => {
        renderSecPage();
        const backPage = history[history.length - 2];

        if (backPage?.startsWith('/#')) console.log('Render previous!');
    }, []);

    return <>
        <Navbar { ...{useEffect, push, ...contexts} }/>
    </>
};

export default AboutMe;