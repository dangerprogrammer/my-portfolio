'use client';

import { ContextApp } from "@/components/context/ContextApp";
import Navbar from "@/components/navbar/Navbar";
import { renderSecPage } from "@/scripts/initializePageTools";
import { useContext, useEffect } from "react";

function AboutMe() {
    const { history, setHistory } = useContext(ContextApp);
    useEffect(renderSecPage, []);

    return <>
        <Navbar/>
    </>
};

export default AboutMe;