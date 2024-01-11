'use client';

import { ContextApp } from "@/components/context/ContextApp";
import Navbar from "@/components/navbar/Navbar";
import { renderSecPage } from "@/scripts/initializePageTools";
import { useContext, useEffect } from "react";

function AboutMe() {
    const { history, ...contexts } = useContext(ContextApp);
    useEffect(() => {
        renderSecPage();
        console.log(history);
    }, []);

    return <>
        <Navbar { ...contexts }/>
    </>
};

export default AboutMe;