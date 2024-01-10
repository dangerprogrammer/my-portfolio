'use client';

import Navbar from "@/components/navbar/Navbar";
import { renderSecPage } from "@/scripts/initializePageTools";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function AboutMe() {
    const router = useRouter();
    useEffect(renderSecPage, []);

    console.log("Opa!")
    console.log(router);

    return <>
        <Navbar/>
    </>
};

export default AboutMe;