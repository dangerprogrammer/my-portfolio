'use client';

import Navbar from "@/components/navbar/Navbar";
import { renderSecPage } from "@/scripts/initializePageTools";
import { useEffect } from "react";

function AboutMe() {
    useEffect(renderSecPage, []);

    return <>
        <Navbar/>
    </>
};

export default AboutMe;