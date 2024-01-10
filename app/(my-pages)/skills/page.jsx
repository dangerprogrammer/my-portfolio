'use client';

import Navbar from "@/components/navbar/Navbar";
import { renderSecPage } from "@/scripts/initializePageTools";
import { useEffect } from "react";

function Skills() {
    useEffect(renderSecPage, []);

    return <>
        <Navbar/>
    </>
};

export default Skills;