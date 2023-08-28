'use client';

import Navbar from "@/components/navbar/Navbar";
import { renderSecPage } from "@/scripts/initializePageTools";
import { useEffect } from "react";

function MyProjects() {
    useEffect(renderSecPage, []);

    return <>
        <Navbar/>
    </>
};

export default MyProjects;